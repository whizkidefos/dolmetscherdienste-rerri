'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactForm from '@/components/ui/ContactForm';
import {Phone, Mail, MapPin, Clock, Printer} from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const legalT = useTranslations('legal');

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} centered />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {t('phone')}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    <a
                      href="tel:+4917624022765"
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      +49 173 70 40 331
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {t('email')}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    <a
                      href="mailto:info@dolmetscherdienste-rerri.de"
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      info@dolmetscherdienste-rerri.de
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                    <Printer className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {legalT('contact.fax')}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    {legalT('contact.faxNumber')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {t('address')}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Heyerhoffstraße 38,
                    <br />
                    45770 Marl, Germany
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {t('hours')}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    {t('openingHours')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
