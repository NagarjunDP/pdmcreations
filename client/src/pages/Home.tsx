
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Palette,
  Music,
  Camera,
  Phone,
  ChevronRight,
  Star,
  Instagram,
  Users,
  ArrowRight,
  Gem,
  Ribbon,
  Cake,
  Baby,
  Flower2,
  Heart,
  Home as HomeIcon,
  Tent,
  MessageCircle,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ButterflyAnimation from "../components/ButterflyAnimation"; // Ensure this exports default
interface Highlight {
}

interface Service {
  img: string;
  title: string;
  subtitle: string;
  highlights: string[];
  rating: number;
}

const services = [
  {
    id: 'naming',
    title: 'Naming Ceremony',
    icon: 'Baby',
    description: 'Celebrate new beginnings with elegance',
    image: '/name1.jpeg',
  },
  {
    id: 'halfsaree',
    title: 'Halfsaree',
    icon: 'Ribbon',
    description: 'Traditional decor for halfsaree functions',
    image: '/half1.jpeg',
  },
  {
    id: 'babyshower',
    title: 'Baby Shower',
    icon: 'Baby',
    description: 'Beautiful decor for welcoming your little one',
    image: '/baby1.jpeg',
  },
  {
    id: 'platedecoration',
    title: 'Plate Decoration',
    icon: 'Sparkles',
    description: 'Creative plate decor for special ceremonies',
    image: '/baby6.jpeg',
  },
  {
    id: 'haldi',
    title: 'Haldi',
    icon: 'Sparkles',
    description: 'Vibrant yellow themes for haldi occasions',
    image: '/hal1.jpeg',
  },
  {
    id: 'housewarming',
    title: 'House Warming',
    icon: 'Home',
    description: 'Elegant setups for your new home',
    image: '/house1.jpeg',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    icon: 'Sparkles',
    description: 'Beautiful decor for your engagement stage',
    image: '/eng1.jpeg',
  },
  {
    id: 'chapra',
    title: 'Chapra',
    icon: 'Tent',
    description: 'Traditional chapra setup with fresh flowers',
    image: '/chapra1.jpeg',
  },
  {
    id: 'rentals',
    title: 'Rentals',
    icon: 'Tent',
    description: 'Event rentals including props and decor items',
    image: '/hal6.jpeg',
  }
];


const iconMap: Record<string, any> = {
  'Rings': Heart,
  'Baby': Baby,
  'Ribbon': Ribbon,
  'Balloon': Cake,
  'Paintbrush': Palette,
  'Sparkles': Sparkles,
  'Home': HomeIcon,
  'Mantapa': Tent,
};

// === CONFIG ===
const PHONE_NUMBER = '+918884076143';
const BUSINESS_NAME = "PDM Creations";

const SERVICES = [
  {
    icon: Camera,
    img: "/name1.jpeg",
    title: "Naming Ceremony",
    subtitle: "Birthdays, anniversaries & custom themes",
    highlights: ["Kids themes", "Naming Ceremony", "Custom props", "Entertainment"],
    rating: 5
  },
  {
    icon: Ribbon,
    img: "/half11.jpeg", // Needs appropriate image
    title: "Halfsaree",
    subtitle: "Traditional decor for halfsaree functions",
    highlights: ["Traditional Themes", "Floral Designs", "Stage Decoration", "Lighting"],
    rating: 5
  },
  {
    icon: Baby,
    img: "/baby3.jpeg", // Needs appropriate image
    title: "Baby Shower",
    subtitle: "Beautiful decor for welcoming your little one",
    highlights: ["Baby Shower Themes", "Floral Arches", "Custom Backdrops", "Photo Booth"],
    rating: 5
  },
  {
    icon: Gem,
    img: "/baby6.jpeg", // Needs appropriate image
    title: "Plate Decoration",
    subtitle: "Creative plate decor for special ceremonies",
    highlights: ["Engagement Plates", "Aarti Thali", "Bridal Trousseau", "Gift Packing"],
    rating: 5
  },
  {
    icon: Music,
    img: "/hal1.jpeg",
    title: "Haldi",
    subtitle: "Vibrant yellow themes for special occasions",
    highlights: ["High Quality", "Shastra", "Haldi", "Marriage Decorations"],
    rating: 5
  },
  {
    icon: HomeIcon,
    img: "/house1.jpeg",
    title: "House Warming",
    subtitle: "Elegant transformations for your personal space",
    highlights: ["Entrance arches", "Puja room decor", "Wall drapes", "Staircase florals"],
    rating: 5
  },
  {
    icon: Sparkles,
    img: "/eng5.jpeg",
    title: "Engagement",
    subtitle: "Floral artistry, lighting, drapes & themes",
    highlights: ["Stage setups", "Mandaps", "Lighting design", "Theme decor"],
    rating: 5
  },
  {
    icon: Flower2,
    img: "/chapra1.jpeg", // Needs appropriate image
    title: "Chapra",
    subtitle: "Beautiful chapra decoration for traditional events",
    highlights: ["Chapra Setup", "Fresh Flowers", "Greenery", "Traditional Touch"],
    rating: 5
  },
  {
    icon: Star,
    img: "/rent1.jpeg", // Needs appropriate image
    title: "Rentals",
    subtitle: "Event rentals including props and decor items",
    highlights: ["Decor Props", "Seating", "Lighting Equipment", "Backdrops"],
    rating: 5
  }
];

