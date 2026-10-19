import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { Stepper } from '../components/Stepper'
import { findTreatment, siteMeta, type TreatmentRef } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

type Details = {
  name: string
  phone: string
  email: string
  notes: string
}

type DetailErrors = Partial<Record<keyof Details, string>>

function buildDays(count: number): Date[] {
  const days: Date[] = []
  const start = new Date()
  start.setHours(0, 0, 0, 0)
  for (let i = 1; i <= count; i += 1) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    days.push(d)
  }
  return days
}

function formatDay(date: Date, lang: string): string {
  return date.toLocaleDateString(lang === 'ka' ? 'ka-GE' : 'en-GB', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

function formatDayKey(date: Date): string {
  return date.toISOString().slice(0, 10)
}

export function Book() {
  const { t, lang } = usePreferences()
  useDocumentTitle(t.pages.book.title)
  const [params] = useSearchParams()
  const preselected = findTreatment(lang, params.get('treatment') ?? '')

  const [step, setStep] = useState(0)
  const [treatment, setTreatment] = useState<TreatmentRef | undefined>(preselected)
  const [date, setDate] = useState<Date | undefined>()
  const [time, setTime] = useState<string | undefined>()
  const [details, setDetails] = useState<Details>({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })
  const [detailErrors, setDetailErrors] = useState<DetailErrors>({})
  const [confirmed, setConfirmed] = useState(false)

  const days = useMemo(() => buildDays(30), [])
  const unavailable = new Set<number>(siteMeta.book.unavailableSlotIndexes)

  const liveTreatment = treatment
    ? findTreatment(lang, treatment.id) ?? treatment
    : undefined

  const validateDetails = (): DetailErrors => {
    const next: DetailErrors = {}
    if (!details.name.trim()) next.name = t.book.errors.name
    if (!details.phone.trim() || details.phone.trim().length < 7) {
      next.phone = t.book.errors.phone
    }
    if (!details.email.trim()) {
      next.email = t.book.errors.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
      next.email = t.book.errors.emailInvalid
    }
    return next
  }

  const goNext = () => {
    if (step === 0 && !treatment) return
    if (step === 1 && (!date || !time)) return
    if (step === 2) {
      const errors = validateDetails()
      setDetailErrors(errors)
      if (Object.keys(errors).length > 0) return
    }
    if (step === 3) {
      setConfirmed(true)
      return
    }
    setStep((s) => Math.min(s + 1, t.book.steps.length - 1))
  }

  const goBack = () => setStep((s) => Math.max(s - 1, 0))

  const onDetailsSubmit = (e: FormEvent) => {
    e.preventDefault()
    goNext()
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-lg px-5 py-20 text-center md:px-8">
        <Logo markOnly className="mb-8 flex justify-center" />
        <h1 className="font-heading text-4xl text-brand-ink">
          {t.book.confirmationTitle}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
          {t.book.confirmationBody}
        </p>
        <div className="mt-10">
          <Button to="/">{t.book.backHome}</Button>
        </div>
      </div>
    )
  }

  const summary = (
    <aside className="rounded-sm border border-brand-ink/10 bg-brand-secondary/20 p-6 lg:sticky lg:top-28">
      <div className="mb-4 flex justify-center lg:justify-start">
        <Logo markOnly />
      </div>
      <h2 className="font-heading text-xl text-brand-ink">{t.book.summaryTitle}</h2>
      <dl className="mt-4 space-y-3 text-sm text-brand-ink/70">
        <div>
          <dt className="text-xs uppercase tracking-[0.14em] text-brand-ink/45">
            {t.book.labels.treatment}
          </dt>
          <dd className="mt-1 text-brand-ink">
            {liveTreatment?.name ?? t.book.notSelected}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.14em] text-brand-ink/45">
            {t.book.labels.when}
          </dt>
          <dd className="mt-1 text-brand-ink">
            {date && time
              ? `${formatDay(date, lang)} · ${time}`
              : t.book.notSelected}
          </dd>
        </div>
        {liveTreatment ? (
          <div>
            <dt className="text-xs uppercase tracking-[0.14em] text-brand-ink/45">
              {t.book.labels.details}
            </dt>
            <dd className="mt-1">
              {liveTreatment.duration} · {liveTreatment.price}
            </dd>
          </div>
        ) : null}
      </dl>
      <p className="mt-6 text-xs leading-relaxed text-brand-ink/50">{t.book.demoNote}</p>
    </aside>
  )

  return (
    <div className="mx-auto max-w-content px-5 py-12 md:px-8 md:py-16">
      <div className="mb-8 rounded-sm border border-brand-accent/30 bg-brand-secondary/40 px-4 py-3 text-sm text-brand-ink/80">
        {t.book.demoNote}
      </div>

      <h1 className="font-heading text-4xl text-brand-ink md:text-5xl">{t.book.title}</h1>
      <div className="mt-8">
        <Stepper steps={t.book.steps} current={step} />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]">
        <div>
          {step === 0 ? (
            <div className="space-y-10">
              <p className="text-sm text-brand-ink/60">{t.book.chooseTreatment}</p>
              {Object.entries(t.treatments).map(([ritualId, group]) => (
                <fieldset key={ritualId}>
                  <legend className="font-heading text-2xl text-brand-ink">
                    {group.ritualName}
                  </legend>
                  <ul className="mt-4 space-y-3">
                    {Object.entries(group.items).map(([id, item]) => {
                      const selected = treatment?.id === id
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            onClick={() => setTreatment({ id, ritualId, ...item })}
                            className={`w-full rounded-sm border px-4 py-4 text-left transition-colors ${
                              selected
                                ? 'border-brand-primary bg-brand-primary/5'
                                : 'border-brand-ink/10 hover:border-brand-primary/40'
                            }`}
                            aria-pressed={selected}
                          >
                            <span className="font-heading text-xl text-brand-ink">
                              {item.name}
                            </span>
                            <span className="mt-1 block text-sm text-brand-ink/60">
                              {item.description}
                            </span>
                            <span className="mt-2 block text-xs uppercase tracking-[0.14em] text-brand-ink/45">
                              {item.duration} · {item.price}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </fieldset>
              ))}
            </div>
          ) : null}

          {step === 1 ? (
            <div>
              <h2 className="font-heading text-2xl text-brand-ink">{t.book.dateTime}</h2>
              <p className="mt-2 text-sm text-brand-ink/60">{t.book.nextDays}</p>
              <div className="mt-6 grid max-h-64 grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3 md:grid-cols-4">
                {days.map((day) => {
                  const key = formatDayKey(day)
                  const selected = date ? formatDayKey(date) === key : false
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setDate(day)
                        setTime(undefined)
                      }}
                      className={`rounded-sm border px-3 py-3 text-left text-sm ${
                        selected
                          ? 'border-brand-primary bg-brand-primary/5'
                          : 'border-brand-ink/10 hover:border-brand-primary/40'
                      }`}
                      aria-pressed={selected}
                    >
                      {formatDay(day, lang)}
                    </button>
                  )
                })}
              </div>
              {date ? (
                <div className="mt-8">
                  <h3 className="text-xs uppercase tracking-[0.16em] text-brand-ink/50">
                    {t.book.availableTimes}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {siteMeta.book.timeSlots.map((slot, i) => {
                      const blocked = unavailable.has(i)
                      const selected = time === slot
                      return (
                        <button
                          key={slot}
                          type="button"
                          disabled={blocked}
                          onClick={() => setTime(slot)}
                          className={`rounded-full px-4 py-2 text-sm ${
                            blocked
                              ? 'cursor-not-allowed bg-brand-ink/5 text-brand-ink/30 line-through'
                              : selected
                                ? 'bg-brand-primary text-brand-cream'
                                : 'bg-brand-secondary/60 text-brand-ink hover:bg-brand-secondary'
                          }`}
                          aria-pressed={selected}
                        >
                          {slot}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {step === 2 ? (
            <form onSubmit={onDetailsSubmit} noValidate className="max-w-lg space-y-5">
              <h2 className="font-heading text-2xl text-brand-ink">
                {t.book.yourDetails}
              </h2>
              {(
                [
                  { key: 'name', label: t.book.labels.name, type: 'text', auto: 'name' },
                  { key: 'phone', label: t.book.labels.phone, type: 'tel', auto: 'tel' },
                  { key: 'email', label: t.book.labels.email, type: 'email', auto: 'email' },
                ] as const
              ).map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={`book-${field.key}`}
                    className="text-xs uppercase tracking-[0.14em] text-brand-ink/60"
                  >
                    {field.label}
                  </label>
                  <input
                    id={`book-${field.key}`}
                    type={field.type}
                    autoComplete={field.auto}
                    value={details[field.key]}
                    onChange={(e) =>
                      setDetails((d) => ({ ...d, [field.key]: e.target.value }))
                    }
                    className="mt-2 w-full rounded-sm border border-brand-ink/15 bg-brand-paper px-4 py-3 text-sm"
                    aria-invalid={Boolean(detailErrors[field.key])}
                  />
                  {detailErrors[field.key] ? (
                    <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                      {detailErrors[field.key]}
                    </p>
                  ) : null}
                </div>
              ))}
              <div>
                <label
                  htmlFor="book-notes"
                  className="text-xs uppercase tracking-[0.14em] text-brand-ink/60"
                >
                  {t.book.notesOptional}
                </label>
                <textarea
                  id="book-notes"
                  rows={4}
                  value={details.notes}
                  onChange={(e) =>
                    setDetails((d) => ({ ...d, notes: e.target.value }))
                  }
                  className="mt-2 w-full rounded-sm border border-brand-ink/15 bg-brand-paper px-4 py-3 text-sm"
                />
              </div>
            </form>
          ) : null}

          {step === 3 ? (
            <div className="max-w-lg rounded-sm border border-brand-ink/10 bg-brand-paper p-6 shadow-soft">
              <h2 className="font-heading text-2xl text-brand-ink">{t.book.review}</h2>
              <ul className="mt-6 space-y-3 text-sm text-brand-ink/75">
                <li>
                  <strong className="text-brand-ink">{t.book.labels.treatment}:</strong>{' '}
                  {liveTreatment?.name}
                </li>
                <li>
                  <strong className="text-brand-ink">{t.book.labels.when}:</strong>{' '}
                  {date && time ? `${formatDay(date, lang)} · ${time}` : '—'}
                </li>
                <li>
                  <strong className="text-brand-ink">{t.book.labels.name}:</strong>{' '}
                  {details.name}
                </li>
                <li>
                  <strong className="text-brand-ink">{t.book.labels.phone}:</strong>{' '}
                  {details.phone}
                </li>
                <li>
                  <strong className="text-brand-ink">{t.book.labels.email}:</strong>{' '}
                  {details.email}
                </li>
                {details.notes ? (
                  <li>
                    <strong className="text-brand-ink">{t.book.labels.notes}:</strong>{' '}
                    {details.notes}
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-3">
            {step > 0 ? (
              <Button type="button" variant="outline" onClick={goBack}>
                {t.book.back}
              </Button>
            ) : null}
            <Button
              type="button"
              onClick={goNext}
              disabled={
                (step === 0 && !treatment) ||
                (step === 1 && (!date || !time))
              }
            >
              {step === 3 ? t.book.confirm : t.book.continue}
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">{summary}</div>
      </div>

      <div className="mt-10 lg:hidden">{summary}</div>
    </div>
  )
}
