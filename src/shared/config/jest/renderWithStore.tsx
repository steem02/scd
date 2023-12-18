import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

export const renderWithStore = (component: ReactNode, initialStore?: DeepPartial<StateSchema>) => {
  return render(
    <MemoryRouter>
      <StoreProvider initialState={initialStore as StateSchema}>{component}</StoreProvider>
    </MemoryRouter>
  );
};
