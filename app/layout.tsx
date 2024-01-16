import type { Metadata } from 'next';
import './globals.css';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/themes/ThemeProvider';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'M1',
  description: 'Made by M1 with Next.js, shadcn/ui, and Tailwind CSS.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('bg-white dark:bg-black', font.className)}>
        <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
