import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '../components/Button'
import { OliveDivider } from '../components/OliveDivider'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Treatments() {
  const { t } = usePreferences()
  useDocumentTitle(t.pages.treatments.title)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={t.treatmentsPage.eyebrow}
          title={t.treatmentsPage.title}
          subtitle={t.treatmentsPage.subtitle}
        />
      </Reveal>

      <div className="mt-16 space-y-20">
        {Object.entries(t.treatments).map(([ritualId, group]) => (
          <section key={ritualId} id={ritualId} className="scroll-mt-28">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-heading text-3xl text-brand-ink md:text-4xl">
                  {group.ritualName}
                </h2>
                <OliveDivider className="hidden sm:flex" />
              </div>
            </Reveal>

            <ul className="mt-8 divide-y divide-brand-ink/10 border-y border-brand-ink/10">
              {Object.entries(group.items).map(([id, item]) => (
                <li
                  key={id}
                  className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between"
                >
                  <div className="max-w-xl">
                    <h3 className="font-heading text-2xl text-brand-ink">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">
                      {item.description}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-brand-ink/50">
                      {item.duration} · {item.price}
                    </p>
                  </div>
                  <Button
                    to={`/book?treatment=${id}`}
                    size="sm"
                    className="shrink-0 self-start md:self-center"
                  >
                    {t.treatmentsPage.bookThis}
                  </Button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Reveal>
        <div className="mt-20 rounded-sm bg-brand-primary px-8 py-12 text-center">
          <p className="font-heading text-3xl text-brand-cream">
            {t.treatmentsPage.readyTitle}
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              to={siteMeta.bookPath}
              className="!bg-brand-cream !text-brand-primary hover:!bg-brand-secondary hover:!text-brand-ink"
            >
              {t.bookCta}
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
