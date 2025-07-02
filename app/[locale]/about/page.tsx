'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutPage() {
  const t = useTranslations('about');

  const missionItems = [
    'legal',
    'technical',
    'medical',
    'immigration',
    'educational',
    'parental',
    'interpreter',
    'community',
    'remote'
  ];

  const expertiseItems = [
    'remote',
    'language',
    'flexible',
    'global',
    'business',
    'legal',
    'health',
    'ngo',
    'social',
    'interpreter',
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} centered />

        {/* Image and Mission Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Professional interpreter at work"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('vision')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('description')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Expertise Cards Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('mission.title')}
              </h3>
              <ul className="space-y-4">
                {missionItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3" />
                    {t(`mission.items.${item}`)}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('expertise.title')}
              </h3>
              <ul className="space-y-4">
                {expertiseItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3" />
                    {t(`expertise.items.${item}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="prose prose-lg dark:prose-invert mt-16">
          {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('prompt')}
          </h3> */}
          <p className="text-gray-600 dark:text-gray-300">
            {t('promptDescription')}
          </p>
        </div>
      </div>
    </div>
  );
}