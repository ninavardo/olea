import { Button } from '../components/Button'
import { OliveDivider } from '../components/OliveDivider'
import { siteMeta } from '../data/site'
import { usePreferences } from '../context/PreferencesContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFound() {
  const { t } = usePreferences()
  useDocumentTitle(t.pages.notFound.title)

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-28 text-center md:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-brand-ink/50">
        {t.notFound.code}
      </p>
      <h1 className="mt-3 font-heading text-4xl text-brand-ink md:text-5xl">
        {t.notFound.title}
      </h1>
      <OliveDivider className="py-6" />
      <p className="text-base text-brand-ink/65">{t.notFound.body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">{t.notFound.home}</Button>
        <Button to={siteMeta.bookPath} variant="outline">
          {t.bookCta}
        </Button>
      </div>
    </div>
  )
}
