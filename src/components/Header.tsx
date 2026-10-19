import { useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { Button } from './Button'
import { Logo } from './Logo'

export function Header() {
  const { t, lang, setLang, theme, toggleTheme } = usePreferences()
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs uppercase tracking-[0.18em] transition-colors ${
      isActive
        ? 'text-brand-primary'
        : 'text-brand-ink/70 hover:text-brand-primary'
    }`

  const controls = (
    <div className="flex items-center gap-2">
      <div
        className="flex rounded-full border border-brand-ink/15 p-0.5"
        role="group"
        aria-label="Language"
      >
        <button
          type="button"
          onClick={() => setLang('en')}
          className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
            lang === 'en'
              ? 'bg-brand-primary text-brand-cream'
              : 'text-brand-ink/70 hover:text-brand-ink'
          }`}
          aria-pressed={lang === 'en'}
          aria-label={t.langEn}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang('ka')}
          className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
            lang === 'ka'
              ? 'bg-brand-primary text-brand-cream'
              : 'text-brand-ink/70 hover:text-brand-ink'
          }`}
          aria-pressed={lang === 'ka'}
          aria-label={t.langKa}
        >
          KA
        </button>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary"
        aria-label={theme === 'light' ? t.themeDark : t.themeLight}
        title={theme === 'light' ? t.themeDark : t.themeLight}
      >
        {theme === 'light' ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/5 bg-brand-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-5 py-3 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {t.nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex">{controls}</div>
          <Button to={siteMeta.bookPath} size="sm" className="hidden sm:inline-flex">
            {t.bookCta}
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`border-t border-brand-ink/5 bg-brand-paper lg:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <nav
          className="mx-auto flex max-w-content flex-col gap-1 px-5 py-6"
          aria-label="Mobile"
        >
          <div className="mb-4 flex sm:hidden">{controls}</div>
          {t.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="rounded-lg px-3 py-3 text-sm uppercase tracking-[0.16em] text-brand-ink hover:bg-brand-secondary/40"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to={siteMeta.bookPath}
            className="mt-3 rounded-full bg-brand-primary px-4 py-3 text-center text-xs uppercase tracking-[0.18em] text-brand-cream"
            onClick={() => setOpen(false)}
          >
            {t.bookCta}
          </Link>
        </nav>
      </div>
    </header>
  )
}
