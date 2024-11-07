import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import TanstackProvider from '@/components/tanstack-provider';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const mtnBrighterSans = localFont({
  variable: '--mtn-brighter-sans',
  src: [
    {
      path: '../assets/fonts/MTNBrighterSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MTNBrighterSans-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

const MomoManrope = localFont({
  variable: '--momo-manrope',
  src: [
    {
      path: '../assets/fonts/Manrope-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Manrope-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Manrope-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Manrope-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Manrope-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Manrope-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Manrope-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'MOMO-Corporate',
  description: 'MTN MOMO-Corporate',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/mtn-momo-logo-single.svg',
        href: '/mtn-momo-logo-single.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/mtn-momo-logo-single.svg',
        href: '/mtn-yellow-logo.svg',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        mtnBrighterSans.variable,
        inter.variable,
        MomoManrope.variable,
      )}
      suppressHydrationWarning={true}>
      <body className='antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme=''
          enableSystem
          disableTransitionOnChange>
          <TanstackProvider>{children}</TanstackProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
