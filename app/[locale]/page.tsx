'use client';

import {useTranslations} from 'next-intl';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Contact from '@/components/home/contact';

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <main>
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}