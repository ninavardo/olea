import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { Logo } from './Logo'
import { OliveDivider } from './OliveDivider'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
    </svg>
  )
}

export function Footer() {
  const { t } = usePreferences()
  const [email, setEmail] = useState('')

  const onNewsletter = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="border-t border-brand-ink/10 bg-brand-secondary/30">
      <div className="mx-auto max-w-content px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-ink/70">
              {t.footer.blurb}
            </p>
            <OliveDivider className="justify-start pt-6" />
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-ink">{t.footer.visit}</h3>
            <address className="mt-4 not-italic text-sm leading-relaxed text-brand-ink/70">
              <p>{t.contact.addressLine1}</p>
              <p>{t.contact.addressLine2}</p>
              <p className="mt-3">
                <a href={siteMeta.contact.phoneHref} className="hover:text-brand-primary">
                  {siteMeta.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={siteMeta.contact.emailHref} className="hover:text-brand-primary">
                  {siteMeta.contact.email}
                </a>
              </p>
            </address>
            <ul className="mt-4 space-y-1 text-sm text-brand-ink/70">
              {t.contact.hours.map((row) => (
                <li key={row.days}>
                  <span className="text-brand-ink/50">{row.days}: </span>
                  {row.time}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-brand-accent">
              ★ {t.contact.ratingLabel}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-ink">{t.footer.explore}</h3>
            <ul className="mt-4 space-y-2">
              {t.footer.quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-brand-ink/70 transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={siteMeta.social.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary"
                aria-label={t.social.instagram}
              >
                <InstagramIcon />
              </a>
              <a
                href={siteMeta.social.facebook.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary"
                aria-label={t.social.facebook}
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg text-brand-ink">
              {t.footer.newsletterLabel}
            </h3>
            <p className="mt-2 text-sm text-brand-ink/60">{t.footer.newsletterNote}</p>
            <form onSubmit={onNewsletter} className="mt-4 flex flex-col gap-3" noValidate>
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.newsletterPlaceholder}
                className="w-full rounded-full border border-brand-ink/15 bg-brand-paper px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/40"
                autoComplete="email"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-primary px-5 py-3 text-xs uppercase tracking-[0.16em] text-brand-cream transition-colors hover:bg-brand-ink hover:text-brand-paper"
              >
                {t.footer.newsletterJoin}
              </button>
            </form>
          </div>
        </div>

        <p className="mt-14 border-t border-brand-ink/10 pt-6 text-center text-xs text-brand-ink/50">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