// Initialize AOS for reveal animations
if (typeof window !== 'undefined') {
  AOS.init({ duration: 800, once: true });
}

// ==== Logo Video Component (for business logo repeat in black spot) ====
// function LogoVideo() {
//   // Make sure the video file is in the public folder, use a relative path!
//   return (
//     <section className="flex justify-center items-center bg-black py-8">
//       <video
//         src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"    // Put your logo video in /public and use "/video-file.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="h-32 w-auto rounded-xl shadow-xl border-4 border-pink-600 bg-black"
//         style={{ objectFit: "contain" }}
//       />
//     </section>
//   );
// }

// ==== Hero Section ====
//minimal
// function Hero() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       <motion.div style={{ y }} className="absolute inset-0">
//         <img
//           src="/event_hero_image_violet_brighter.webp"
//           alt="PDM Creations Hero"
//           className="w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
//       </motion.div>
//       <div
//   className="
//     absolute 
//     left-4 bottom-6 
//     md:left-16 md:bottom-16
//     flex flex-col items-end z-30
//   "
// >
//   <div
//     className="
//       bg-black/80 rounded-full
//       shadow-2xl flex items-center justify-center
//       w-[60px] h-[60px]            /* MOBILE SIZE */
//       md:w-[132px] md:h-[132px]    /* DESKTOP SIZE */
//     "
//   >
//     <video
//       src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="
//         object-contain
//         w-[36px] h-[36px]            /* MOBILE VIDEO SIZE */
//         md:w-[200px] md:h-[150px]    /* DESKTOP VIDEO SIZE */
//       "
//       style={{
//         background: "transparent"
//       }}
//     />
//   </div>
// </div>

//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
//       >
//       {/* === BIG PROFESSIONAL BUSINESS NAME === */}
//         <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1.4, ease: "easeOut" }}
//     className="mb-12"
//   >
//     {/* Main Name – Clean, Bold, Minimal */}
//     <h1 className="
//       text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl
//       font-black tracking-tight
//       text-white
//       drop-shadow-2xl
//       leading-none
//     ">
//       PDM Creations
//     </h1>

//     {/* Subtext – Elegant divider style */}
//     <div className="flex items-center justify-center gap-6 mt-6">
//       <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/60"></div>
//       <p className="
//         text-base xs:text-lg sm:text-xl md:text-2xl
//         font-medium tracking-widest text-white/90
//         uppercase
//       ">
//         Decoration and Management
//       </p>
//       <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/60"></div>
//     </div>
//   </motion.div>
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl mb-6"
//         >
//           Celebrate Lovely Moments
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-xl md:text-2xl text-pink-200 max-w-3xl mx-auto mb-10 font-light"
//         >
//           With us, every smile shines brighter than ever
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <a
//             href="services"
//             className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
//           >
//             Explore Services
//           </a>
//           <a
//             href={`tel:${PHONE_NUMBER}`}
//             className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full hover:bg-white/30 transition-all"
//           >
//             Call Now
//           </a>
//         </motion.div>
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <ChevronRight className="w-8 h-8 text-pink-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }

//good working new theory
// function Hero() {
//   const { scrollY } = useScroll();

