type Props = {
  className?: string
  title?: string
  /** mono = theme currentColor; brand = cream fruit + dark leaves from the palette */
  variant?: 'mono' | 'brand'
}

/**
 * High-quality vector olive mark matching the Olea identity sheet.
 * Prefer this over raster crops so the logo stays sharp at any size.
 */
export function OliveMark({
  className = 'h-10 w-auto',
  title,
  variant = 'mono',
}: Props) {
  const fruit = variant === 'brand' ? '#E5E9AC' : 'currentColor'
  const leaf = variant === 'brand' ? '#48521D' : 'currentColor'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 96"
      fill="none"
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {/* Two leaves — top left */}
      <path
        fill={leaf}
        d="M22 34c-7.4-11.2-17.8-17.6-26.2-19.2C-2.8 24.2 1.6 36.8 11.2 46c6.2 6 13.6 9.2 19.8 9.2-1.8-6.8-3-14.4-9-21.2Z"
      />
      <path
        fill={leaf}
        d="M30.5 30c-2.4-11.6-9.2-20.8-17-24.6 5.2 1.4 13.8 6.4 19.4 16.2 3.4 6 4.6 12.4 4.8 17.4-2.6-2.6-5-5.6-7.2-9Z"
      />
      {/* Olive fruit */}
      <ellipse
        cx="44"
        cy="60"
        rx="22"
        ry="28"
        transform="rotate(12 44 60)"
        fill={fruit}
      />
      {/* Soft pit / highlight */}
      <ellipse
        cx="36"
        cy="50"
        rx="5"
        ry="6.5"
        transform="rotate(12 36 50)"
        fill={variant === 'brand' ? '#48521D' : '#FAF8F4'}
        fillOpacity={variant === 'brand' ? 0.2 : 0.35}
      />
    </svg>
  )
}
