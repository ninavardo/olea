import { Link } from 'react-router-dom'
import type { SiteImage } from '../data/images'

type Props = {
  to: string
  name: string
  description: string
  fromPrice: string
  image: SiteImage
  priority?: boolean
}

export function RitualCard({
  to,
  name,
  description,
  fromPrice,
  image,
  priority = false,
}: Props) {
  return (
    <article className="group">
      <Link to={to} className="block focus-visible:outline-offset-4">
        <div className="overflow-hidden rounded-sm bg-brand-secondary/40">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
        <div className="mt-5 space-y-2">
          <h3 className="font-heading text-2xl text-brand-ink">{name}</h3>
          <p className="text-sm leading-relaxed text-brand-ink/65">{description}</p>
          <p className="pt-1 text-xs uppercase tracking-[0.16em] text-brand-accent">
            {fromPrice}
          </p>
        </div>
      </Link>
    </article>
  )
}
