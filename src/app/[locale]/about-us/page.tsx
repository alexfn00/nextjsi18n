import TranslationsProvider from '@/app/components/TranslationsProvider'
import initTranslations from '@/app/i18n'
import Link from 'next/link'
import React from 'react'

const i18nNamespaces = ['about-us', 'common']

const page = async ({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <div className='flex flex-col items-center justify-center gap-20'>
        <h1>{t('common:about_us')}</h1>
        <p>
          <b>{t('our_address')}</b>
        </p>
        <p>
          123 Example Street
          <br />
          Los Angeles, CA
        </p>
        <Link href='/'>{t('back')}</Link>
      </div>
    </TranslationsProvider>
  )
}

export default page
