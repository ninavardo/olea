import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { MapEmbed } from '../components/MapEmbed'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

type Errors = {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const { t } = usePreferences()
  useDocumentTitle(t.pages.contact.title)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): Errors => {
    const next: Errors = {}
    if (!name.trim()) next.name = t.contactPage.errors.name
    if (!email.trim()) {
      next.email = t.contactPage.errors.email
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = t.contactPage.errors.emailInvalid
    }
    if (!message.trim() || message.trim().length < 10) {
      next.message = t.contactPage.errors.message
    }
    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Olea"
          title={t.contactPage.title}
          subtitle={t.contactPage.intro}
          className="mb-12"
        />
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-6 text-sm leading-relaxed text-brand-ink/70">
            <address className="not-italic">
              <p className="font-heading text-2xl text-brand-ink">
                {t.contactPage.studio}
              </p>
              <p className="mt-3">{t.contact.addressLine1}</p>
              <p>{t.contact.addressLine2}</p>
            </address>
            <p>
              <a href={siteMeta.contact.phoneHref} className="hover:text-brand-primary">
                {siteMeta.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={siteMeta.contact.emailHref} className="hover:text-brand-primary">
                {siteMeta.contact.email}
              </a>
            </p>
            <ul className="max-w-sm space-y-2 border-t border-brand-ink/10 pt-6">
              {t.contact.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-brand-accent">★ {t.contact.ratingLabel}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={siteMeta.social.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.16em] text-brand-primary underline-offset-4 hover:underline"
              >
                {t.social.instagram}
              </a>
              <a
                href={siteMeta.social.facebook.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.16em] text-brand-primary underline-offset-4 hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="mt-10">
            <MapEmbed />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          {submitted ? (
            <div
              className="rounded-sm border border-brand-primary/20 bg-brand-secondary/30 px-8 py-12"
              role="status"
            >
              <h2 className="font-heading text-3xl text-brand-ink">
                {t.contactPage.thankYou}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                {t.contactPage.formSuccess}
              </p>
              <div className="mt-8">
                <Button to="/">{t.contactPage.backHome}</Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-sm border border-brand-ink/10 bg-brand-paper px-6 py-8 shadow-soft sm:px-8"
            >
              <h2 className="font-heading text-2xl text-brand-ink">
                {t.contactPage.writeToUs}
              </h2>
              <p className="mt-2 text-sm text-brand-ink/55">{t.contactPage.formNote}</p>

              <div className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs uppercase tracking-[0.14em] text-brand-ink/60"
                  >
                    {t.contactPage.name}
                  </label>
                  <input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-sm border border-brand-ink/15 bg-brand-paper px-4 py-3 text-sm"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? (
                    <p className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs uppercase tracking-[0.14em] text-brand-ink/60"
                  >
                    {t.contactPage.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-sm border border-brand-ink/15 bg-brand-paper px-4 py-3 text-sm"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs uppercase tracking-[0.14em] text-brand-ink/60"
                  >
                    {t.contactPage.message}
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="mt-2 w-full rounded-sm border border-brand-ink/15 bg-brand-paper px-4 py-3 text-sm"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? (
                    <p className="mt-1 text-sm text-red-700 dark:text-red-300">{errors.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-8">
                <Button type="submit">{t.contactPage.send}</Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  )
}
