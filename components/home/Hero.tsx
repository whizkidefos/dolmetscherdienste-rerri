'use client';

import {useTranslations} from 'next-intl';
import {motion, AnimatePresence} from 'framer-motion';
import {useEffect, useState} from 'react';
import Image from 'next/image';

const titles = [
  'Professional Translation',
  'Expert Interpretation',
  'Cultural Consulting',
  'Business Communication',
  'Technical Translation',
];

const images = [
  {
    url: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2070',
    alt: 'Professional translation team meeting',
  },
  {
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069',
    alt: 'Business communication and interpretation',
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070',
    alt: 'Cultural consulting and communication',
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
    alt: 'Technical and business translation',
  },
];

export default function Hero() {
  const t = useTranslations('hero');
  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const titleTimer = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2500);

    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 30000); // Change image every minute

    return () => {
      clearInterval(titleTimer);
      clearInterval(imageTimer);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="relative min-h-[85vh] flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pt-24 lg:pt-32 px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className="relative"
            >
              <motion.span
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.3}}
                className="inline-block py-1 px-3 mb-6 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
              >
                Dolmetscherdienste Rerri
              </motion.span>

              <div className="h-32 lg:h-40 mb-6">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentTitle}
                    initial={{y: 40, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: -40, opacity: 0}}
                    transition={{duration: 0.5}}
                    className="text-5xl lg:text-7xl font-extrabold tracking-tight"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                      {titles[currentTitle]}
                    </span>
                  </motion.h1>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.6}}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-xl"
              >
                {t('description')}
              </motion.p>

              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.8}}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  {t('cta.primary')}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
                >
                  {t('cta.secondary')}
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-[85vh] relative mt-12 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImage].url}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover rounded-none lg:rounded-bl-[80px] shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-none lg:rounded-bl-[80px]" />
              </motion.div>
            </AnimatePresence>

            {/* Floating Stats */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1}}
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1.2}}
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">3K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}