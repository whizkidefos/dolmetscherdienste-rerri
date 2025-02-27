'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {FileText, Mic, BookOpen, Building2, Scale, Users, Medal, Banknote, Syringe} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const serviceIcons = {
  legal: Scale,
  document: Building2,
  technical: FileText,
  educational: BookOpen,
  medical: Syringe,
  financial: Banknote,
  personal: Users,
  a2t: Mic,
} as const;

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
          centered
        />

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(serviceIcons).map(([key, Icon], index) => (
            <motion.div
              key={key}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1}}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg transform rotate-12 opacity-10" />
              <div className="relative">
                <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}