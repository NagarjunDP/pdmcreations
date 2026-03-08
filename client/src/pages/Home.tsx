
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform,AnimatePresence } from 'framer-motion';
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
  Home,
  Tent,
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
    id: 'wedding',
    title: 'Wedding Stage',
    icon: 'Rings',
    description: 'End-to-end coordination for your dream day',
    image: '/wed6.jpg',
  },
  {
    id: 'naming',
    title: 'Naming Ceremony',
    icon: 'Baby',
    description: 'Celebrate new beginnings with elegance',
    image: '/baby6.jpg',
  },
  {
    id: 'engagement',
    title: 'Engagement Stage',
    icon: 'Ribbon',
    description: 'Celebrate motherhood in style',
    image: '/engage1.png',
  },
  
  {
    id: 'haldi',
    title: 'Haldi Decortaion',
    icon: 'Sparkles',
    description: 'Corporate, Festivals & More',
    image: '/hal6.png',
  },
  {
    id: 'chapra',
    title: 'Chapra Decoration',
    icon: 'Sparkles',
    description: 'Corporate, Festivals & More',
    image: '/chap1.jpg',
  },
  {
    id: 'flower',
    title: 'Flower Decoration',
    icon: 'Sparkles',
    description: 'Corporate, Festivals & More',
    image: '/flo6.jpg',
  },
];

const reels = [
  "/Logo_Animation_for_Hero_Section.mp4",
  "/video_20251229_201106_edit.mp4",
  "/video_20251229_201204_edit.mp4",
  "/video_20251229_201404_edit.mp4",
  "/video_20251229_201247_edit.mp4",
  
];
// Icon mapping (since you're using emoji strings in Services)
// const iconMap: Record<string, any> = {
//   'Rings': Heart,
//   'Baby': Baby,
//   'Ribbon': Ribbon,
//   'Balloon': Cake,
//   'Paintbrush': Palette,
//   'Sparkles': Sparkles,
// };
// // === CONFIG ===
// const PHONE_NUMBER = '+919538067336';
// const BUSINESS_NAME = "Adhishakthi Flowers";

// // Example service data -- keep for animated service sections
// const SERVICES = [
//   {
//     icon: Sparkles,
//     img: "/eng1.JPG",
//     title: "Engagement Stage",
//     subtitle: "Floral artistry, lighting, drapes & themes",
//     highlights: [
//       "Stage setups", "Mandaps", "Lighting design", "Theme decor"
//     ],
//     rating: 5
//   },
//   {
//     icon: Palette,
//     img: "/wed1.jpg",
//     title: "Wedding Stage",
//     subtitle: "End-to-end coordination for your dream day",
//     highlights: [
//       "Stage appearance", "Graceful", "Setup Props", "Flower Decorations"
//     ],
//     rating: 5
//   },
//   {
//     icon: Music,
//     img: "/hal1.jpg",
//     title: "Haldi Decorations",
//     subtitle: "Marriage, Special Occasions",
//     highlights: [
//       "High Quality", "Shastra", "Haldi", "Marriage Decorations"
//     ],
//     rating: 5
//   },
//   {
//     icon: Camera,
//     img: "/baby1.jpg",
//     title: "Naming Ceromony",
//     subtitle: "Birthdays, anniversaries & custom themes",
//     highlights: [
//       "Kids themes", "Naming Ceremony", "Custom props", "Entertainment"
//     ],
//     rating: 5
//   }
// ];

const iconMap: Record<string, any> = {
  'Rings': Heart,
  'Baby': Baby,
  'Ribbon': Ribbon,
  'Balloon': Cake,
  'Paintbrush': Palette,
  'Sparkles': Sparkles,
  'Home': Home,
  'Mantapa': Tent,
};

// === CONFIG ===
const PHONE_NUMBER = '+919538067336';
const BUSINESS_NAME = "Adhishakthi Flowers";

