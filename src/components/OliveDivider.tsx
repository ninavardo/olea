type Props = {
  className?: string
  light?: boolean
}

export function OliveDivider({ className = '', light = false }: Props) {
  const stroke = light ? 'stroke-brand-paper/70' : 'stroke-brand-primary/50'

  return (
    <div
      className={`flex items-center justify-center py-2 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 24"
        className={`h-6 w-40 ${stroke}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12c18-10 36-10 54 0s36 10 54 0 28-8 36-8"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <ellipse
          cx="48"
          cy="9"
          rx="5"
          ry="2.5"
          transform="rotate(-35 48 9)"
          className={light ? 'fill-brand-paper/40' : 'fill-brand-primary/25'}
        />
        <ellipse
          cx="88"
          cy="14"
          rx="5"
          ry="2.5"
          transform="rotate(25 88 14)"
          className={light ? 'fill-brand-paper/40' : 'fill-brand-primary/25'}
        />
        <ellipse
          cx="118"
          cy="8"
          rx="4.5"
          ry="2.2"
          transform="rotate(-20 118 8)"
          className={light ? 'fill-brand-paper/40' : 'fill-brand-accent/35'}
        />
      </svg>
    </div>
  )
}
