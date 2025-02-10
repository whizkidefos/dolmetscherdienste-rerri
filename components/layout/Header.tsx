'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {Phone, Mail, Menu, X} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

function NavLink({href, children}: {href: string; children: React.ReactNode}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const menuItems = [
    {href: `/${locale}`, label: t('home')},
    {href: `/${locale}/services`, label: t('services')},
    {href: `/${locale}/about`, label: t('about')},
    {href: `/${locale}/contact`, label: t('contact')},
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-10 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="tel:+4917624022765" className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              <Phone className="h-4 w-4 mr-2" />
              <span>+49 173 70 40 331</span>
            </a>
            <a href="mailto:info@dolmetscherdienste-rerri.de" className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@dolmetscherdienste-rerri.de</span>
            </a>
          </div>
        </div>

        <nav className="flex items-center justify-between py-4">
          <Link href={`/${locale}`} className="text-xl font-bold text-gray-900 dark:text-white">
            Dolmetscherdienste Rerri
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
              exit={{opacity: 0, height: 0}}
              transition={{duration: 0.2}}
              className="md:hidden border-t border-gray-200 dark:border-gray-700"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <div key={item.href} className="px-2">
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </div>
                ))}
                <div className="px-2 pt-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
                  <a href="tel:+4917624022765" className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+49 176 24022765</span>
                  </a>
                  <a href="mailto:info@dolmetscherdienste-rerri.de" className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>info@dolmetscherdienste-rerri.de</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}