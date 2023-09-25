import { useTranslate } from '@/shared/hooks/useTranslate'
import { Page } from '@/shared/ui/Page/Page'

interface AboutPageProps {

}

export default function AboutPage(props: AboutPageProps) {
  const t = useTranslate()
  return <Page>{ t('title', { ns: 'about' }) }fjj
    <button>jhdfh</button>
  </Page>
}
