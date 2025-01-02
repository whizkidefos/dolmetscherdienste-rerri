import React from 'react';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-white" />
            <div className="ml-3">
              <p className="text-white font-semibold">Dolmetscherdienste Rerri</p>
              <p className="text-gray-400 text-sm">Professional Translation Services</p>
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Dolmetscherdienste Rerri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}