import { useTranslate } from '@/shared/hooks/useTranslate';
import { Page } from '@/widgets/Page';

interface MainPageProps {}

export default function MainPage(props: MainPageProps) {
  const t = useTranslate('main');
  return <Page>{t('title')}</Page>;
}
