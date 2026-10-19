type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const ink = light ? 'text-brand-paper' : 'text-brand-ink'
  const muted = light ? 'text-brand-paper/80' : 'text-brand-ink/65'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 font-body text-xs uppercase tracking-[0.22em] ${muted}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-3xl font-medium leading-tight sm:text-4xl md:text-5xl ${ink}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 max-w-xl text-base leading-relaxed ${muted} ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