//   // OPTIMIZATION: Reduced the parallax distance for smoother mobile scrolling
//   const y = useTransform(scrollY, [0, 500], [0, 100]);
//   const textY = useTransform(scrollY, [0, 300], [0, 80]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

//   // HIGH QUALITY DUMMY IMAGES (Unsplash: Wedding/Event Decor)
//   const backgroundImages = [
//         "/event2.jpg",
//         "/event_hero_image_balanced.webp",
//         "/event4.jpg",
//         "/oie_911234R8vLZS8d.jpg",
//         "/oie_9113458FxOUTGzI.jpg",
//         "/oie_9113542DF0IVhHx.jpg",
//         "/assets/uAINxsSQeVJ4.jpg",
//     // "https://images.unsplash.com/photo-1519225468359-2996515c1e11?q=80&w=1920&auto=format&fit=crop", // Grand Hall
//     // "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop", // Wedding Flowers
//     // "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop", // Outdoor Decor
//     // "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop", // Lights
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   // Background Slideshow Logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
//     }, 6000); // Change every 6 seconds
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">

//       {/* 1. BACKGROUND LAYERS (Optimized for Mobile) */}
//       <motion.div style={{ y }} className="absolute inset-0 z-0">
//         <AnimatePresence mode='popLayout'>
//           <motion.div
//             key={currentImage}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 2.5, ease: "easeOut" }} // Smooth Crossfade
//             className="absolute inset-0 w-full h-full"
//           >
//             {/* The Ken Burns Effect Image */}
//             <motion.img 
//               src={backgroundImages[currentImage]}
//               alt="Decoration"
//               className="w-full h-full object-cover"
//               // Hardware acceleration for lag-free zoom
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.15 }}
//               transition={{ duration: 10, ease: "linear" }}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* OPTIMIZED OVERLAY: Uses gradients instead of blurs for performance */}
//         {/* Base Darkener */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Brand Color Tints (Gradient) */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30 mix-blend-overlay" />

//         {/* Texture (Optional - remove if still laggy, but usually fine) */}
//         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
//       </motion.div>


//       {/* 2. MAIN CONTENT */}
//       {/* Z-Index 20 to sit above background */}
//       <motion.div 
//         style={{ opacity, y: textY }}
//         className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto"
//       >

//         {/* TOP TAGLINE */}


//         {/* MAIN TITLE: PDM CREATIONS */}
//         <div className="relative mb-2 md:mb-6">
//           {/* Performance Friendly Glow (Radial Gradient, not Blur) */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/20 blur-[60px] rounded-full -z-10" />

//           <motion.h1
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             // Responsive Text Sizes: xs -> sm -> md -> lg
//             className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif font-semibold leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-fuchsia-400 drop-shadow-xl"
//           >
//             PDM Creations
//           </motion.h1>
//         </div>
//             //bottom 
//       <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 1, delay: 0.2 }}
//           className="flex items-center gap-3 md:gap-6 mb-4 md:mb-8"
//         >
//           {/* Decorative Lines */}
//           <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-pink-400" />
//           <span className="text-pink-200 text-[10px] md:text-sm font-medium uppercase tracking-[0.3em] text-nowrap">
//             Decoration And Management
//           </span>
//           <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-pink-400" />
//         </motion.div>

//         {/* MIDDLE TAGLINE: Celebrate Lovely Moment */}
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-2xl sm:text-3xl md:text-5xl font-light text-white drop-shadow-lg"
//         >
//           Celebrate Lovely Moment's With Us
//         </motion.h2>

//         {/* BOTTOM EMOTIONAL TAGLINE */}
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="mt-3 md:mt-6 text-base md:text-2xl text-pink-100/90 font-serif italic"
//         >
//           " We make your smile "
//         </motion.p>

//         {/* ACTION BUTTONS */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0"
//         >
//           <a 
//             href="#services"
//             className="w-full sm:w-auto px-8 py-3 md:py-4 bg-gradient-to-r from-fuchsia-700 to-purple-800 text-white font-semibold text-base md:text-lg rounded-full shadow-lg shadow-purple-900/40 active:scale-95 transition-transform"
//           >
//             Explore Services
//           </a>
//           <a 
//             href="tel:+919739220735"
//             className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-base md:text-lg rounded-full active:bg-white/20 transition-colors"
//           >
//             Call Now
//           </a>
//         </motion.div>

