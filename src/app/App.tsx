import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/home/HomePage'
import { AboutPage } from '@/pages/about/AboutPage'
import { ProductsPage } from '@/pages/products/ProductsPage'
import { ProductDetailPage } from '@/pages/products/ProductDetailPage'
import { CommunityPage } from '@/pages/community/CommunityPage'
import { ContactPage } from '@/pages/contact/ContactPage'
import { ShopPage } from '@/pages/shop/ShopPage'
import { ShopDetailPage } from '@/pages/shop/detail/ShopDetailPage'
import { SignInPage } from '@/pages/auth/SignInPage'
import { SignUpPage } from '@/pages/auth/SignUpPage'
import { MyPage } from '@/pages/account/MyPage'
import { AdminLayout } from '@/pages/admin/AdminLayout'
import { DashboardPage } from '@/pages/admin/DashboardPage'
import { MembersPage } from '@/pages/admin/MembersPage'
import { MemberDetailPage } from '@/pages/admin/MemberDetailPage'
import { OrdersPage } from '@/pages/admin/OrdersPage'
import { OrderDetailPage } from '@/pages/admin/OrderDetailPage'
import { TrackingInputPage } from '@/pages/admin/TrackingInputPage'
import { ProductsPage as AdminProductsPage } from '@/pages/admin/ProductsPage'
import { SettingsPage } from '@/pages/admin/SettingsPage'
import { CustomerInsightsPage } from '@/pages/admin/CustomerInsightsPage'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { PlaceholderPage } from '@/pages/PlaceholderPage'

// gh-pages serves under /dolf/ in production; BASE_URL handles both envs.
const basename = import.meta.env.BASE_URL

export function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:slug" element={<ShopDetailPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route
            path="mypage"
            element={
              <ProtectedRoute role="user">
                <MyPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PlaceholderPage title="Not Found" />} />
        </Route>

        <Route
          path="admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="insights" element={<CustomerInsightsPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="members/:id" element={<MemberDetailPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="orders/:id" element={<OrderDetailPage />} />
          <Route path="orders/:id/tracking" element={<TrackingInputPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
