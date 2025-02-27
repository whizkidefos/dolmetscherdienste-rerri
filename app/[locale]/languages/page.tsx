'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import {Globe2} from 'lucide-react';

export default function LanguagesPage() {
  const t = useTranslations('languages');

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0},
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} centered />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Languages */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Globe2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t('mainLanguages.title')}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('mainLanguages.description')}
              </p>
              <ul className="space-y-2">
                {t.raw('mainLanguages.list').map((language: string) => (
                  <li
                    key={language}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-2">•</span>
                    {language}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Additional Languages */}
            <motion.div
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('additionalLanguages.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('additionalLanguages.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {t.raw('additionalLanguages.list').map((language: string) => (
                  <div
                    key={language}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-2">•</span>
                    {language}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Custom Languages */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:mt-24"
          >
            <motion.div
              variants={item}
              className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('customLanguages.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('customLanguages.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
