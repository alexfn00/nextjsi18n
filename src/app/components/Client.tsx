'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

const Client = () => {
  const userName = 'David'
  const { t } = useTranslation()

  return <div>{t('subheader', { userName })}</div>
}

export default Client
