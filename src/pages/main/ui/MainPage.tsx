import { useTranslate } from '@/shared/hooks/useTranslate';
import { Page } from '@/widgets/Page';
import { BugButton } from '@/widgets/BugButton';

interface MainPageProps {}

export default function MainPage(props: MainPageProps) {
  const t = useTranslate('main');
  return (
    <Page>
      {t('title')}
      <BugButton />
    </Page>
  );
}
