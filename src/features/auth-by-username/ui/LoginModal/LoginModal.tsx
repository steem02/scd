import { LoginForm } from '../LoginForm/LoginForm';
import { Modal } from '@/shared/ui/Modal/Modal';

interface LoginModalProps {
  isOpen: boolean;
  onSubmit?: () => void;
}

export function LoginModal({ isOpen, onSubmit }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onSubmit}>
      <LoginForm />
    </Modal>
  );
}
