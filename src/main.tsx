import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ThemeProvider } from '@/components/themes/ThemeProvider.tsx';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="m1-web-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