const SERVICES = [
  {
    icon: Sparkles,
    img: "/engage1.png",
    title: "Engagement Stage",
    subtitle: "Floral artistry, lighting, drapes & themes",
    highlights: [
      "Stage setups", "Mandaps", "Lighting design", "Theme decor"
    ],
    rating: 5
  },
  {
    icon: Palette,
    img: "/eng1.JPG",
    title: "Wedding Stage",
    subtitle: "End-to-end coordination for your dream day",
    highlights: [
      "Stage appearance", "Graceful", "Setup Props", "Flower Decorations"
    ],
    rating: 5
  },
  {
    icon: Tent, // Mantapa Decoration
    img: "/man1.jpg",
    title: "Mantapa Decoration",
    subtitle: "Traditional and grand temple-style setups",
    highlights: [
      "Traditional pillars", "Fresh flower drapes", "Sacred fire setup", "Ritual seating"
    ],
    rating: 5
  },
  {
    icon: Home, // Home Ceremony
    img: "/home1.jpg",
    title: "Home Ceremony",
    subtitle: "Elegant transformations for your personal space",
    highlights: [
      "Entrance arches", "Puja room decor", "Wall drapes", "Staircase florals"
    ],
    rating: 5
  },
  {
    icon: Music,
    img: "/hal1.jpg",
    title: "Haldi Decorations",
    subtitle: "Vibrant yellow themes for special occasions",
    highlights: [
      "High Quality", "Shastra", "Haldi", "Marriage Decorations"
    ],
    rating: 5
  },
  {
    icon: Camera,
    img: "/baby1.jpg",
    title: "Naming Ceremony",
    subtitle: "Birthdays, anniversaries & custom themes",
    highlights: [
      "Kids themes", "Naming Ceremony", "Custom props", "Entertainment"
    ],
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
//           alt="Shri Events Hero"
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
//       Shri Events
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
        

//         {/* MAIN TITLE: SHRI EVENTS */}
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
//             Shri Events
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

  // Image Array containing client photos and balanced fallbacks
  const backgroundImages = [
    "/ad3.jpg",
    "/ad1.jpg",
        "/ad4.jpg",
        "/ad5.jpg",
        "/ad6.png",
    "/IMG_0147.JPG",
    "/ad8.png",
    "/ad9.png",
    "/ad10.jpg",
    "/ad11.png",
    "/ad12.png",
    "/ad13.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Background Slideshow Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(timer);
  }, []);

  // Circular Text Logic for the badge
  const circularText = "Adhishakthi • Flowers •";
  const characters = circularText.split("");
  const radius = 45; // Adjusts how far out the text sits

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      
      {/* =========================================
          1. BACKGROUND LAYERS
      ========================================= */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Ken Burns Effect Image */}
            <motion.img 
              src={backgroundImages[currentImage]}
              alt="Decoration Background"
              className="w-full h-full object-cover"
              // Hardware acceleration for smooth zoom
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 12, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* OPTIMIZED OVERLAYS - BRIGHTENED AS REQUESTED */}
        {/* Base Darkener - Reduced opacity significantly so images are clearer */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/40" />
        
        {/* Brand Color Tints (Subtle Gradients) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        {/* Purple tint mix-blend for brand identity */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20 mix-blend-overlay" />
      </motion.div>


      {/* =========================================
          2. MAIN CENTER CONTENT
      ========================================= */}
      <motion.div 
        style={{ opacity, y: textY }}
        className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto mt-[-60px] md:mt-0"
      >
        
        

        {/* MAIN TITLE */}
        <div className="relative mb-2 md:mb-6">
          {/* Performance Friendly Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/20 blur-[60px] rounded-full -z-10" />
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            // Highly Responsive Text Sizes
            className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif font-semibold leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-fuchsia-400 drop-shadow-xl"
          >
            Adhishakthi
          </motion.h1>
        </div>

      {/* TOP TAGLINE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3 md:gap-6 mb-4 md:mb-8"
        >
          <div className="h-[1px] w-18 md:w-28 bg-gradient-to-r from-transparent to-pink-400" />
          <span className="text-pink-200 text-[10px] md:text-sm font-medium uppercase tracking-[0.3em] text-nowrap">
            Flowers
          </span>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-pink-400" />
        </motion.div>

        {/* MIDDLE TAGLINE */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl sm:text-3xl md:text-5xl font-light text-white drop-shadow-lg px-4"
        >
          Tumakuru
        </motion.h2>

        {/* BOTTOM EMOTIONAL TAGLINE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-3 md:mt-6 text-base md:text-2xl text-pink-100/90 font-serif italic"
        >
          
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-8 sm:px-0"
        >
          <a 
            href="/services"
            className="w-full sm:w-auto px-8 py-3 md:py-4 bg-gradient-to-r from-fuchsia-700 to-purple-800 text-white font-semibold text-base md:text-lg rounded-full shadow-lg shadow-purple-900/40 active:scale-95 transition-transform"
          >
            Explore Services
          </a>
          <a 
            href=""
            className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-base md:text-lg rounded-full active:bg-white/20 transition-colors"
          >
            Call Now
          </a>
        </motion.div>
      </motion.div>


      {/* =========================================
          3. BOTTOM LEFT ANIMATED LOGO BADGE
      ========================================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        // Positioning: Bottom Left, responsive margins
        className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-30"
      >
        {/* Container for Video + Text Ring. Responsive sizing. */}
        <div className="relative w-[70px] h-[70px] md:w-[120px] md:h-[120px] flex items-center justify-center">
          
          {/* ROTATING CIRCULAR TEXT RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
          >
            {characters.map((char, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  // Magic number to push text to the edge based on container size
                  height: `100%`, 
                  transform: `rotate(${i * (360 / characters.length)}deg)`,
                  transformOrigin: "0 50%", // Rotate around center point
                  left: '50%',
                }}
                className="text-pink-300/80 font-serif uppercase text-[6px] md:text-[10px] font-medium tracking-widest"
              >
               <span style={{ position: 'absolute', top: -5, left: '-50%' }}>{char}</span>
              </span>
            ))}
          </motion.div>

          {/* CENTRAL CIRCULAR VIDEO */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-[1px] border-purple-400/30 z-10 bg-black/40 backdrop-blur-sm p-1 md:p-2 scale-75">
  <video
    src="/Logo_Animation_for_Hero_Section.mp4"
    autoPlay
    loop
    muted
    playsInline
    /* 1. Changed object-contain to object-cover */
    /* 2. Added scale-125 (or any value > 100) to zoom in */
    className="w-full h-full object-cover rounded-full scale-125"
    style={{ background: "transparent" }}
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
// t00 bright
// function Hero() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);
//   const opacity = useTransform(scrollY, [0, 400], [1, 0.75]);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       {/* Parallax Background */}
//       <motion.div style={{ y }} className="absolute inset-0 -z-10">
//         <img
//           src="/event_hero_image_violet_brighter.webp"
//           alt="Shri Events"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent" />
//       </motion.div>

//       {/* Floating Logo */}
//       <div className="absolute left-4 bottom-6 md:left-16 md:bottom-16 z-30">
//         <div className="bg-black/70 backdrop-blur-md rounded-full shadow-2xl p-3 md:p-6 border border-amber-400/30">
//           <video
//             src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"
//             autoPlay loop muted playsInline
//             className="w-12 h-12 md:w-32 md:h-32 object-contain"
//           />
//         </div>
//       </div>

//       {/* 3 SINGLE BUTTERFLIES WITH SOFT TRAILS – Calm & Elegant */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* Butterfly 1 – Top Left */}
//         <motion.div
//           initial={{ x: -100, y: 100 }}
//           animate={{
//             x: [null, 100, -80, 120],
//             y: [null, -60, -100, -40],
//           }}
//           transition={{
//             duration: 32,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 opacity-60"
//         >
//           <motion.div
//             className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-purple-400/20 via-blue-400/10 to-transparent"
//             animate={{ scale: [1, 1.4, 1] }}
//             transition={{ duration: 4, repeat: Infinity }}
//           />
//           <ButterflyAnimation />
//         </motion.div>

//         {/* Butterfly 2 – Top Right */}
//         <motion.div
//           initial={{ x: 100, y: 80 }}
//           animate={{
//             x: [null, -120, 80, -100],
//             y: [null, -80, -40, -100],
//           }}
//           transition={{
//             duration: 38,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 6,
//           }}
//           className="absolute top-16 right-8 w-56 h-56 md:w-72 md:h-72 opacity-55 hidden md:block"
//         >
//           <motion.div
//             className="absolute inset-0 blur-2xl opacity-25 bg-gradient-to-l from-blue-400/20 via-purple-400/10 to-transparent"
//             animate={{ scale: [1, 1.5, 1] }}
//             transition={{ duration: 5, repeat: Infinity }}
//           />
//           <ButterflyAnimation />
//         </motion.div>

//         {/* Butterfly 3 – Bottom Center */}
//         <motion.div
//           initial={{ x: 0, y: 200 }}
//           animate={{
//             x: [-80, 100, -60, 80],
//             y: [null, -100, -60, -120],
//           }}
//           transition={{
//             duration: 42,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 12,
//           }}
//           className="absolute bottom-40 left-1/2 -translate-x-1/2 w-48 h-48 md:w-60 md:h-60 opacity-50 hidden lg:block"
//         >
//           <motion.div
//             className="absolute inset-0 blur-xl opacity-20 bg-gradient-to-t from-purple-400/15 to-transparent"
//             animate={{ scale: [1, 1.6, 1] }}
//             transition={{ duration: 6, repeat: Infinity }}
//           />
//           <ButterflyAnimation />
//         </motion.div>
//       </div>

//       {/* Very Subtle Sparkles (almost invisible) */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full blur-sm"
//             initial={{ y: -50 }}
//             animate={{ y: "110vh" }}
//             transition={{
//               duration: 25 + i * 4,
//               repeat: Infinity,
//               delay: i * 3,
//               ease: "linear",
//             }}
//             style={{ left: `${15 + i * 13}%` }}
//           />
//         ))}
//       </div>

//       {/* MAIN CONTENT – Clean, Royal, Focused */}
//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8, y: 100 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           className="mb-12 relative"
//         >
//           <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/15 via-yellow-300/10 to-amber-400/15 blur-3xl rounded-full animate-pulse-slow opacity-70" />
          
//           <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight leading-none bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-100 bg-clip-text text-transparent drop-shadow-2xl">
//             Shri Events
//           </h1>

//           <div className="flex items-center justify-center gap-10 mt-8">
//             <motion.div initial={{ width: 0 }} animate={{ width: "140px" }} transition={{ duration: 1.5, delay: 1 }} className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
//             <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest text-amber-100 uppercase">
//               Decoration and Management
//             </motion.p>
//             <motion.div initial={{ width: 0 }} animate={{ width: "140px" }} transition={{ duration: 1.5, delay: 1 }} className="h-px bg-gradient-to-l from-transparent via-amber-300 to-transparent" />
//           </div>
//         </motion.div>

//         <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-8">
//           Celebrate Lovely Moments
//         </motion.h2>

//         <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl font-light">
//           With us, every smile shines brighter than ever
//         </motion.p>

//         <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="flex flex-col sm:flex-row gap-6">
//           <a href="/services" className="px-12 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border border-amber-300">
//             Explore Services
//           </a>
//           <a href={`tel:${PHONE_NUMBER}`} className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-amber-300 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all">
//             Call Now +91 97392 20735
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
//         <ChevronRight className="w-10 h-10 text-amber-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }
//upgrade to crazy
// function Hero() {
//   const { scrollY } = useScroll();
  
//   // OPTIMIZATION: Reduced parallax for smoother mobile experience
//   const y = useTransform(scrollY, [0, 500], [0, 100]);
//   const textY = useTransform(scrollY, [0, 300], [0, 80]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

//   // Image Array
//   const backgroundImages = [
//     "/event2.jpg",
//     "/event_hero_image_balanced.webp",
//     "/event4.jpg",
//     "/oie_911234R8vLZS8d.jpg",
//     "/oie_9113458FxOUTGzI.jpg",
//     "/oie_9113542DF0IVhHx.jpg",
//     "/assets/uAINxsSQeVJ4.jpg",
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   // Background Slideshow Logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   // Circular Text Logic
//   const circularText = "Shri.Events.Decor • ";
//   const characters = circularText.split("");

//   return (
//     <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center">
      
//       {/* =========================================
//           1. BACKGROUND LAYERS
//       ========================================= */}
//       <motion.div style={{ y }} className="absolute inset-0 z-0">
//         <AnimatePresence mode='popLayout'>
//           <motion.div
//             key={currentImage}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <motion.img 
//               src={backgroundImages[currentImage]}
//               alt="Decoration Background"
//               className="w-full h-full object-cover"
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.15 }}
//               transition={{ duration: 12, ease: "linear" }}
//             />
//           </motion.div>
//         </AnimatePresence>
        
//         {/* OVERLAYS - Darkened slightly to make the new vibrant text pop */}
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
//         {/* A subtle violet mix to blend with brand colors */}
//         <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay" />
//       </motion.div>


//       {/* =========================================
//           2. MAIN CENTER CONTENT (New Color Grading)
//       ========================================= */}
//       <motion.div 
//         style={{ opacity, y: textY }}
//         className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto mt-[-60px] md:mt-0"
//       >
        
//         {/* TOP TAGLINE: Decoration And Management (Accent Color: Orange/Red from logo number) */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 1, delay: 0.2 }}
//           className="flex items-center gap-3 md:gap-6 mb-2 md:mb-4"
//         >
//           {/* Gradient lines matching the accent color */}
//           <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-orange-500" />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-nowrap drop-shadow-sm">
//             Decoration And Management
//           </span>
//           <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-orange-500" />
//         </motion.div>

//         {/* MAIN TITLE: SHRI EVENTS (Main Brand Gradient: Violet to Pink) */}
//         <div className="relative mb-2 md:mb-4">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-fuchsia-600/20 blur-[60px] rounded-full -z-10" />
          
//           <motion.h1
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             // EXACT GRADIENT FROM LOGO: Violet -> Magenta/Pink
//             className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif font-bold leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#7F00FF] via-[#E100FF] to-[#FF007F] drop-shadow-2xl"
//           >
//             Shri Events
//           </motion.h1>
//         </div>

//         {/* MIDDLE TAGLINE: Celebrate Lovely Moment's With Us (Smooth 3-Line Color Grading) */}
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           // Smooth gradient across the text block: Violet -> Pink -> Orange
//           className="text-xl sm:text-3xl md:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 drop-shadow-lg px-4"
//         >
//           Celebrate Lovely Moment's With Us
//         </motion.h2>

//         {/* BOTTOM EMOTIONAL TAGLINE (Softer Pink/Violet) */}
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="mt-3 md:mt-6 text-base md:text-2xl text-pink-200/90 font-serif italic"
//         >
//           " We make your smile "
//         </motion.p>

//         {/* ACTION BUTTONS (New Glass Effect & Gradients) */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-8 sm:px-0"
//         >
//           {/* GLASS BUTTON: Explore Services */}
//           <a 
//             href="#services"
//             // Glassmorphism styles: transparent bg, blur, gradient border
//             className="group relative w-full sm:w-auto px-8 py-3 md:py-4 overflow-hidden rounded-full bg-white/5 backdrop-blur-md border-[1px] border-transparent transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(225,0,255,0.4)]"
//           >
//             {/* Gradient Border Trick */}
//             <div className="absolute inset-0 rounded-full z-[-1] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 p-[1px] -m-[1px] mask-border"></div>
//             <span className="relative text-white font-semibold text-base md:text-lg group-hover:text-pink-100 transition-colors">
//               Explore Services
//             </span>
//           </a>

//           {/* SOLID GRADIENT BUTTON: Call Now */}
//           <a 
//             href="tel:+919739220735"
//             // Main brand gradient background
//             className="w-full sm:w-auto px-8 py-3 md:py-4 bg-gradient-to-r from-[#7F00FF] to-[#FF007F] text-white font-semibold text-base md:text-lg rounded-full shadow-lg shadow-fuchsia-900/40 active:scale-95 hover:scale-105 transition-transform"
//           >
//             Call Now
//           </a>
//         </motion.div>
//       </motion.div>


//       {/* =========================================
//           3. BOTTOM LEFT ANIMATED LOGO BADGE (Unchanged)
//       ========================================= */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-30"
//       >
//         <div className="relative w-[70px] h-[70px] md:w-[120px] md:h-[120px] flex items-center justify-center">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//             className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
//           >
//             {characters.map((char, i) => (
//               <span
//                 key={i}
//                 style={{
//                   position: "absolute",
//                   height: `100%`, 
//                   transform: `rotate(${i * (360 / characters.length)}deg)`,
//                   transformOrigin: "0 50%",
//                   left: '50%',
//                 }}
//                 // Updated text color to match new theme
//                 className="text-fuchsia-300/80 font-serif uppercase text-[6px] md:text-[10px] font-medium tracking-widest"
//               >
//                <span style={{ position: 'absolute', top: -5, left: '-50%' }}>{char}</span>
//               </span>
//             ))}
//           </motion.div>

//           <div className="relative w-full h-full rounded-full overflow-hidden border-[1px] border-fuchsia-400/30 z-10 bg-black/40 backdrop-blur-sm p-1 md:p-2 scale-75">
//             <video
//               src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-contain rounded-full"
//               style={{ background: "transparent" }}
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* =========================================
//           4. SCROLL INDICATOR (Updated Color)
//       ========================================= */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, y: [0, 10, 0] }} 
//         transition={{ delay: 2, duration: 2, repeat: Infinity }} 
//         className="absolute bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
//       >
//         <span className="text-[10px] uppercase tracking-[0.2em] text-fuchsia-200/60">Scroll</span>
//         <ChevronRight className="w-5 h-5 text-fuchsia-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }
//royal grand
// ==== FINAL GRAND HERO – CLIENT WILL FALL IN LOVE INSTANTLY ====
// ==== FINAL GRAND HERO – FIXED & PERFECT ====
// function Hero() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);
//   const opacity = useTransform(scrollY, [0, 400], [1, 0.75]);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       {/* Parallax Background */}
//       <motion.div style={{ y }} className="absolute inset-0 -z-10">
//         <img
//           src="/event_hero_image_violet_brighter.webp"
//           alt="Shri Events"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/40 to-transparent" />
//       </motion.div>

//       {/* Floating Logo (Bottom Left) */}
//       <div className="absolute left-4 bottom-6 md:left-16 md:bottom-16 z-30">
//         <div className="bg-black/70 backdrop-blur-md rounded-full shadow-2xl p-3 md:p-6 border border-amber-400/30">
//           <video
//             src="/grok-video-7446ecf8-8560-4b06-8923-1779d51970da.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-12 h-12 md:w-32 md:h-32 object-contain"
//           />
//         </div>
//       </div>

//       {/* MAIN GRAND CONTENT */}
//       <motion.div
//         style={{ opacity }}
//         className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
//       >
//         {/* Subtle Falling Sparkles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-amber-300 rounded-full opacity-70"
//               initial={{ y: -100 }}
//               animate={{
//                 y: "110vh",
//                 x: `${Math.random() * 100}vw`,
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>

//         {/* GRAND BUSINESS NAME */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7, y: 100 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1.8, ease: "easeOut" }}
//           className="mb-8 md:mb-12 relative"
//         >
//           {/* Golden Glow Aura */}
//           <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/30 via-yellow-300/20 to-amber-400/30 blur-3xl rounded-full scale-150 animate-pulse-slow" />

//           <h1 className="
//             text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]
//             font-black tracking-tight leading-none
//             bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-100
//             bg-clip-text text-transparent
//             drop-shadow-2xl
//             relative z-10
//             animate-title-glow
//           ">
//             Shri Events
//           </h1>

//           {/* Royal Subtitle */}
//           <div className="flex items-center justify-center gap-10 mt-8">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "140px" }}
//               transition={{ duration: 1.5, delay: 1 }}
//               className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"
//             />
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 1 }}
//               className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest text-amber-100 uppercase"
//             >
//               Decoration and Management
//             </motion.p>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "140px" }}
//               transition={{ duration: 1.5, delay: 1 }}
//               className="h-px bg-gradient-to-l from-transparent via-amber-300 to-transparent"
//             />
//           </div>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.6, duration: 1.4 }}
//           className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-8"
//         >
//           Celebrate Lovely Moments
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2, duration: 1 }}
//           className="text-xl md:text-2xl text-pink-100 mb-12 max-w-3xl font-light"
//         >
//           With us, every smile shines brighter than ever
//         </motion.p>

