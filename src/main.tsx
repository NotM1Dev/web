import './index.css';
import '@fontsource/inter/400.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { SpeedInsights } from '@vercel/speed-insights/react';
import { ThemeProvider } from '@/components/themes/ThemeProvider.tsx';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="m1-web-theme">
      <Toaster />
      <SpeedInsights />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
