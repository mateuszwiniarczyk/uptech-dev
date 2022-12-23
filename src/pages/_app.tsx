import { Public_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';

import { MainLayout } from '@/components/Layout/MainLayout';

const publicSans = Public_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-public-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <MainLayout className={`${publicSans.variable} font-sans`}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
