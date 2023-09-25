import { Loader } from '@/shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

interface PageLoaderProps {}

export function PageLoader(props: PageLoaderProps) {
  return (
    <div className={s.container}>
      <Loader />
    </div>
  );
}
