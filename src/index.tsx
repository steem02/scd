import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import React from 'react';

const container = document.getElementById('root') as HTMLElement;

// Create a root.
const root = createRoot(container);

// Initial render
root.render(<App />);
