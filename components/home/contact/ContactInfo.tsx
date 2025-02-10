'use client';

import {Phone, Mail, MapPin} from 'lucide-react';
import {motion} from 'framer-motion';

const contactItems = [
  {
    icon: Phone,
    text: '+49 173 70 40 331',
    href: 'tel:+491737040331',
  },
  {
    icon: Mail,
    text: 'info@dolmetscherdienste-rerri.de',
    href: 'mailto:info@dolmetscherdienste-rerri.de',
  },
  {
    icon: MapPin,
    text: 'Heyerhoffstraße 38, 45770 Marl, Germany',
    href: 'https://maps.google.com/?q=Heyerhoffstraße 38, 45770 Marl, Germany',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
      <dl className="mt-6 space-y-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.text}
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.2}}
            >
              <a
                href={item.href}
                className="flex items-center group"
                target={item.icon === MapPin ? '_blank' : undefined}
                rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
              >
                <Icon className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                <span className="ml-3 text-gray-500 group-hover:text-gray-700 transition-colors">
                  {item.text}
                </span>
              </a>
            </motion.div>
          );
        })}
      </dl>
    </div>
  );
}