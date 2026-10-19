import { useCallback, useState } from 'react'
import { GalleryGrid } from '../components/GalleryGrid'
import { Lightbox } from '../components/Lightbox'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Gallery() {
  const { t } = usePreferences()
  useDocumentTitle(t.pages.gallery.title)
  const images = siteMeta.galleryImages
  const [index, setIndex] = useState<number | null>(null)

  const onPrev = useCallback(() => {
    setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
  }, [images.length])

  const onNext = useCallback(() => {
    setIndex((i) => (i === null ? i : (i + 1) % images.length))
  }, [images.length])

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow={t.galleryPage.eyebrow}
          title={t.galleryPage.title}
          subtitle={t.galleryPage.intro}
          className="mb-12"
        />
      </Reveal>
      <Reveal>
        <GalleryGrid images={[...images]} onSelect={setIndex} columns="masonry" />
      </Reveal>
      <Lightbox
        images={[...images]}
        index={index}
        onClose={() => setIndex(null)}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  )
}
