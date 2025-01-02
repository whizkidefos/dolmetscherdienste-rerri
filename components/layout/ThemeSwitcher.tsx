'use client';

import {Sun, Moon} from 'lucide-react';
import {useTheme} from '@/context/ThemeContext';
import {motion} from 'framer-motion';

export default function ThemeSwitcher() {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{duration: 0.2}}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-5 w-5 text-yellow-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{duration: 0.2}}
        className="flex items-center justify-center"
      >
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
      </motion.div>
    </button>
  );
}
