import { Modal } from '@/shared/ui/Modal/Modal';
import { memo, Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader/Loader';
import { LoginFormAsync } from '@/features/auth-by-username/ui/LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onSubmit?: () => void;
}

export const LoginModal = memo(function LoginModal({ isOpen, onSubmit }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onSubmit}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
});