//         {/* Royal Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2.3, duration: 1 }}
//           className="flex flex-col sm:flex-row gap-6"
//         >
//           <a
//             href="#services"
//             className="px-12 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg rounded-full shadow-2xl hover:shadow-amber-400/60 hover:scale-105 transition-all duration-300 border border-amber-300"
//           >
//             Explore Services
//           </a>
//           <a
//             href={`tel:${PHONE_NUMBER}`}
//             className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-amber-300 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all"
//           >
//             Call Now +91 97392 20735
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2"
//       >
//         <ChevronRight className="w-10 h-10 text-amber-300 rotate-90" />
//       </motion.div>
//     </section>
//   );
// }

//update fucniton hero 
// ==== FINAL SMOOTH + GRAND HERO – PERFECT FOR MOBILE & DESKTOP ====



{/* ========== PROFESSIONAL SERVICES GRID SECTION ========== */}
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
  const targets = [150, 500, 10, 8];
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
    text: "I’m so happy with the amazing decoration done by Shri Events Decoration for my baby shower! The setup looked so elegant and dreamy and everything was perfect.",
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
    name:"Nikitha Apuri",
    event:"Baby Shower",
    role:"Baby SHower Decorations",
    text:"He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating:5,
    decorationImage:"/events8.jpg",
  },
  {
    name:"Garima Singh",
    event:"Engagement",
    role:"Enagagement Decorations",
    text:"He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating:5,
    decorationImage:"/event10.jpg",
  },
  {
    name:"Suhail Baig",
    event:"Haldi",
    role:"Haldi Decorations",
    text:"He is an excellent event organizer. The decoration was really beautiful, and he has a very good nature. His services are also reasonably priced",
    rating:5,
    decorationImage:"/event11.jpg"
  }
  // … add the rest with your own URLs …
];
// ==== Testimonials Section ====
function InstaProof() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Subtle background texture/glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-full mx-auto">
        
        {/* 1. CENTERED HEADER AREA */}
        <div className="flex flex-col items-center text-center px-6 mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-pink-500 font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">
              Real-time Artistry
            </h3>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-slate-900">
              The <span className="font-serif italic text-pink-400">Insta</span> Proof
            </h2>
            <p className="max-w-md mx-auto text-slate-400 text-sm md:text-base font-light">
              Join 5,000+ others watching our floral stories unfold daily.
            </p>
          </motion.div>
          
          <motion.a 
            href="https://www.instagram.com/adhish_akthi_06flowers/" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full shadow-xl shadow-pink-100 transition-all duration-300 mt-4"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Follow the Journey</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* 2. CENTERED INFINITE SLIDER */}
        <div className="relative w-full">
          {/* Edge Blurs - Stronger on desktop for better focus */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-64 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-64 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 50, // Even slower for maximum luxury feel
                ease: "linear",
              }}
            >
              {[...reels, ...reels].map((video, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="relative w-44 h-72 md:w-72 md:h-[480px] flex-shrink-0 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-slate-50 shadow-2xl shadow-pink-100/30 border-[4px] md:border-[8px] border-white"
                >
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle inner glass effect */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem] md:rounded-[3.5rem]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 3. CENTERED FOOTER TAGLINE */}
        <div className="flex flex-col items-center mt-16 px-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 md:w-16 bg-pink-100" />
            <p className="text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-slate-300 font-bold text-center">
              Handcrafted Artistry
            </p>
            <div className="h-[1px] w-8 md:w-16 bg-pink-100" />
          </div>
        </div>
      </div>
    </section>
  );
}




