'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Phone, Mail, MapPin, Clock} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactPage() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'),
      content: '+49 176 24022765',
      href: 'tel:+4917624022765',
    },
    {
      icon: Mail,
      title: t('email'),
      content: 'info@dolmetscherdienste-rerri.de',
      href: 'mailto:info@dolmetscherdienste-rerri.de',
    },
    {
      icon: MapPin,
      title: t('address'),
      content: 'Dolmetscherdienste Rerri, Berlin',
    },
    {
      icon: Clock,
      title: t('hours'),
      content: 'Mon - Fri: 9:00 - 18:00',
    },
  ];

  return (
    <div className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
          centered
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg transform rotate-12 opacity-10" />
                <div className="relative">
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.content}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white py-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white py-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  {t('form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
