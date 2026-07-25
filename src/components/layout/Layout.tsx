import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { RouteSeo } from '@/components/seo/RouteSeo'

export function Layout() {
  return (
    <>
      <RouteSeo />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
