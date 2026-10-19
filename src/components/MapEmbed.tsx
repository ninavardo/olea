import { useState } from 'react'
import { getMapsDirectionsUrl, getMapsEmbedUrl, siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'

type Props = {
  className?: string
}

export function MapEmbed({ className = '' }: Props) {
  const { t } = usePreferences()
  const [loaded, setLoaded] = useState(false)
  const query = siteMeta.contact.addressQuery
  const embedSrc = getMapsEmbedUrl(query)
  const directionsHref = getMapsDirectionsUrl(query)

  return (
    <div className={className}>
      <div className="group relative overflow-hidden rounded-sm border border-brand-ink/10 bg-brand-secondary/30">
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 px-6 text-center"
          >
            <span className="font-heading text-2xl text-brand-ink">{t.map.title}</span>
            <span className="text-sm text-brand-ink/60">{t.map.loadHint}</span>
          </button>
        ) : (
          <iframe
            title={`Map showing ${siteMeta.fullName} at ${query}`}
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[16/10] w-full grayscale transition-[filter] duration-500 group-hover:grayscale-0 dark:opacity-90"
            allowFullScreen
          />
        )}
      </div>
      <p className="mt-4">
        <a
          href={directionsHref}
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.16em] text-brand-primary underline-offset-4 hover:underline"
        >
          {t.map.directions}
        </a>
      </p>
    </div>
  )
}
