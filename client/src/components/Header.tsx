'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO_SRC = "/WhatsApp_Image_2026-03-08_at_10.45.49_AM-removebg-preview.png";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handlePathChange = () => setCurrentPath(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const isHomePage = currentPath === '/';
  const showTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-pink-100'
          }`}
      >
        {/* Header Container */}
        <div className="relative flex items-center h-20 md:h-24 px-6 lg:px-12">

          {/* 1. BRAND: Logo (Left-aligned always) */}
          <div className="z-20 flex items-center justify-start xl:flex-1">
            <a href="/" className="group flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-18 w-18 md:h-22 md:w-22 flex items-center justify-center p-0"
              >
                <img
                  src={LOGO_SRC}
                  alt="PDM Logo"
                  className="relative h-full w-full object-contain filter drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]"
                  loading="eager"
                />
              </motion.div>

              {/* Brand Text - Desktop (beside logo) */}
              <div className="hidden xl:flex flex-col">
                <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none transition-colors duration-300 font-serif ${showTransparent ? 'text-white' : 'text-gray-900'
                  }`}>
                  PDM
                  <span className="text-pink-600">.</span>
                </span>
                <span className={`text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${showTransparent ? 'text-pink-200' : 'text-purple-600'
                  }`}>
                  Creations
                </span>
              </div>
            </a>
          </div>

          {/* 2. BRAND TEXT - Mobile (Centered absolutely) */}
          <div className="xl:hidden absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
            <span className={`text-xl font-black tracking-tighter leading-none transition-colors duration-300 font-serif ${showTransparent ? 'text-white' : 'text-gray-900'
              }`}>
              PDM
              <span className="text-pink-600">.</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${showTransparent ? 'text-pink-200' : 'text-purple-600'
              }`}>
              Creations
            </span>
          </div>

          {/* 3. NAVIGATION: Desktop Only */}
          <div className="hidden xl:flex flex-1 justify-end items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-bold text-sm tracking-widest uppercase transition-all duration-300 ${showTransparent
                    ? 'text-white hover:text-pink-200 drop-shadow-lg'
                    : 'text-gray-900 hover:text-pink-600'
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="/contact"
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:scale-105 ${showTransparent
                ? 'bg-white text-pink-600 hover:bg-pink-50'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                }`}
            >
              Book Now
            </a>
          </div>

          {/* 4. MOBILE TOGGLE: Absolute right on mobile */}
          <div className="xl:hidden absolute right-6 top-1/2 -translate-y-1/2 flex items-center z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all ${showTransparent
                ? 'bg-white/20 backdrop-blur-md text-white border border-white/40'
                : 'bg-white shadow-md text-gray-900 border border-pink-100'
                }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header >

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-0 top-20 z-40 bg-white shadow-2xl xl:hidden"
            >
              <nav className="flex flex-col items-center gap-6 pt-10 pb-12">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-gray-900 hover:text-pink-600 uppercase"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-xl"
                >
                  Book Now
                </a>
              </nav>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
}
