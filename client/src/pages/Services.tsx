
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Phone, Mail } from 'lucide-react';
import ButterflyAnimation from '../components/ButterflyAnimation';



interface ServicePackage {
  id: string;
  title: string;
  icon: string;
  color: string;
  lightColor: string;
  description: string;
  image: string;
  highlights: string[];
  packages?: {
    name: string;
    items: string[];
  }[];
  gallery?: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activePackageIndex, setActivePackageIndex] = useState(0);

  const services: ServicePackage[] = [
  // 1️⃣ Wedding
  {
    id: 'wedding',
    title: 'Wedding Stage',
    icon: '💍',
    color: 'from-rose-600 to-pink-600',
    lightColor: 'from-rose-50 to-pink-50',
    description: 'End-to-end coordination for your dream day',
    image: 'eng1.JPG',
    highlights: ['Stage Setup', 'Mandaps', 'Lighting', 'Florals'],
    packages: [
      {
        name: 'Standard Wedding',
        items: ['Wedding stage decoration', 'Welcome board', 'Ramp decoration', 'Mantapa decoration', 'Grand reception garlands'],
      },
      {
        name: 'Premium Wedding',
        items: ['All Standard features', 'Grand muhurtham garlands', 'Mallige dindu', 'Extra tied flowers', 'VIP garlands'],
      },
      {
        name: 'Complete Wedding',
        items: ['All Premium features', 'Home decoration', 'Food catering', 'Photo booth', '360 selfie booth', 'Photography & Videography'],
      },
    ],
    gallery: ['/new1.jpeg', '/new2.jpeg', '/new3.jpeg', '/new4.jpeg'],
  },

  // 2️⃣ Naming Board Decoration
  {
    id: 'naming-board',
    title: 'Naming Board Decoration',
    icon: '🎨',
    color: 'from-amber-500 to-orange-600',
    lightColor: 'from-amber-50 to-orange-50',
    description: 'Customized name reveals and artistic board designs',
    image: '/name1.jpeg',
    highlights: ['Custom Typography', 'Floral Borders', 'LED Lighting', 'Themed Props'],
    packages: [
      {
        name: 'Classic Board',
        items: ['Hand-painted name board', 'Basic floral border', 'Easel stand rental', 'Welcome signage'],
      },
      {
        name: 'Elite Board',
        items: ['3D Acrylic lettering', 'Premium exotic flower framing', 'Spotlight arrangement', 'Themed background fabric'],
      },
      {
        name: 'Grand Reveal',
        items: ['Neon light name board', 'Full floral wall backdrop', 'Automatic reveal curtain', 'Cold fire entry sparkles'],
      },
    ],
    gallery: ['/name2.jpeg', '/name3.jpeg', '/name4.jpeg'],
  },

  // 3️⃣ Mantapa Decoration
  {
    id: 'mantapa',
    title: 'Mantapa Decoration',
    icon: '🏛',
    color: 'from-gold-600 to-yellow-700',
    lightColor: 'from-yellow-50 to-orange-50',
    description: 'Traditional and contemporary Mandap setups for sacred rituals',
    image: '/mantapaa2.jpeg',
    highlights: ['Traditional Carvings', 'Fresh Flower Drapes', 'Seating Logic', 'Sacred Fire Setup'],
    packages: [
      {
        name: 'Traditional Mantapa',
        items: ['Wooden pillar structure', 'Marigold & Mango leaf hangings', 'Standard backdrop', 'Seating for priest'],
      },
      {
        name: 'Contemporary Mantapa',
        items: ['Fiber/Acrylic pillars', 'Rose & Lily floral ceiling', 'Chandelier lighting', 'Carpeted flooring'],
      },
      {
        name: 'Royal Mantapa',
        items: ['Temple-style grand structure', 'Exotic orchid hangings', 'VIP upholstered seating', 'Water fountain backdrop'],
      },
    ],
    gallery: ['/mantapaa1.jpeg', '/man3.jpg', '/man4.jpg', '/man5.jpg'],
  },

  // 4️⃣ Haldi
  {
    id: 'haldi',
    title: 'Haldi Decoration',
    icon: '🌼',
    color: 'from-yellow-600 to-orange-500',
    lightColor: 'from-yellow-50 to-orange-50',
    description: 'Vibrant and joyful haldi celebrations',
    image: '/haltop.jpeg',
    highlights: ['Marigold Setup', 'Traditional Décor', 'Seating Setup', 'Photography'],
    packages: [
      {
        name: 'Basic Haldi',
        items: ['Backdrop decoration', 'Marigold strings', 'Floor seating', 'Basic props'],
      },
      {
        name: 'Standard Haldi',
        items: ['All Basic features', 'Floral backdrop', 'Brass props', 'Chair decoration', 'Photo corner'],
      },
      {
        name: 'Premium Haldi',
        items: ['All Standard features', 'Stage setup', 'Custom floral design', 'Lighting', 'Event coordination'],
      },
    ],
    gallery: ['/hal2.jpg', '/hal3.jpg', '/hal4.jpg', '/hal5.jpg'],
  },

  // 5️⃣ Engagement
  {
    id: 'engagement-stage',
    title: 'Engagement Stage',
    icon: '💍',
    color: 'from-indigo-600 to-purple-600',
    lightColor: 'from-indigo-50 to-purple-50',
    description: 'Beautiful setups for a perfect engagement',
    image: '/engage1.png',
    highlights: ['Stage Décor', 'Ring Ceremony', 'Floral Backdrops', 'Photography'],
    packages: [
      {
        name: 'Basic Engagement',
        items: ['Stage backdrop', 'Sofa seating', 'Flower decoration'],
      },
      {
        name: 'Standard Engagement',
        items: ['All Basic features', 'Theme-based décor', 'Lighting setup', 'Entrance décor'],
      },
      {
        name: 'Premium Engagement',
        items: ['All Standard features', 'Luxury floral stage', 'Custom props', 'Photo booth', 'Event management'],
      },
    ],
    gallery: ['/engage4.jpg', '/engage2.jpg', '/engage3.jpg', '/engage5.jpg'],
  },

  // 6️⃣ Entry Decoration
  {
    id: 'entry-decoration',
    title: 'Entry Decoration',
    icon: '🌸',
    color: 'from-rose-600 to-pink-600',
    lightColor: 'from-rose-50 to-pink-50',
    description: 'Elegant floral designs for every occasion',
    image: '/entry1.jpeg',
    highlights: ['Fresh Flowers', 'Custom Themes', 'Premium Finish', 'Lighting'],
    packages: [
      {
        name: 'Basic Flowers',
        items: ['Simple flower backdrop', 'Stage flowers', 'Entrance decoration'],
      },
      {
        name: 'Standard Flowers',
        items: ['All Basic features', 'Mixed flower setup', 'Ceiling hangings', 'Side décor'],
      },
      {
        name: 'Premium Flowers',
        items: ['All Standard features', 'Exotic flowers', 'Custom floral structures', 'Designer lighting'],
      },
    ],
    gallery: ['/entry2.jpeg', '/entry3.jpeg', '/entry4.jpeg', '/entry5.jpeg'],
  },

  // 7️⃣ Chapra Decoration
  {
    id: 'chapra-decoration',
    title: 'Chapra Decoration',
    icon: '⛺',
    color: 'from-green-600 to-emerald-600',
    lightColor: 'from-green-50 to-emerald-50',
    description: 'Traditional chapra setups with a modern touch',
    image: '/chap1.jpg',
    highlights: ['Traditional Style', 'Floral Drapes', 'Seating', 'Lighting'],
    packages: [
      {
        name: 'Basic Chapra',
        items: ['Chapra structure', 'Cloth draping', 'Basic lighting'],
      },
      {
        name: 'Standard Chapra',
        items: ['All Basic features', 'Flower decoration', 'Carpet flooring', 'Seating arrangement'],
      },
      {
        name: 'Premium Chapra',
        items: ['All Standard features', 'Designer drapes', 'Hanging décor', 'Full event coordination'],
      },
    ],
    gallery: ['/chap2.jpg', '/chap3.jpg', '/chap4.jpg', '/chap5.jpg'],
  },

  // 8️⃣ Naming Ceremony
  {
    id: 'naming',
    title: 'Naming Ceremony',
    icon: '👶',
    color: 'from-blue-600 to-cyan-600',
    lightColor: 'from-blue-50 to-cyan-50',
    description: 'Celebrate new beginnings with elegance',
    image: '/baby1.jpg',
    highlights: ['Stage Setup', 'Custom Props', 'Photography', 'Entertainment'],
    packages: [
      {
        name: 'Basic Naming',
        items: ['Stage decoration', 'Theme backdrop', 'Balloon decoration', 'Welcome board', 'Entrance decoration'],
      },
      {
        name: 'Standard Naming',
        items: ['All Basic features', 'Garlands', 'Mallige dindu', 'LED name display', 'Photo booth', 'Photography & Videography'],
      },
      {
        name: 'Premium Naming',
        items: ['All Standard features', 'Neon light board', 'Sound system', 'Catering', 'Coordination support'],
      },
    ],
    gallery: ['/baby2.jpg', '/baby3.png', '/baby4.png', '/baby5.JPG'],
  },
];

  const selectedServiceData = services.find(s => s.id === selectedService);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-15"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50">
  <div className="max-w-7xl mx-auto relative">

    {/* Decorative Butterfly - pushed a bit lower so it doesn't clash */}
    <div className="absolute top-8 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 hidden sm:block pointer-events-none opacity-60">
      <ButterflyAnimation />
    </div>

    {/* Heading & Description - now beautifully centered with proper top spacing */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-center max-w-5xl mx-auto"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
        Services &<br className="sm:hidden" /> Packages
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
        Discover our comprehensive collection of event decoration and management solutions.<br />
        Each package is crafted to bring your celebration to life with elegance and energy.
      </p>
    </motion.div>
  </div>
</section>



        {/* <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto relative">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 -mt-10 md:-mt-16 hidden sm:block pointer-events-none">
              <ButterflyAnimation />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center" 
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
                Services &<br />Packages
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                Discover our comprehensive collection of event decoration and management solutions. Each package is crafted to bring your celebration to life with elegance and energy.
              </p>
            </motion.div>
          </div>
        </section> */}

        {/* Services Grid Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map(service => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  onClick={() => {
                    setSelectedService(service.id);
                    setActivePackageIndex(0);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100/50">
                    {/* Image Container with Overlay */}
                    <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 text-4xl bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                      {/* Title & Description */}
                      <div className="mb-5">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {service.highlights.map((highlight, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${service.lightColor} text-gray-700 border border-gray-200/50`}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>

                      {/* Budget Info */}
                      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100/50">
                        <p className="text-sm font-semibold text-green-700">
                          💰 Budget-Friendly Packages Available
                        </p>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="mt-auto flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        <span>View Details</span>
                        <ArrowRight
                          size={18}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Budget-Friendly Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-green-200/30"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Affordable Quality
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We offer all services in a very budget-friendly way without compromising on quality. Every celebration deserves excellence, and we make it accessible to everyone.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Flexible payment plans',
                      'Customizable packages',
                      'No hidden charges',
                      'Premium quality guaranteed',
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <Check size={20} className="text-green-600 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  className="flex-shrink-0 text-6xl md:text-8xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💚
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200/30"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Plan Your Event?
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Let's bring your vision to life. Contact us today for a free consultation and custom quote.
                </p>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Phone */}
                <motion.a
                  href="tel:+919538067336"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-blue-200/50 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Call Now</p>
                    <p className="text-lg font-bold text-gray-900">+91 95380 67336</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
  href="mailto:cheluvarajusraju823@gmail.com"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-2xl border border-purple-200/50 hover:border-purple-400/50 hover:shadow-lg transition-all duration-300 w-full overflow-hidden"
>
  {/* Icon - Made slightly smaller on mobile to save space */}
  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
    <Mail size={22} className="text-purple-600 md:size-24" />
  </div>

  {/* Text Content - overflow-hidden is key here */}
  <div className="flex-1 min-w-0">
    <p className="text-xs md:text-sm text-gray-600 font-medium">Email Us</p>
    <p className="text-sm md:text-lg font-bold text-gray-900 break-all md:break-normal leading-tight">
      cheluvarajusraju823@gmail.com
    </p>
  </div>
</motion.a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 text-lg text-center inline-block"
          >
            Book Now
          </motion.a>

          <motion.a
            href="tel:+919538067336"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 text-lg text-center inline-block"
          >
            Contact Now
          </motion.a>
        </div>
        
      {/* ADD THESE THREE CLOSING TAGS BELOW */}
      </motion.div> 
    </div>
  </section>
            

        {/* Why Choose Us Section */}
        <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Adhishakthi Flowers?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                We deliver exceptional quality at budget-friendly prices without compromising on excellence.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: '⭐', title: 'Premium Quality', desc: 'High-quality decorations and services' },
                { icon: '💰', title: 'Budget-Friendly', desc: 'Affordable packages without compromise' },
                { icon: '👥', title: 'Expert Team', desc: 'Experienced professionals' },
                { icon: '🎯', title: 'Custom Solutions', desc: 'Tailored to your needs' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 border border-gray-100/50 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && selectedServiceData && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-0 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white w-full md:max-w-3xl md:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="sticky top-6 right-6 z-10 float-right bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors"
              >
                <X size={24} className="text-gray-900" />
              </button>

              {/* Modal Header */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={selectedServiceData.image}
                  alt={selectedServiceData.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedServiceData.color} opacity-20`}
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <div className="mb-8">
                  <div className="text-5xl mb-4">{selectedServiceData.icon}</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    {selectedServiceData.title}
                  </h2>
                  <p className="text-lg text-gray-600">{selectedServiceData.description}</p>
                </div>

                {/* Packages */}
                {selectedServiceData.packages && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Available Packages
                    </h3>

                    {/* Package Tabs */}
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                      {selectedServiceData.packages.map((pkg, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setActivePackageIndex(idx)}
                          className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                            activePackageIndex === idx
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {pkg.name}
                        </motion.button>
                      ))}
                    </div>

                    {/* Package Details */}
                    <motion.div
                      key={activePackageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-gray-50 rounded-2xl p-6 md:p-8"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-6">
                        {selectedServiceData.packages[activePackageIndex].name}
                      </h4>
                      <ul className="space-y-3">
                        {selectedServiceData.packages[activePackageIndex].items.map(
                          (item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-green-600 font-bold mt-1">✓</span>
                              <span className="font-medium">{item}</span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  </div>
                )}

                {/* Gallery */}
                {selectedServiceData.gallery && selectedServiceData.gallery.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedServiceData.gallery.map((image, idx) => (
                        <motion.div
                          key={idx}
                          className="relative h-40 rounded-xl overflow-hidden bg-gray-100 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={image}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors text-center block"
                  >
                    Book Now
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border-2 border-gray-300 text-gray-900 font-semibold py-4 rounded-xl hover:border-gray-400 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Sparkles, Palette, Music, Camera, Heart, Lightbulb, Users, Zap } from 'lucide-react';

// // Butterfly Animation Component
// function ButterflyAnimation() {
//   const [butterflies, setButterflies] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     if (isMobile) return;

//     const createButterfly = () => {
//       const id = Math.random();
//       const startY = Math.random() * 60 + 20;
//       const duration = 6 + Math.random() * 2;

//       setButterflies((prev) => [...prev, { id, startY, duration }]);

//       setTimeout(() => {
//         setButterflies((prev) => prev.filter((b) => b.id !== id));
//       }, duration * 1000);
//     };

//     const interval = setInterval(createButterfly, 2500);
//     createButterfly();

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   return (
//     <div className="fixed top-0 right-0 w-full h-screen pointer-events-none overflow-hidden z-10">
//       {butterflies.map((butterfly) => (
//         <ButterflyElement
//           key={butterfly.id}
//           startY={butterfly.startY}
//           duration={butterfly.duration}
//         />
//       ))}
//     </div>
//   );
// }

// function ButterflyElement({ startY, duration }) {
//   return (
//     <motion.div
//       initial={{ x: '100vw', y: `${startY}vh`, opacity: 0.8 }}
//       animate={{
//         x: '-10vw',
//         y: `${startY - 15}vh`,
//         opacity: 0,
//       }}
//       transition={{
//         duration,
//         ease: 'easeInOut',
//       }}
//       className="absolute"
//     >
//       <svg
//         width="32"
//         height="32"
//         viewBox="0 0 32 32"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="drop-shadow-lg"
//       >
//         <motion.path
//           d="M16 8C12 8 10 12 10 16C10 20 12 24 16 24"
//           stroke="#D9A400"
//           strokeWidth="2"
//           strokeLinecap="round"
//           animate={{ d: ['M16 8C12 8 10 12 10 16C10 20 12 24 16 24', 'M16 8C12 10 9 12 9 16C9 20 12 22 16 24'] }}
//           transition={{ duration: 0.6, repeat: Infinity }}
//         />
//         <motion.path
//           d="M16 8C20 8 22 12 22 16C22 20 20 24 16 24"
//           stroke="#D9A400"
//           strokeWidth="2"
//           strokeLinecap="round"
//           animate={{ d: ['M16 8C20 8 22 12 22 16C22 20 20 24 16 24', 'M16 8C20 10 23 12 23 16C23 20 20 22 16 24'] }}
//           transition={{ duration: 0.6, repeat: Infinity }}
//         />
//         <circle cx="16" cy="16" r="2" fill="#D9A400" />
//       </svg>

//       <motion.div
//         className="absolute -left-8 top-0 w-2 h-2 bg-brand-gold rounded-full blur-sm"
//         animate={{
//           opacity: [0.8, 0],
//           scale: [1, 0],
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatDelay: 0.2,
//         }}
//       />
//       <motion.div
//         className="absolute -left-4 top-2 w-1.5 h-1.5 bg-brand-gold/60 rounded-full blur-sm"
//         animate={{
//           opacity: [0.6, 0],
//           scale: [1, 0],
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatDelay: 0.4,
//         }}
//       />
//       <motion.div
//         className="absolute -left-2 -top-2 w-1 h-1 bg-brand-gold/40 rounded-full blur-sm"
//         animate={{
//           opacity: [0.4, 0],
//           scale: [1, 0],
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatDelay: 0.6,
//         }}
//       />
//     </motion.div>
//   );
// }

// // Enhanced Service Card Component
// function ServiceCard({ icon: Icon, title, description }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, y: -8 }}
//       whileTap={{ scale: 0.98 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//       className="group relative h-full"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

//       <div className="relative p-8 sm:p-6 md:p-8 bg-white rounded-xl border-2 border-brand-soft group-hover:border-brand-gold transition-all duration-300 shadow-md group-hover:shadow-glow-lg h-full flex flex-col">
//         <motion.div
//           whileHover={{ rotate: 6, scale: 1.1 }}
//           transition={{ type: 'spring', stiffness: 400, damping: 25 }}
//           className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 rounded-lg mb-6 group-hover:from-brand-gold/25 group-hover:to-brand-gold/10 transition-all duration-300 border border-brand-gold/20 group-hover:border-brand-gold/40"
//         >
//           <Icon className="w-8 h-8 text-brand-gold group-hover:text-brand-dark transition-colors duration-300" />
//         </motion.div>

//         <motion.h3
//           initial={{ opacity: 0.9 }}
//           whileHover={{ opacity: 1 }}
//           className="text-xl sm:text-lg md:text-xl font-heading font-semibold text-brand-dark mb-3 group-hover:text-brand-gold transition-colors duration-300 line-clamp-2"
//         >
//           {title}
//         </motion.h3>

//         <p className="text-brand-ink text-sm leading-relaxed flex-grow line-clamp-3 group-hover:text-brand-dark transition-colors duration-300">
//           {description}
//         </p>

//         <motion.div
//           initial={{ width: 0 }}
//           whileHover={{ width: '100%' }}
//           transition={{ duration: 0.3 }}
//           className="h-1 bg-gradient-to-r from-brand-gold to-brand-gold/30 rounded-full mt-6"
//         />
//       </div>
//     </motion.div>
//   );
// }

// // Main Services Page
// export default function Services() {
//   const services = [
//     {
//       icon: Sparkles,
//       title: 'Decoration',
//       description: 'Transform your venue with stunning decorations that match your vision and create an unforgettable atmosphere.',
//     },
//     {
//       icon: Palette,
//       title: 'Theming',
//       description: 'Custom themes designed to create the perfect atmosphere and bring your event concept to life beautifully.',
//     },
//     {
//       icon: Music,
//       title: 'Entertainment',
//       description: 'Professional entertainment services to keep your guests engaged and create memorable moments throughout.',
//     },
//     {
//       icon: Camera,
//       title: 'Photography',
//       description: 'Capture every precious moment with our professional photography team and cinematic videography.',
//     },
//     {
//       icon: Heart,
//       title: 'Event Planning',
//       description: 'Complete event planning from concept to execution, ensuring every detail is perfect for your celebration.',
//     },
//     {
//       icon: Lightbulb,
//       title: 'Creative Design',
//       description: 'Innovative design solutions that transform spaces and create immersive experiences for your guests.',
//     },
//     {
//       icon: Users,
//       title: 'Coordination',
//       description: 'Professional coordination and management to ensure seamless execution of your event from start to finish.',
//     },
//     {
//       icon: Zap,
//       title: 'Special Effects',
//       description: 'Stunning visual effects including lighting, projections, and special elements to elevate your event.',
//     },
//   ];

//   return (
//     <>
//       {/* Butterfly Animation */}
//       <ButterflyAnimation />

//       {/* Hero Section */}
//       <section className="relative min-h-screen bg-gradient-to-br from-brand-neutral via-white to-brand-soft pt-32 pb-20 overflow-hidden">
//         {/* Decorative Background Elements */}
//         <div className="absolute top-20 right-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="inline-block mb-6"
//             >
//               <span className="px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold font-semibold text-sm">
//                 ✨ Our Services
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-brand-dark mb-6 leading-tight"
//             >
//               Comprehensive Event <span className="text-brand-gold">Solutions</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-lg sm:text-xl text-brand-ink max-w-3xl mx-auto leading-relaxed"
//             >
//               We offer complete event management services to transform your vision into reality. From decoration to entertainment, we handle every detail with precision and creativity.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid Section */}
//       <section className="py-20 bg-brand-neutral relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-48" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-heading font-bold text-brand-dark mb-4">
//               What We Offer
//             </h2>
//             <p className="text-lg text-brand-ink max-w-2xl mx-auto">
//               Explore our full range of professional event services designed to make your celebration unforgettable.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <ServiceCard {...service} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-brand-dark text-brand-neutral relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -ml-48" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-heading font-bold text-brand-neutral mb-4">
//               Why Choose Us
//             </h2>
//             <p className="text-lg text-brand-soft max-w-2xl mx-auto">
//               Experience excellence with our dedicated team of professionals.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Expert Team',
//                 description: 'Over 8 years of experience with a dedicated team of creative professionals.',
//               },
//               {
//                 title: 'Attention to Detail',
//                 description: 'Every element is carefully planned and executed to perfection.',
//               },
//               {
//                 title: 'Custom Solutions',
//                 description: 'Tailored services designed specifically for your unique event needs.',
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <div className="p-8 rounded-xl bg-brand-dark border border-brand-gold/20 group-hover:border-brand-gold/50 transition-all duration-300 group-hover:bg-brand-dark/80">
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-all duration-300"
//                   >
//                     <div className="w-6 h-6 bg-brand-gold rounded-full" />
//                   </motion.div>
//                   <h3 className="text-xl font-heading font-semibold text-brand-neutral mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-brand-soft leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 bg-brand-neutral relative overflow-hidden">
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -mr-48 -mb-48" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-heading font-bold text-brand-dark mb-4">
//               Service Packages
//             </h2>
//             <p className="text-lg text-brand-ink max-w-2xl mx-auto">
//               Flexible packages tailored to your budget and requirements.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Starter',
//                 price: 'Custom',
//                 features: ['Decoration', 'Basic Theming', 'Photography', 'Event Coordination'],
//               },
//               {
//                 name: 'Professional',
//                 price: 'Custom',
//                 features: ['Full Decoration', 'Custom Theming', 'Photography & Videography', 'Entertainment', 'Complete Coordination'],
//                 highlighted: true,
//               },
//               {
//                 name: 'Premium',
//                 price: 'Custom',
//                 features: ['Luxury Decoration', 'Bespoke Design', 'Professional Photography & Video', 'Entertainment Package', 'Full Event Management', 'Special Effects'],
//               },
//             ].map((pkg, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className={`rounded-xl p-8 transition-all duration-300 ${
//                   pkg.highlighted
//                     ? 'bg-brand-gold text-brand-dark shadow-glow-lg scale-105'
//                     : 'bg-white border-2 border-brand-soft hover:border-brand-gold'
//                 }`}
//               >
//                 <h3 className={`text-2xl font-heading font-bold mb-2 ${pkg.highlighted ? 'text-brand-dark' : 'text-brand-dark'}`}>
//                   {pkg.name}
//                 </h3>
//                 <p className={`text-lg font-semibold mb-6 ${pkg.highlighted ? 'text-brand-dark/80' : 'text-brand-gold'}`}>
//                   {pkg.price}
//                 </p>
//                 <ul className="space-y-3 mb-8">
//                   {pkg.features.map((feature, i) => (
//                     <li key={i} className={`flex items-center ${pkg.highlighted ? 'text-brand-dark' : 'text-brand-ink'}`}>
//                       <span className={`w-2 h-2 rounded-full mr-3 ${pkg.highlighted ? 'bg-brand-dark' : 'bg-brand-gold'}`} />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//                     pkg.highlighted
//                       ? 'bg-brand-dark text-brand-gold hover:bg-brand-dark/90'
//                       : 'bg-brand-gold text-brand-dark hover:bg-brand-dark hover:text-brand-gold'
//                   }`}
//                 >
//                   Get Quote
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-brand-dark text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent opacity-30" />

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto px-4 relative z-10"
//         >
//           <h2 className="text-4xl sm:text-5xl font-heading font-bold text-brand-neutral mb-6">
//             Ready to Plan Your Event?
//           </h2>
//           <p className="text-xl text-brand-soft mb-8">
//             Get in touch with our team today and let's create something extraordinary together.
//           </p>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link
//               href="/contact"
//               className="inline-block px-10 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-brand-neutral transition-all duration-300 transform text-lg shadow-glow-lg"
//             >
//               Get a Free Quote
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>
//     </>
//   );
// }
