import { useTranslate } from '@/shared/hooks/useTranslate';
import { Page } from '@/widgets/Page';
import { BugButton } from '@/widgets/BugButton';
import { Counter } from '@/entities/Counter';

interface MainPageProps {}

export default function MainPage(props: MainPageProps) {
  const t = useTranslate('main');
  return (
    <Page>
      {t('title')}
      <BugButton />
      <Counter />
    </Page>
  );
}