//       </motion.div>

//       {/* SCROLL INDICATOR */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, y: [0, 10, 0] }} 
//         transition={{ delay: 2, duration: 2, repeat: Infinity }} 
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
//       >
//         <span className="text-[10px] uppercase tracking-[0.2em] text-pink-200/60">Scroll</span>
//         <ChevronRight className="w-5 h-5 text-pink-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }
//crazy thank you
function Hero() {
  const { scrollY } = useScroll();

  // OPTIMIZATION: Reduced parallax for smoother mobile experience
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const textY = useTransform(scrollY, [0, 300], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // 🌟 Premium Image Collection: Chosen for high clarity and visual impact
  const backgroundImages = [
    "/name5.jpeg",
    "hal1.jpeg",
    "/name9.jpeg",
    "/half11.jpeg",
    "/half7.jpeg",
    "/baby3.jpeg",
    "/baby9.jpeg",
    "/plate7.jpeg",
    "/hal5.jpeg",
    "/house1.jpeg",
    "/eng5.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Background Slideshow Logic - Optimized for "Elegant & Beautiful" transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 7000); // 7 seconds for a relaxed, premium pace
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  // Circular Text Logic for the badge
  const circularText = "PDM • Creations •";
  const characters = circularText.split("");
  const radius = 45; // Adjusts how far out the text sits

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">

      {/* =========================================
          1. BACKGROUND LAYERS - Optimized with Cross-Fade & Preloading
      ========================================= */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {/* Elegant Ken Burns Effect - Simplified for Smoothness */}
            <motion.img
              src={backgroundImages[currentImage]}
              alt="Decoration Background"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1.25 }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-full h-full object-cover brightness-[1.1] transform-gpu"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* IMAGE PRELOADING - Hidden but forced to load */}
        <div className="hidden" aria-hidden="true">
          {backgroundImages.map((src, i) => (
            <img key={i} src={src} alt="preload" />
          ))}
        </div>

        {/* PREMIUM GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10" />
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply z-10" />
      </motion.div>


      {/* =========================================
          2. MAIN CENTER CONTENT
      ========================================= */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto mt-[-60px] md:mt-0"
      >



        {/* MAIN TITLE - With Subtle "Pulse & Shimmer" Animation */}
        <div className="relative mb-4 md:mb-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-amber-500/5 blur-[100px] rounded-full -z-10" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0.9, 1],
              y: 0,
              scale: [1, 1.01, 1]
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            }}
            className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif font-bold leading-[0.9] tracking-tight drop-shadow-2xl bg-gradient-to-b from-yellow-100 via-yellow-400 to-amber-600 bg-clip-text text-transparent"
          >
            PDM Creations
          </motion.h1>
        </div>

        {/* MIDDLE TAGLINE (Motto) - Enhanced Visibility & Elegant Serif Font */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-4xl font-serif italic tracking-wider text-amber-50 drop-shadow-[0_2px_15px_rgba(251,191,36,0.5)]"
        >
          Creating Magic With Minimalist Decor
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-8 sm:px-0"
        >
          <a
            href="/services"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold text-base md:text-lg rounded-full shadow-xl shadow-amber-900/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            Explore Services
          </a>
          <a
            href="tel:+918884076143"
            className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium text-base md:text-lg rounded-full hover:bg-white/10 active:scale-95 transition-all"
          >
            Call Now
          </a>
        </motion.div>
      </motion.div>


      {/* =========================================
          3. BOTTOM LEFT ANIMATED LOGO BADGE (CLEAN & LARGE)
      ========================================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30"
      >
        <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex items-center justify-center group cursor-pointer">

          {/* ROTATING CIRCULAR TEXT RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
          >
            {characters.map((char, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  height: `100%`,
                  transform: `rotate(${i * (360 / characters.length)}deg)`,
                  transformOrigin: "0 50%",
                  left: '50%',
                }}
                className="text-amber-400 font-serif uppercase text-[8px] md:text-[13px] font-bold tracking-[0.4em]"
              >
                <span style={{ position: 'absolute', top: -10, left: '-50%' }}>{char}</span>
              </span>
            ))}
          </motion.div>

          {/* CENTRAL LOGO (NO BORDER, NO CONTAINER) */}
          <div className="relative w-full h-full z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
            <img
              src="/WhatsApp_Image_2026-03-08_at_10.45.49_AM-removebg-preview.png"
              alt="PDM Logo"
              className="w-[75%] h-[75%] object-contain filter drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] z-20"
            />
          </div>
        </div>
      </motion.div>


      {/* =========================================
          4. SCROLL INDICATOR
      ========================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        // Adjusted bottom position to not overlap logo on small screens
        className="absolute bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-pink-200/60">Scroll</span>
        <ChevronRight className="w-5 h-5 text-pink-300 rotate-90" />
      </motion.div>
    </section>
  );
}




{/* ========== PROFESSIONAL SERVICES GRID SECTION ========== */ }
<section className="py-24 md:py-32 bg-gradient-to-b from-white via-pink-50/50 to-purple-50/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Our <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From intimate gatherings to grand celebrations — we make every moment unforgettable
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { icon: Heart, title: "Wedding Decoration", desc: "Dream mandaps, floral artistry & lighting", color: "from-pink-500 to-rose-600" },
        { icon: Flower2, title: "Haldi & Mehendi", desc: "Vibrant themes with fresh flowers & props", color: "from-amber-500 to-orange-500" },
        { icon: Baby, title: "Naming Ceremony", desc: "Elegant baby welcomes & joyful decor", color: "from-blue-500 to-cyan-500" },
        { icon: Cake, title: "Birthday Parties", desc: "Themed balloons, backdrops & fun setups", color: "from-purple-500 to-pink-600" },
        { icon: Gem, title: "Engagement & Anniversaries", desc: "Romantic ring ceremonies & love-filled decor", color: "from-emerald-500 to-teal-600" },
        { icon: Users, title: "Corporate & Festivals", desc: "Housewarming, Ganesh Chaturthi & more", color: "from-indigo-500 to-purple-600" },
      ].map((service, i) => (
        <motion.a
          key={i}
          href="/services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.7 }}
          whileHover={{ y: -12 }}
          className="group block"
        >
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full p-10 flex flex-col items-center text-center">
            <div className={`p-5 rounded-full bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed flex-1">{service.desc}</p>
            <div className="mt-6 text-pink-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Explore <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>

    {/* View All Button */}
    <motion.a
      href="/services"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block mt-16 px-12 py-5 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
    >
      View All Services →
    </motion.a>
  </div>
</section>
// ==== Services Section (Scroll animations, full page sections) ====
// function ServiceFeature({ service }) {
//   const IconComponent = service.icon;
//   return (
//     <section className="max-w-7xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">
//       <motion.img
//         src={service.img}
//         alt={service.title}
//         initial={{ opacity: 0, x: -80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="rounded-3xl shadow-xl w-full md:w-1/2 object-cover object-center"
//         style={{ maxHeight: "440px" }}
//       />
//       <motion.div
//         initial={{ opacity: 0, x: 80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="flex-1"
//       >
//         <div className="flex items-center mb-2">
//           <IconComponent className="w-12 h-12 text-pink-500 mr-3 drop-shadow" />
//           <h2 className="text-3xl font-extrabold text-pink-700">{service.title}</h2>
//         </div>
//         <p className="text-lg text-slate-600 mb-5">{service.subtitle}</p>
//         <ul className="mb-6">
//           {service.highlights.map((h, i) => (
//             <li key={i} className="text-base flex gap-2 text-slate-700">
//               <Star className="w-4 h-4 text-yellow-400" /> {h}
//             </li>
//           ))}
//         </ul>
//         <div className="flex gap-1 items-center mb-3">
//           {Array.from({ length: service.rating }).map((_, i) => (
//             <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//           ))}
//         </div>
//         <span className="ml-2 text-sm text-pink-400">{service.rating}.0/5 client rating</span>
//       </motion.div>
//     </section>
//   );
// }
export function ServiceFeature({ service, reverse }: { service: Service; reverse?: boolean }) {
  return (
    <section
      className={`
        max-w-6xl mx-auto 
        px-4 py-8 md:py-14
        flex flex-col 
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
        items-center 
        gap-6 md:gap-12
        text-center                 /* ← center everything on mobile */
      `}
    >
      {/* ─── IMAGE ─── */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <motion.img
          src={service.img}
          alt={service.title}
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-2xl w-full object-cover shadow-xl"
          style={{ maxHeight: "340px" }}
        />
      </motion.div>

      {/* ─── TEXT ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.05 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start"
      >
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-black mb-2 leading-tight">
          {service.title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-neutral-600 mb-5 md:mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
          {service.subtitle}
        </p>

        {/* ─── FEATURE PILLS (compact) ─── */}
        <div className="grid grid-cols-2 gap-2 w-full max-w-md mx-auto md:mx-0">
          {service.highlights.map((h, i) => (
            <div
              key={i}
              className="
                text-xs md:text-sm text-black/85
                bg-white border border-black/8
                px-2.5 py-1.5 rounded-lg
                shadow-sm hover:shadow transition-shadow
                flex items-center justify-center
              "
            >
              {h}
            </div>
          ))}
        </div>

        {/* ─── RATING ─── */}
        <div className="flex items-center justify-center md:justify-start gap-1 mt-4">
          {Array.from({ length: service.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-xs text-neutral-500 mt-1">
          Rated {service.rating}.0 / 5 by clients
        </p>
      </motion.div>
    </section>
  );
}



// ==== Stats Section ====
function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [250, 500, 10, 3];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targets.forEach((target, i) => {
            let start = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[i] = target;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[i] = Math.ceil(start);
                  return newCounts;
                });
              }
            }, 30);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Events Completed", value: counts[0] },
    { label: "Happy Clients", value: counts[1] },
    { label: "Team Members", value: counts[2] },
    { label: "Years Experience", value: counts[3] },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.value}+
              </div>
              <p className="text-lg text-pink-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const testimonials = [
  {
    name: "Chandan Ck",
    event: "Baby Shower",
    role: "Decorations",
    text: "I’m so happy with the amazing decoration done by PDM Creations for my baby shower! The setup looked so elegant and dreamy and everything was perfect.",
    rating: 5,
    decorationImage: "/event05.webp",   // <-- BIG photo
  },
  {
    name: "Dheeraj Yadav",
    event: "Birthday",
    role: "Birthday Decoration",
    text: "Srinivas did great job in very less time. Had called him in the mrng around 9am for my daughter's birthday decore. He finished the work quickly within short notice with perfection.",
    rating: 5,
    decorationImage: "/event6.jpg",
  },
  {
    name: "Lavanya",
    event: "Birthday",
    role: "Birthday Party",
    text: "He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating: 5,
    decorationImage: "/event7.jpg",
  },
  {
    name: "Nikitha Apuri",
    event: "Baby Shower",
    role: "Baby SHower Decorations",
    text: "He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating: 5,
    decorationImage: "/events8.jpg",
  },
  {
    name: "Garima Singh",
    event: "Engagement",
    role: "Enagagement Decorations",
    text: "He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating: 5,
    decorationImage: "/event10.jpg",
  },
  {
    name: "Suhail Baig",
    event: "Haldi",
    role: "Haldi Decorations",
    text: "He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating: 5,
    decorationImage: "/event11.jpg"
  }
  // … add the rest with your own URLs …
];

// ==== Call-to-Action ====
function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Create Magic?
        </h2>
        <p className="text-xl text-pink-200 mb-10">
          Let’s bring your vision to life. Get a free quote today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-10 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call {PHONE_NUMBER}
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Get Free Quote
          </a>
          <a
            href={`https://wa.me/918884076143`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function FloatingCallButton() {
  return (
    <>
      {/* Phone Button */}
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-yellow-500/50 transition-all border-4 border-white"
      >
        <Phone className="w-8 h-8" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/918884076143`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-emerald-500/50 transition-all border-4 border-white"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </>
  );
}

function AutoSlider({ count, setIndex, index }: { count: number, setIndex: (i: number) => void, index: number }) {
  useEffect(() => {
    const timer = setInterval(() => {
      // Increment by 1 (one page at a time)
      setIndex((index + 1) % count);
    }, 5000);
    return () => clearInterval(timer);
  }, [index, count, setIndex]);
  return null;
}

function ScrollingStats() {
  const stats = [
    "250+ Completed Events",
    "3+ Years Experience",
    "100% Client Satisfaction",
    "Premium Floral Decor",
    "Creative Plate Styling",
    "Bespoke Event Design",
  ];

  // Double for seamless infinite loop
  const displayStats = [...stats, ...stats];

  return (
    <div className="bg-slate-950 border-y border-amber-500/20 py-4 md:py-6 overflow-hidden relative z-20 pointer-events-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // Slower is smoother and more premium
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
        className="flex whitespace-nowrap gap-12 md:gap-24 items-center w-max"
      >
        {displayStats.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 md:gap-6 transform-gpu">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
            <span className="text-amber-100/90 font-serif italic font-medium tracking-[0.15em] text-sm md:text-xl uppercase drop-shadow-sm">
              {stat}
            </span>
            <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-600/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}


// === MAIN APP ===
export default function Home() {
  const [activePackageIndex, setActivePackageIndex] = useState(0);

  return (
    <>
      <Hero />
      <ScrollingStats />

      {/* GLOBAL ANIMATIONS – Paste once */}
      <style>{`
  @keyframes title-glow {
    0%, 100% { 
      text-shadow: 0 0 40px rgba(251, 191, 36, 0.8), 
                    0 0 80px rgba(251, 191, 36, 0.5),
                    0 0 120px rgba(251, 191, 36, 0.3);
    }
    50% { 
      text-shadow: 0 0 60px rgba(251, 191, 36, 1), 
                    0 0 100px rgba(251, 191, 36, 0.7),
                    0 0 140px rgba(251, 191, 36, 0.5);
    }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }
  .animate-title-glow { animation: title-glow 5s ease-in-out infinite; }
  .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
`}</style>
      {/* ========== PERFECT HORIZONTAL SERVICES CAROUSEL (NO EDGE CUT-OFF) ========== */}
      {/* ========== FINAL: CLEAN, SMALL, PREMIUM SCROLLING SERVICES (USING YOUR REAL DATA) ========== */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">Services</span>
            </motion.h2>
            <p className="mt-4 text-lg text-gray-600">Discover our expert event solutions</p>
          </div>

          {/* New Slider Implementation - Grouped by Pages */}
          <div className="relative group">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${activePackageIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {/* Group items into pages: 1 on mobile, 3 on desktop */}
                {(() => {
                  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
                  const pages = [];
                  for (let i = 0; i < services.length; i += itemsPerPage) {
                    pages.push(services.slice(i, i + itemsPerPage));
                  }

                  return pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="flex-shrink-0 w-full flex gap-6 px-4">
                      {page.map((service) => {
                        const Icon = iconMap[service.icon] || Sparkles;
                        return (
                          <motion.a
                            key={service.id}
                            href="/services"
                            className={`flex-shrink-0 ${itemsPerPage === 1 ? 'w-full' : 'w-[calc(33.333%-16px)]'}`}
                          >
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full group/card">
                              {/* Image */}
                              <div className="relative h-56 overflow-hidden">
                                <img
                                  src={service.image}
                                  alt={service.title}
                                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute bottom-4 left-4 text-white">
                                  <Icon className="w-8 h-8 mb-2 text-pink-400" />
                                  <h3 className="text-xl font-bold drop-shadow-md">{service.title}</h3>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="p-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                  {service.description}
                                </p>
                                <div className="flex items-center text-pink-600 font-bold text-sm">
                                  View Details
                                  <ChevronRight className="w-5 h-5 ml-1 group-hover/card:translate-x-1.5 transition-transform" />
                                </div>
                              </div>
                            </div>
                          </motion.a>
                        );
                      })}
                    </div>
                  ));
                })()}
              </motion.div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center items-center gap-3 mt-12">
              {(() => {
                const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
                const pageCount = Math.ceil(services.length / itemsPerPage);
                return Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePackageIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activePackageIndex === i
                      ? "w-8 bg-pink-600 shadow-[0_0_10px_rgba(219,39,119,0.5)]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ));
              })()}
            </div>
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all"
            >
              See All Services
            </motion.a>
          </div>
        </div>

        {/* Improved Auto-sliding Logic */}
        <AutoSlider
          count={Math.ceil(services.length / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3))}
          setIndex={setActivePackageIndex}
          index={activePackageIndex}
        />
      </section>
      {/* Animate services, normal scroll sections - no container scroll */}
      {SERVICES.map((service) => (
        <ServiceFeature key={service.title} service={service} />
      ))}




      <Stats />
      <CTA />
      <FloatingCallButton />
    </>
  );
}
