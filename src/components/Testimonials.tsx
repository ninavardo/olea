import { useState } from 'react'
import { usePreferences } from '../context/PreferencesContext'
import { OliveDivider } from './OliveDivider'

export function Testimonials() {
  const { t } = usePreferences()
  const items = t.testimonials
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="md:hidden">
        <blockquote className="rounded-sm bg-brand-secondary/25 px-6 py-10 text-center">
          <OliveDivider />
          <p className="mt-6 font-heading text-2xl leading-snug text-brand-ink">
            “{items[active].quote}”
          </p>
          <footer className="mt-6 text-xs uppercase tracking-[0.18em] text-brand-ink/55">
            {items[active].name}
          </footer>
        </blockquote>
        <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === active ? 'bg-brand-primary' : 'bg-brand-ink/20'
              }`}
            />
          ))}
        </div>
      </div>

      <ul className="hidden gap-6 md:grid md:grid-cols-3">
        {items.map((item) => (
          <li key={item.id} className="rounded-sm bg-brand-secondary/25 px-6 py-10">
            <OliveDivider className="justify-start" />
            <blockquote>
              <p className="mt-6 font-heading text-xl leading-snug text-brand-ink">
                “{item.quote}”
              </p>
              <footer className="mt-6 text-xs uppercase tracking-[0.18em] text-brand-ink/55">
                {item.name}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
