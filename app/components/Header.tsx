'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Gozi Africa
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              About
            </a>
            <a href="#foundations" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              Foundations
            </a>
            <a href="#causes" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              Our Causes
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200">
              Get Involved
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-3 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="block px-3 py-3 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#foundations" className="block px-3 py-3 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Foundations
              </a>
              <a href="#causes" className="block px-3 py-3 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Our Causes
              </a>
              <a href="#contact" className="block px-3 py-3 text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
