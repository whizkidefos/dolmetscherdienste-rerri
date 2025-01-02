import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {Inter} from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {ThemeProvider} from '@/context/ThemeContext';
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
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}