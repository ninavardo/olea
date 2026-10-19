import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { InstagramStrip } from '../components/InstagramStrip'
import { MapEmbed } from '../components/MapEmbed'
import { OliveDivider } from '../components/OliveDivider'
import { Reveal } from '../components/Reveal'
import { RitualCard } from '../components/RitualCard'
import { SectionHeading } from '../components/SectionHeading'
import { Testimonials } from '../components/Testimonials'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Home() {
  const { t, lang } = usePreferences()
  useDocumentTitle(t.pages.home.title)
  const { hero } = t.home
  const heroImage = siteMeta.heroImage
  const introImage = siteMeta.introImage
  const heroCaps = lang === 'en' ? 'uppercase tracking-[0.04em]' : 'tracking-normal'

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/35"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[88vh] max-w-content flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p
            className={`hero-text-shadow font-heading text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl ${heroCaps}`}
          >
            {hero.line1}
          </p>
          <p className="hero-text-shadow mt-2 font-heading text-2xl italic font-normal text-white/95 sm:text-3xl md:text-4xl">
            {hero.line2}
          </p>
          <p className="hero-text-shadow mt-6 max-w-md text-base leading-relaxed text-white/90">
            {hero.subline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to={siteMeta.bookPath} size="lg">
              {hero.primaryCta}
            </Button>
            <Link
              to="/treatments"
              className="hero-text-shadow text-xs uppercase tracking-[0.18em] text-white underline-offset-4 hover:underline"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={introImage.src}
                alt={introImage.alt}
                width={introImage.width}
                height={introImage.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-ink/55">
              {t.home.intro.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-tight text-brand-ink md:text-5xl">
              {t.home.intro.heading}
            </h2>
            <OliveDivider className="justify-start py-6" />
            <p className="max-w-md text-base leading-relaxed text-brand-ink/70">
              {t.home.intro.body}
            </p>
            <div className="mt-8">
              <Button to="/about" variant="outline">
                {t.home.intro.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-secondary/20 py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.ritualsHeading.eyebrow}
              title={t.home.ritualsHeading.title}
              subtitle={t.home.ritualsHeading.subtitle}
            />
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {siteMeta.rituals.map((ritual, i) => {
              const copy = t.rituals[ritual.id]
              return (
                <Reveal key={ritual.id} delayMs={i * 60}>
                  <RitualCard
                    to={ritual.to}
                    name={copy.name}
                    description={copy.description}
                    fromPrice={copy.fromPrice}
                    image={ritual.image}
                    priority={i < 2}
                  />
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="mx-auto max-w-4xl text-center font-heading text-3xl font-medium leading-snug text-brand-cream sm:text-4xl md:text-5xl lg:text-6xl">
            {t.home.statement}
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              to={siteMeta.bookPath}
              className="!bg-brand-cream !text-brand-primary hover:!bg-brand-secondary hover:!text-brand-ink"
            >
              {t.bookCta}
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow={t.home.galleryHeading.eyebrow}
              title={t.home.galleryHeading.title}
            />
            <Link
              to="/gallery"
              className="text-xs uppercase tracking-[0.18em] text-brand-primary underline-offset-4 hover:underline"
            >
              {t.home.galleryHeading.linkLabel}
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {siteMeta.homeGalleryImages.map((image, index) => (
              <li
                key={`${image.src}-${index}`}
                className={index === 0 || index === 6 ? 'md:col-span-2' : ''}
              >
                <Link
                  to="/gallery"
                  className="group block overflow-hidden rounded-sm focus-visible:outline-offset-4"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-brand-paper py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.testimonialsHeading.eyebrow}
              title={t.home.testimonialsHeading.title}
              align="center"
              className="mb-12"
            />
          </Reveal>
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-brand-ink/5 bg-brand-secondary/15 py-20 md:py-24">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.instagramHeading.eyebrow}
              title={t.home.instagramHeading.title}
              align="center"
              className="mb-10"
            />
          </Reveal>
          <Reveal>
            <InstagramStrip />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.visitHeading.eyebrow}
              title={t.home.visitHeading.title}
            />
            <address className="mt-8 not-italic text-base leading-relaxed text-brand-ink/70">
              <p>{t.contact.addressLine1}</p>
              <p>{t.contact.addressLine2}</p>
              <p className="mt-4">
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
            <ul className="mt-6 max-w-sm space-y-2 text-sm text-brand-ink/70">
              {t.contact.hours.map((row) => (
                <li
                  key={row.days}
                  className="flex justify-between gap-4 border-b border-brand-ink/10 py-2"
                >
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-brand-accent">★ {t.contact.ratingLabel}</p>
            <div className="mt-8">
              <Button to="/contact" variant="outline">
                {t.home.contactCta}
              </Button>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <MapEmbed />
          </Reveal>
        </div>
      </section>
    </>
  )
}
