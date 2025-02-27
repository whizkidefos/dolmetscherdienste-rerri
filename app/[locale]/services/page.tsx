'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {FileText, Mic, BookOpen, Building2, Scale, Users, Banknote, Syringe} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

const serviceImages = {
  // Legal translation - Image of law books and gavel
  legal: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070',
  
  // Document translation - Image of business documents and contracts
  document: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072',
  
  // Technical translation - Image of technical blueprints or engineering documents
  technical: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
  
  // Educational translation - Image of classroom or educational setting
  educational: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070',
  
  // Medical translation - Image of medical documents or healthcare setting
  medical: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070',
  
  // Financial translation - Image of financial documents or business setting
  financial: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2072',
  
  // Personal document translation - Image of passport or personal documents
  personal: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2070',
  
  // Audio to text translation - Image of audio equipment or recording studio
  a2t: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070',
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
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={serviceImages[key as keyof typeof serviceImages]}
                    alt={t(`items.${key}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2} // Load first two images immediately
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