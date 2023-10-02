import { Button } from '@/shared/ui/Button';
import { useEffect, useState } from 'react';

export function BugButton() {
  const [hasError, setHasError] = useState(false);

  const errorTrigger = () => {
    setHasError(true);
  };

  useEffect(() => {
    if (hasError) {
      throw new Error('Непонятная ошибка');
    }
  }, [hasError]);

  return (
    <Button onClick={errorTrigger} variant={'primary'}>
      Bug
    </Button>
  );
}
