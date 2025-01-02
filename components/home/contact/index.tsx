'use client';

import {useTranslations} from 'next-intl';
import ContactForm from '@/components/ui/ContactForm';
import ContactInfo from './ContactInfo';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('title')}
          subtitle={t('subtitle')}
          centered
        />

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}