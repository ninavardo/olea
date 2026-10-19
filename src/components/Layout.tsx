import { Outlet } from 'react-router-dom'
import { usePreferences } from '../context/PreferencesContext'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  useScrollToTop()
  const { t } = usePreferences()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-brand-cream"
      >
        {t.skipToContent}
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
