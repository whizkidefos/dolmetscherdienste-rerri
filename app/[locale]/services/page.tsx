'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {FileText, Mic, BookOpen, Building2, Scale, Users, Banknote, Syringe} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

const serviceImages = {
  legal: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1000',
  document: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1000',
  technical: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000',
  educational: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000',
  medical: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
  financial: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000',
  personal: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1000',
  a2t: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000',
} as const;

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

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <div className="bg-white dark:bg-gray-900 py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
          centered
        />

        <div className="mt-20 space-y-20">
          {Object.entries(serviceIcons).map(([key, Icon], index) => (
            <motion.div
              key={key}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.2}}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg transform -rotate-6 scale-105 opacity-20" />
                  <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                    <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={serviceImages[key as keyof typeof serviceImages]}
                    alt={t(`items.${key}.title`)}
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}