-- ============================================================================
-- DoLF — Supabase schema (auth profiles + orders)
-- ----------------------------------------------------------------------------
-- How to apply:
--   • Supabase dashboard → SQL Editor → paste this file → Run, OR
--   • supabase db push   (with the Supabase CLI + a linked project)
--
-- Products stay in the frontend code for now; orders snapshot the product
-- slug + name + unit price so an order is self-contained.
-- Row Level Security (RLS) is enabled everywhere: a user only sees their own
-- rows; admins (profiles.role = 'admin') see everything.
-- ============================================================================

-- ─── profiles ───────────────────────────────────────────────────────────────
-- One row per auth user. Created automatically on signup by a trigger below.
create table if not exists public.profiles (
  id         uuid primary key references auth.users (id) on delete cascade,
  name       text,
  email      text,
  country    text,
  phone      text,
  address    text,
  role       text not null default 'user' check (role in ('user', 'admin')),
  grade      text not null default 'Basic',
  status     text not null default 'Active',
  created_at timestamptz not null default now()
);

-- ─── orders ──────────────────────────────────────────────────────────────────
create table if not exists public.orders (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users (id) on delete cascade,
  status       text not null default 'pending'
               check (status in ('pending', 'paid', 'shipped', 'delivered', 'cancelled')),
  currency     text not null default 'KRW',
  subtotal     numeric(12, 2) not null default 0,
  shipping_fee numeric(12, 2) not null default 0,
  total        numeric(12, 2) not null default 0,
  recipient    text,
  address      text,
  phone        text,
  carrier      text, -- shipping courier (e.g. CJ대한통운)
  tracking_no  text, -- waybill / tracking number
  payment_ref  text, -- Toss Payments paymentKey, filled after approval
  created_at   timestamptz not null default now()
);
create index if not exists orders_user_id_idx on public.orders (user_id);

-- ─── order_items ─────────────────────────────────────────────────────────────
create table if not exists public.order_items (
  id           uuid primary key default gen_random_uuid(),
  order_id     uuid not null references public.orders (id) on delete cascade,
  product_slug text not null,
  name         text not null,          -- snapshot at purchase time
  unit_price   numeric(12, 2) not null, -- snapshot amount (no currency symbol)
  currency     text not null,
  quantity     integer not null check (quantity > 0)
);
create index if not exists order_items_order_id_idx on public.order_items (order_id);

-- ─── helper: is the caller an admin? ────────────────────────────────────────
-- SECURITY DEFINER so it can read profiles without tripping profiles' own RLS.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ─── auto-create a profile on signup ────────────────────────────────────────
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, name, email, country, phone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', ''),
    new.email,
    coalesce(new.raw_user_meta_data ->> 'country', ''),
    coalesce(new.raw_user_meta_data ->> 'phone', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
-- Row Level Security
-- ============================================================================
alter table public.profiles    enable row level security;
alter table public.orders      enable row level security;
alter table public.order_items enable row level security;

-- profiles: read/update your own; admins read all.
drop policy if exists "profiles: select own or admin" on public.profiles;
create policy "profiles: select own or admin" on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: update own" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- orders: users manage their own; admins read + update all.
drop policy if exists "orders: select own or admin" on public.orders;
create policy "orders: select own or admin" on public.orders
  for select using (user_id = auth.uid() or public.is_admin());

drop policy if exists "orders: insert own" on public.orders;
create policy "orders: insert own" on public.orders
  for insert with check (user_id = auth.uid());

drop policy if exists "orders: admin update" on public.orders;
create policy "orders: admin update" on public.orders
  for update using (public.is_admin());

-- order_items: readable/insertable via the owning order; admins read all.
drop policy if exists "order_items: select via order" on public.order_items;
create policy "order_items: select via order" on public.order_items
  for select using (
    public.is_admin()
    or exists (
      select 1 from public.orders o
      where o.id = order_items.order_id and o.user_id = auth.uid()
    )
  );

drop policy if exists "order_items: insert via own order" on public.order_items;
create policy "order_items: insert via own order" on public.order_items
  for insert with check (
    exists (
      select 1 from public.orders o
      where o.id = order_items.order_id and o.user_id = auth.uid()
    )
  );

-- ─── products (operational overrides) ────────────────────────────────────────
-- Catalog content (names, images, copy, base prices) stays in the frontend.
-- This table holds admin-managed operational data per product slug: per-currency
-- price overrides (null = use the catalog price), stock, low-stock threshold,
-- and whether the product is published to the storefront. Rows are created on
-- demand (upsert) when an admin first edits a product.
create table if not exists public.products (
  slug                text primary key,
  price_krw           numeric(12, 2),
  price_usd           numeric(12, 2),
  price_jpy           numeric(12, 2),
  stock               integer not null default 0,
  low_stock_threshold integer not null default 20,
  published           boolean not null default true,
  updated_at          timestamptz not null default now()
);

alter table public.products enable row level security;

-- Anyone may read (the storefront will use this later); only admins may write.
drop policy if exists "products: public read" on public.products;
create policy "products: public read" on public.products
  for select using (true);

drop policy if exists "products: admin write" on public.products;
create policy "products: admin write" on public.products
  for all using (public.is_admin()) with check (public.is_admin());

-- ─── store_settings (single-row store config) ────────────────────────────────
-- One editable row (id = 1) holding shipping policy + store info + admin
-- notification prefs. Read by the storefront (shipping), written by admins.
create table if not exists public.store_settings (
  id                       smallint primary key default 1 check (id = 1),
  store_name               text not null default 'DoLF',
  store_email              text not null default 'hello@dolfstory.com',
  instagram                text not null default '@dolf._official',
  biz_number               text not null default '',
  shipping_fee_krw         integer not null default 3500,
  shipping_fee_usd         numeric(12, 2) not null default 3.5,
  shipping_fee_jpy         integer not null default 500,
  free_ship_threshold_krw  integer not null default 70000, -- domestic (KRW) only
  notify_new_order         boolean not null default true,
  notify_new_member        boolean not null default true,
  notify_low_stock         boolean not null default false,
  updated_at               timestamptz not null default now()
);

insert into public.store_settings (id) values (1) on conflict (id) do nothing;

alter table public.store_settings enable row level security;

drop policy if exists "store_settings: public read" on public.store_settings;
create policy "store_settings: public read" on public.store_settings
  for select using (true);

drop policy if exists "store_settings: admin write" on public.store_settings;
create policy "store_settings: admin write" on public.store_settings
  for all using (public.is_admin()) with check (public.is_admin());
