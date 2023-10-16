import { type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: Element;
}

export function Portal({ element, children }: PropsWithChildren<PortalProps>) {
  return createPortal(children, element ?? document.body);
}
