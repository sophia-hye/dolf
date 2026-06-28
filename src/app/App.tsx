import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/home/HomePage'
import { PlaceholderPage } from '@/pages/PlaceholderPage'

// gh-pages serves under /dolf/ in production; BASE_URL handles both envs.
const basename = import.meta.env.BASE_URL

export function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<PlaceholderPage title="About" />} />
          <Route path="products" element={<PlaceholderPage title="Products" />} />
          <Route path="community" element={<PlaceholderPage title="Community" />} />
          <Route path="contact" element={<PlaceholderPage title="Contact" />} />
          <Route path="shop" element={<PlaceholderPage title="Shop" />} />
          <Route path="*" element={<PlaceholderPage title="Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
