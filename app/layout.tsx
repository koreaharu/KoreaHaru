import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MessengerWidget } from '@/components/layout/MessengerWidget';
import { MobileStickyContact } from '@/components/layout/MobileStickyContact';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'KoreaHaru — A Curated Journey Through Korea',
    template: '%s · KoreaHaru',
  },
  description:
    'Private chauffeurs, hand-picked stays, and a 24/7 concierge across Busan, Gyeongnam, Ulsan, Daegu, and Pohang.',
  openGraph: {
    type: 'website',
    siteName: 'KoreaHaru',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          <main className="pb-24 md:pb-0">{children}</main>
          <SiteFooter />
          <MessengerWidget />
          <MobileStickyContact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
