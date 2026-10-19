import { Button } from '../components/Button'
import { OliveDivider } from '../components/OliveDivider'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function About() {
  const { t } = usePreferences()
  useDocumentTitle(t.pages.about.title)
  const about = t.about
  const image = siteMeta.aboutImage

  return (
    <div>
      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Olea"
            title={about.title}
            subtitle={about.philosophy}
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="font-heading text-3xl text-brand-ink md:text-4xl">
              {about.storyHeading}
            </h2>
            <OliveDivider className="justify-start py-5" />
            <div className="space-y-4 text-base leading-relaxed text-brand-ink/70">
              {about.story.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-secondary/20 py-20 md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="—"
              title={about.philosophyHeading}
              align="center"
              className="mb-12"
            />
          </Reveal>
          <ul className="grid gap-8 md:grid-cols-3">
            {about.values.map((value, i) => (
              <Reveal key={value.title} delayMs={i * 80}>
                <li className="text-center">
                  <OliveDivider />
                  <h3 className="mt-4 font-heading text-2xl text-brand-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/65">
                    {value.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <div className="mt-16 text-center">
              <Button to={siteMeta.bookPath}>{t.bookCta}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
