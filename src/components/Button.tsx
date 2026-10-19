import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    to?: undefined
  }

type ButtonAsLink = CommonProps & {
  to: string
  state?: unknown
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-primary text-brand-cream hover:bg-brand-ink hover:text-brand-paper focus-visible:outline-brand-accent',
  secondary:
    'bg-brand-accent text-brand-paper hover:bg-brand-primary hover:text-brand-cream focus-visible:outline-brand-primary',
  ghost:
    'bg-transparent text-brand-ink hover:text-brand-accent underline-offset-4 hover:underline',
  outline:
    'border border-brand-ink/25 bg-transparent text-brand-ink hover:border-brand-accent hover:text-brand-accent',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-[0.14em]',
  md: 'px-6 py-3 text-xs tracking-[0.16em]',
  lg: 'px-8 py-3.5 text-sm tracking-[0.18em]',
}

const base =
  'inline-flex items-center justify-center rounded-full font-body font-medium uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50'

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
  } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} state={props.state} className={classes}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton

  return (
    <button
      type={buttonProps.type ?? 'button'}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-pressed={buttonProps['aria-pressed']}
      form={buttonProps.form}
    >
      {children}
    </button>
  )
}
