import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/home/HomePage'
import { AboutPage } from '@/pages/about/AboutPage'
import { ProductsPage } from '@/pages/products/ProductsPage'
import { CommunityPage } from '@/pages/community/CommunityPage'
import { ContactPage } from '@/pages/contact/ContactPage'
import { ShopPage } from '@/pages/shop/ShopPage'
import { ShopDetailPage } from '@/pages/shop/detail/ShopDetailPage'
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
          <Route path="community" element={<CommunityPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:slug" element={<ShopDetailPage />} />
          <Route path="*" element={<PlaceholderPage title="Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
