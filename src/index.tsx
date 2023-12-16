import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root') as HTMLElement;

// Create a root.
const root = createRoot(container);

// Initial render
root.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
