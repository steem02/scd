import { Modal } from '@/shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader/Loader';
import { LoginFormAsync } from '@/features/auth-by-username/ui/LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onSubmit?: () => void;
}

export function LoginModal({ isOpen, onSubmit }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onSubmit}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
}
