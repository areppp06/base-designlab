import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const isGallery = pathname === '/gallery'

  return (
    <div
      className={
        isGallery
          ? 'h-dvh flex flex-col overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]'
          : 'min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]'
      }
    >
      <Header />
      <div className={isGallery ? 'flex-1 min-h-0' : 'flex-1'}>
        <Outlet />
      </div>
      {!isGallery && <Footer />}
    </div>
  )
}
