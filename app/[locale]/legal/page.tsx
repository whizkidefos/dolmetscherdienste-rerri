'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

export default function LegalPage() {
  const t = useTranslations('legal');

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} centered />

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="mt-12 space-y-12"
        >
          {/* Responsible Party */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('responsible.title')}
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p className="font-medium">{t('responsible.name')}</p>
              <p>{t('responsible.role')}</p>
              <p>{t('responsible.address')}</p>
              <p>{t('responsible.city')}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('contact.title')}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <div>
                <p className="font-medium">{t('contact.phone')}:</p>
                <a
                  href="tel:+4917370403311"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('contact.phoneNumber')}
                </a>
              </div>
              <div>
                <p className="font-medium">{t('contact.fax')}:</p>
                <p>{t('contact.faxNumber')}</p>
              </div>
              <div>
                <p className="font-medium">{t('contact.email')}:</p>
                <a
                  href="mailto:info@dolmetscherdienst-rerri.de"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t('contact.emailAddress')}
                </a>
              </div>
            </div>
          </div>

          {/* Editorial Responsibility */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('editorial.title')}
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p className="font-medium">{t('editorial.name')}</p>
              <p>{t('editorial.address')}</p>
              <p>{t('editorial.city')}</p>
            </div>
          </div>

          {/* EU Dispute Resolution */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('euDispute.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
              {t('euDispute.text')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
