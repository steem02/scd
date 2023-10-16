import {
  type AnimationEvent,
  type PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import s from './Modal.module.scss';
import { cn } from '@/shared/libs/classNames/classNames';
import { Portal } from '@/shared/ui/Portal/Portal';

interface ModalProps {
  isOpen: boolean;

  onClose?(): void;
}

export function Modal({ isOpen, children, onClose }: PropsWithChildren<ModalProps>) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
  };
  const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === s.overlayClose) {
      onClose?.();
    }
  };
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const toggleClasses = useMemo(
    () => ({
      [s.open]: open,
      [s.close]: !open,
    }),
    [open]
  );

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div>
        <div
          className={cn(s.overlay, toggleClasses)}
          onClick={handleClose}
          onAnimationEnd={onAnimationEnd}
        >
          <div className={cn(s.content, toggleClasses)} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
