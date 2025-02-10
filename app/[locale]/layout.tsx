// 'use client';

import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {ThemeProvider} from '@/context/ThemeContext';
import {Inter} from 'next/font/google';
import '../globals.css';

const inter = Inter({subsets: ['latin']});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const metadata = {
  title: {
    template: '%s | Dolmetscherdienste Rerri',
    default: 'Dolmetscherdienste Rerri - Professional Interpretation Services',
  },
  description: 'Professional interpretation services including simultaneous, consecutive, whispered interpretation, relay interpretation, OPI, and VRI. Available in German, English, and Croatian.',
  keywords: ['interpretation', 'translation', 'simultaneous interpretation', 'consecutive interpretation', 'whispered interpretation', 'relay interpretation', 'OPI', 'VRI', 'German', 'English', 'Croatian'],
  authors: [{ name: 'Dolmetscherdienste Rerri' }],
  creator: 'Dolmetscherdienste Rerri',
  publisher: 'Dolmetscherdienste Rerri',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
    },
  },
};

export default async function LocaleLayout({
  children,
  params: {locale},
}: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow pt-20">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}