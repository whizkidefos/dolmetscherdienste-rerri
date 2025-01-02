'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
          centered
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
          >
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                alt="Professional translator at work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="prose prose-lg bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('mission.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('mission.description')}</p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">{t('expertise.title')}</h3>
            <ul className="space-y-4">
              {['legal', 'technical', 'business', 'cultural'].map((key) => (
                <li key={key} className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3" />
                  <span className="ml-3">{t(`expertise.items.${key}`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}