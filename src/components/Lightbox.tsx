import { useEffect, useRef } from 'react'
import type { SiteImage } from '../data/images'

type Props = {
  images: SiteImage[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = index !== null
  const image = open ? images[index] : null

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, onPrev, onNext])

  if (!open || !image) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-ink/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-sm object-contain"
        />
        <p className="mt-4 max-w-xl text-center text-sm text-brand-paper/80">
          {image.alt}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-paper/50">
          {index + 1} / {images.length}
        </p>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-0 top-0 rounded-full bg-brand-paper/10 px-3 py-2 text-xs uppercase tracking-[0.14em] text-brand-paper hover:bg-brand-paper/20"
        >
          Close
        </button>

        <button
          type="button"
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-brand-paper/10 px-3 py-3 text-brand-paper hover:bg-brand-paper/20"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          type="button"
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-brand-paper/10 px-3 py-3 text-brand-paper hover:bg-brand-paper/20"
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </div>
  )
}
