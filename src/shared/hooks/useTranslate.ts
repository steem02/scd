import { useTranslation } from 'react-i18next'
import { type FlatNamespace } from 'i18next'
import { type $Tuple } from 'react-i18next/helpers'

export function useTranslate(ns?: FlatNamespace | $Tuple<FlatNamespace> | undefined) {
  const { t } = useTranslation(ns)
  return t
}