function InstaProwof() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(244,114,182,0.05),transparent_50%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h3 className="text-pink-500 font-medium tracking-[0.3em] uppercase text-[10px]">
              Real-time Artistry
            </h3>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-slate-900">
              The <span className="font-serif italic text-pink-400">Insta</span> Proof
            </h2>
          </div>
          
          <a 
            href="https://www.instagram.com/adhish_akthi_06flowers/" 
            target="_blank"
            className="group flex items-center gap-3 bg-slate-50 border border-slate-200 px-6 py-3 rounded-full hover:bg-white hover:shadow-xl transition-all duration-500"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Join 5k+ Followers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Horizontal Infinite Slider */}
        <div className="relative w-full">
          {/* Aesthetic Fades at edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 35, // Smooth, slow luxury speed
                ease: "linear",
              }}
            >
              {[...reels, ...reels].map((video, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative w-40 h-64 md:w-64 md:h-[400px] flex-shrink-0 rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-pink-100/50 border-[4px] border-white"
                >
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="flex justify-center mt-12">
          <div className="h-[1px] w-12 bg-pink-200 self-center" />
          <p className="px-4 text-[9px] uppercase tracking-[0.6em] text-slate-400 font-bold whitespace-nowrap">
            Handcrafted with love
          </p>
          <div className="h-[1px] w-12 bg-pink-200 self-center" />
        </div>
      </div>
    </section>
  );
}

function InstaProooof() {
  return (
    <section className="relative py-14 overflow-hidden bg-white">
      
      {/* subtle animated glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.18),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* tiny header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-slate-700">
            5,000+ followers watching our work live
          </p>

          <a
            href="https://www.instagram.com/adhish_akthi_06flowers/"
            target="_blank"
            className="flex items-center gap-1 text-rose-600 text-sm hover:opacity-80"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>

        {/* floating reels */}
        <div className="relative h-[140px] overflow-hidden">
          <motion.div
            className="absolute flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...reels, ...reels].map((video, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, y: -6 }}
                className="relative w-24 h-36 rounded-2xl overflow-hidden
                           bg-black shadow-lg border border-white/60"
              >
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* glow on hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition
                                shadow-[0_0_25px_rgba(244,114,182,0.6)] rounded-2xl">
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
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
            className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call {PHONE_NUMBER}
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            Get Free Quote
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
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-pink-500/50 transition-all"
      >
        <Phone className="w-8 h-8" />
      </motion.a>

      {/* Instagram Button */}
      <motion.a
        href="https://www.instagram.com/adhish_akthi_06flowers/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-pink-500/50 transition-all"
      >
        <Instagram className="w-8 h-8" />
      </motion.a>
    </>
  );
}

