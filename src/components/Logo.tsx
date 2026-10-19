import { Link } from 'react-router-dom'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { OliveMark } from './OliveMark'

type Props = {
  className?: string
  to?: string
  markOnly?: boolean
  variant?: 'stacked' | 'lockup' | 'mark'
}

export function Logo({
  className = '',
  to = '/',
  markOnly = false,
  variant = 'lockup',
}: Props) {
  const { theme } = usePreferences()
  const mode = variant === 'mark' || markOnly ? 'mark' : variant
  // Brand multi-color mark on dark surfaces; mono primary on light
  const markVariant = theme === 'dark' ? 'brand' : 'mono'

  const wordmark = (
    <span className="font-heading text-xl font-bold tracking-[0.12em] sm:text-2xl">
      {siteMeta.name.toUpperCase()}
    </span>
  )

  const content =
    mode === 'mark' ? (
      <OliveMark
        className="h-10 w-auto"
        title={siteMeta.fullName}
        variant={markVariant}
      />
    ) : mode === 'stacked' ? (
      <span className="inline-flex flex-col items-center gap-1">
        <OliveMark className="h-14 w-auto" variant={markVariant} />
        {wordmark}
      </span>
    ) : (
      <span className="inline-flex items-center gap-2.5">
        <OliveMark className="h-9 w-auto sm:h-10" variant={markVariant} />
        {wordmark}
      </span>
    )

  if (markOnly) {
    return <div className={`text-brand-primary ${className}`}>{content}</div>
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center text-brand-primary focus-visible:outline-offset-4 ${className}`}
      aria-label={`${siteMeta.fullName} home`}
    >
      {content}
    </Link>
  )
}
