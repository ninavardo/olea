import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'

export function InstagramStrip() {
  const { t } = usePreferences()

  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
        {siteMeta.instagramImages.map((image, index) => (
          <li key={`${image.src}-${index}`}>
            <a
              href={siteMeta.social.instagram.href}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-sm focus-visible:outline-offset-4"
              aria-label={`${t.social.instagram} — ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100"
              />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center">
        <a
          href={siteMeta.social.instagram.href}
          target="_blank"
          rel="noreferrer"
          className="font-heading text-xl text-brand-ink transition-colors hover:text-brand-primary"
        >
          {siteMeta.social.instagram.handle}
        </a>
      </p>
    </div>
  )
}
