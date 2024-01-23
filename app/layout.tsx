import type { Metadata } from 'next';
import './globals.css';

import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/themes/ThemeProvider';
import { Toaster } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'M1',
    description: 'Made by M1 with Next.js, shadcn/ui, and Tailwind CSS.'
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={cn('bg-white dark:bg-black', GeistSans.className)}>
                <ThemeProvider
                    defaultTheme="system"
                    attribute="class"
                    enableSystem
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
