'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import {Globe} from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <div className="relative group">
      <button className="inline-flex items-center cursor-pointer">
        <Globe className="h-4 w-4 text-gray-600 mr-2" />
        <span className="text-sm text-gray-600">
          {locale === 'de' ? 'Deutsch' : 'English'}
        </span>
      </button>
      <div className="absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1" role="menu" aria-orientation="vertical">
          <button
            onClick={() => switchLocale('de')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              locale === 'de'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            role="menuitem"
          >
            Deutsch
          </button>
          <button
            onClick={() => switchLocale('en')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              locale === 'en'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            role="menuitem"
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}