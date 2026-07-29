import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/** True once the Supabase project URL + anon key are provided via env vars. */
export const isSupabaseConfigured = Boolean(url && anonKey)

/**
 * Shared Supabase browser client. Stays `null` until the env vars are set, so
 * the app keeps running on the current mock/local data until Supabase is
 * actually connected. Guard usage with `isSupabaseConfigured` or
 * `requireSupabase()`.
 */
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null

/** Returns the client, throwing a clear error if Supabase isn't configured. */
export function requireSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Copy .env.example to .env and set ' +
        'VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
    )
  }
  return supabase
}
