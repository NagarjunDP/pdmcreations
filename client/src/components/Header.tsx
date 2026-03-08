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
        className={`fixed top-0 left-0 w-full transition-all duration-500 ${isOpen ? 'z-[80] bg-white' : 'z-50'
          } ${showTransparent && !isOpen
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
                <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none transition-colors duration-300 font-serif ${showTransparent && !isOpen ? 'text-white' : 'text-gray-900'
                  }`}>
                  PDM
                  <span className="text-pink-600">.</span>
                </span>
                <span className={`text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${showTransparent && !isOpen ? 'text-pink-200' : 'text-purple-600'
                  }`}>
                  Creations
                </span>
              </div>
            </a>
          </div>

          {/* 2. BRAND TEXT - Mobile (Centered absolutely) */}
          <div className="xl:hidden absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
            <span className={`text-xl font-black tracking-tighter leading-none transition-colors duration-300 font-serif ${showTransparent && !isOpen ? 'text-white' : 'text-gray-900'
              }`}>
              PDM
              <span className="text-pink-600">.</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${showTransparent && !isOpen ? 'text-pink-200' : 'text-purple-600'
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
                  className={`font-bold text-sm tracking-widest uppercase transition-all duration-300 ${showTransparent && !isOpen
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
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:scale-105 ${showTransparent && !isOpen
                ? 'bg-white text-pink-600 hover:bg-pink-50'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                }`}
            >
              Book Now
            </a>
          </div>

          {/* 4. MOBILE TOGGLE: Absolute right on mobile */}
          <div className="xl:hidden absolute right-6 top-1/2 -translate-y-1/2 flex items-center z-[90]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all ${isOpen
                ? 'bg-gray-100 text-gray-900 shadow-inner'
                : showTransparent
                  ? 'bg-white/20 backdrop-blur-md text-white border border-white/40'
                  : 'bg-white shadow-md text-gray-900 border border-pink-100'
                }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Premium Full Screen Redesign */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] xl:hidden flex flex-col pt-24"
          >
            {/* Background Blur Overlay */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl -z-10" />

            <nav className="flex flex-col items-center px-10 gap-8 h-full">
              <div className="w-full h-[1px] bg-white/10" />

              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (i + 1) }}
                  onClick={() => setIsOpen(false)}
                  className="group w-full text-center py-4"
                >
                  <span className="text-3xl font-black text-white hover:text-pink-400 transition-colors uppercase tracking-tight">
                    {item.label}
                  </span>
                </motion.a>
              ))}

              <div className="w-full h-[1px] bg-white/10 my-4" />

              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/918884076143"
                className="w-full py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 text-white font-bold text-xl rounded-2xl shadow-2xl flex items-center justify-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                Book Your Event Now
              </motion.a>

              {/* Social Links at Bottom */}
              <div className="mt-auto pb-12 flex gap-8">
                <a href="https://wa.me/918884076143" className="text-white hover:text-green-400 transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.157-3.923c1.53.914 3.197 1.397 4.9 1.398 5.4 0 9.792-4.393 9.795-9.795.002-2.618-1.02-5.08-2.88-6.94s-4.321-2.881-6.94-2.883c-5.401 0-9.794 4.393-9.797 9.795.001 2.06.643 4.067 1.854 5.768l-.982 3.59 3.682-.966zm10.702-7.295c-.302-.15-.179-.264-1.217-.792-.121-.06-.21-.09-.301.044s-.361.452-.441.537c-.081.085-.16.105-.462-.045-1.246-.621-2.043-1.053-2.85-2.44-.225-.387.225-.359.643-1.199.074-.15.038-.285-.018-.39s-.452-1.086-.618-1.488c-.161-.392-.322-.339-.441-.345l-.376-.007c-.135 0-.354.051-.54.254-.186.203-.708.691-.708 1.685s.723 1.956.822 2.09c.1.135 1.424 2.174 3.45 3.051.482.209.859.333 1.153.427.484.154.925.132 1.274.08.388-.058 1.217-.497 1.388-.977.172-.48.172-.892.121-.977-.051-.085-.19-.135-.492-.285z" /></svg>
                </a>
                <a href="https://instagram.com/pdmcreations" className="text-white hover:text-pink-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.62.074-3.056.386-4.234 1.564-1.178 1.178-1.49 2.614-1.564 4.234-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.074 1.62.386 3.056 1.564 4.234 1.178 1.178 2.614 1.49 4.234 1.564 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.62-.074 3.056-.386 4.234-1.564 1.178-1.178 1.49-2.614 1.564-4.234.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.62-.386-3.056-1.564-4.234-1.178-1.178-2.614-1.49-4.234-1.564-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
