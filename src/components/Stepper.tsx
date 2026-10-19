type Props = {
  steps: readonly string[]
  current: number
}

export function Stepper({ steps, current }: Props) {
  return (
    <ol className="flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Booking progress">
      {steps.map((label, index) => {
        const done = index < current
        const active = index === current
        return (
          <li key={label} className="flex items-center gap-2 sm:gap-3">
            <span
              className={`inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs ${
                active
                  ? 'bg-brand-primary text-brand-cream'
                  : done
                    ? 'bg-brand-accent text-brand-paper'
                    : 'bg-brand-secondary text-brand-ink/60'
              }`}
              aria-current={active ? 'step' : undefined}
            >
              {index + 1}
            </span>
            <span
              className={`hidden text-xs uppercase tracking-[0.14em] sm:inline ${
                active ? 'text-brand-ink' : 'text-brand-ink/45'
              }`}
            >
              {label}
            </span>
            {index < steps.length - 1 ? (
              <span className="hidden h-px w-6 bg-brand-ink/15 sm:block" aria-hidden="true" />
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}
