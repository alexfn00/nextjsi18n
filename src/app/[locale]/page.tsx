import Link from 'next/link'
import Client from '../components/Client'
import initTranslations from '../i18n'
import TranslationsProvider from '../components/TranslationsProvider'
import LanguageChanger from '../components/LanguageChanger'

const i18nNamespaces = ['home', 'common']

export default async function Home({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <div className='flex flex-col items-center justify-center gap-20 mt-20'>
          <h1>{t('header')}</h1>
          <Client />
          <Link href='/about-us'>{t('common:about_us')}</Link>
          <LanguageChanger />
        </div>
      </main>
    </TranslationsProvider>
  )
}
