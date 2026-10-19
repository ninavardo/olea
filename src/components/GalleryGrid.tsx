import type { SiteImage } from '../data/images'

type Props = {
  images: SiteImage[]
  onSelect?: (index: number) => void
  columns?: 'home' | 'masonry'
}

export function GalleryGrid({ images, onSelect, columns = 'masonry' }: Props) {
  if (columns === 'home') {
    return (
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
        {images.map((image, index) => (
          <li
            key={`${image.src}-${index}`}
            className={index % 5 === 0 ? 'sm:row-span-1' : ''}
          >
            <button
              type="button"
              onClick={() => onSelect?.(index)}
              className="group relative block w-full overflow-hidden rounded-sm focus-visible:outline-offset-4"
              aria-label={`Open image: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100"
              />
            </button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <li key={`${image.src}-${index}`} className="break-inside-avoid">
          <button
            type="button"
            onClick={() => onSelect?.(index)}
            className="group relative block w-full overflow-hidden rounded-sm focus-visible:outline-offset-4"
            aria-label={`Open image: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100 ${
                index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'
              }`}
            />
          </button>
        </li>
      ))}
    </ul>
  )
}