// === MAIN APP ===
export default function Home() {
  return (
    <>
      <Hero />

{/* GLOBAL ANIMATIONS – Paste once */}
<style jsx global>{`
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
<section className="py-20 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-14">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-gray-900"
      >
        Our <span className="bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">Services</span>
      </motion.h2>
      <p className="mt-4 text-lg text-gray-600">Tap any card to explore packages</p>
    </div>

    {/* Scrolling Container */}
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-6"
        animate={{ x: [0, -100 + "%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ animationPlayState: "running" }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
        onTouchStart={(e) => e.currentTarget.style.animationPlayState = "paused"}
        onTouchEnd={(e) => e.currentTarget.style.animationPlayState = "running"}
      >
        {[...services, ...services].map((service, i) => {
          const Icon = iconMap[service.icon] || Sparkles;
          return (
            <motion.a
              key={`${service.id}-${i}`}
              href="/services"
              className="
                group flex-shrink-0 
                w-[78vw] 
                sm:w-[65vw] 
                md:w-[40vw] 
                lg:w-[30vw] 
                max-w-xs
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Icon + Title */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon className="w-8 h-8 mb-1.5" />
                    <h3 className="text-lg font-bold drop-shadow-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-gray-700 text-xs leading-relaxed mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center text-pink-600 font-semibold text-sm">
                    View Packages
                    <ChevronRight className="w-4.5 h-4.5 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-14">
      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
      >
        Explore All Services
      </motion.a>
    </div>
  </div>
</section>
      {/* Animate services, normal scroll sections - no container scroll */}
      {SERVICES.map((service) => (
        <ServiceFeature key={service.title} service={service} />
      ))}

  
      
      <InstaProof />
      <Stats />
      <CTA />
      <FloatingCallButton />
    </>
  );
}
