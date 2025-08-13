import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { APP_CONFIG } from '@/src/lib/config/constants';

const sans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_CONFIG.url),
  title: {
    default: APP_CONFIG.author,
    template: `%s | ${APP_CONFIG.author}`,
  },
  description: APP_CONFIG.description,
  keywords: [
    'Loc Mai',
    'Portfolio',
    'Software Engineer',
    'Frontend',
    'Backend',
    'Full Stack',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: APP_CONFIG.author }],
  creator: APP_CONFIG.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: APP_CONFIG.author,
    description: APP_CONFIG.description,
    siteName: APP_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_CONFIG.author,
    description: APP_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.className} ${sans.variable} bg-noise text-gray-900 dark:text-gray-100 transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}
