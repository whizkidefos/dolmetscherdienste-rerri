'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Phone, Mail} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('navigation');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const navigation = {
    main: [
      {name: nav('home'), href: `/${locale}`},
      {name: nav('services'), href: `/${locale}/services`},
      {name: nav('languages'), href: `/${locale}/languages`},
      {name: nav('about'), href: `/${locale}/about`},
      {name: nav('contact'), href: `/${locale}/contact`},
    ],
    legal: [
      {name: t('links.legal'), href: `/${locale}/legal`},
    ],
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="tel:+491737040331"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">Phone</span>
            <Phone className="h-6 w-6" />
          </a>
          <a
            href="mailto:info@dolmetscherdienste-rerri.de"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <nav className="mt-8 flex flex-wrap justify-center -mx-5 -my-2">
          {navigation.legal.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {t('copyright')}
        </p>
      </div>
    </footer>
  );
}