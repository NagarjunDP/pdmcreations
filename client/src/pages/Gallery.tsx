import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    // 🔤 Naming Ceremony
    { src: '/name1.jpeg', alt: 'Naming Ceremony Setup', category: 'naming' },
    { src: '/name2.jpeg', alt: 'Traditional Naming Ceremony', category: 'naming' },
    { src: '/name3.jpeg', alt: 'Naming Ceremony Stage', category: 'naming' },
    { src: '/name4.jpeg', alt: 'Naming Ceremony Decoration', category: 'naming' },
    { src: '/name5.jpeg', alt: 'Naming Welcome Board', category: 'naming' },
    { src: '/name6.jpeg', alt: 'Naming Event Decoration', category: 'naming' },
    { src: '/name7.jpeg', alt: 'Naming Ceremony Backdrop', category: 'naming' },
    { src: '/name8.jpeg', alt: 'Naming Setup', category: 'naming' },
    { src: '/name9.jpeg', alt: 'Naming Floral Design', category: 'naming' },
    { src: '/name10.jpeg', alt: 'Naming Theme', category: 'naming' },

    // 🎀 Halfsaree
    { src: '/half1.jpeg', alt: 'Halfsaree Stage Decoration', category: 'halfsaree' },
    { src: '/half2.jpeg', alt: 'Traditional Halfsaree Setup', category: 'halfsaree' },
    { src: '/half3.jpeg', alt: 'Halfsaree Floral Decor', category: 'halfsaree' },
    { src: '/half4.jpeg', alt: 'Halfsaree Event Design', category: 'halfsaree' },
    { src: '/half5.jpeg', alt: 'Halfsaree Ceremony', category: 'halfsaree' },
    { src: '/half6.jpeg', alt: 'Halfsaree Function', category: 'halfsaree' },
    { src: '/half7.jpeg', alt: 'Halfsaree Celebration', category: 'halfsaree' },
    { src: '/half8.jpeg', alt: 'Halfsaree Photography', category: 'halfsaree' },
    { src: '/half9.jpeg', alt: 'Halfsaree Backdrop', category: 'halfsaree' },
    { src: '/half10.jpeg', alt: 'Halfsaree Setup', category: 'halfsaree' },
    { src: '/half11.jpeg', alt: 'Halfsaree Theme', category: 'halfsaree' },

    // 🤰 Baby Shower
    // { src: '/baby1.jpeg', alt: 'Baby Shower Setup', category: 'babyshower' },
    // { src: '/baby2.jpeg', alt: 'Baby Shower Decoration', category: 'babyshower' },
    { src: '/baby3.jpeg', alt: 'Baby Shower Floral Stage', category: 'babyshower' },
    { src: '/baby4.jpeg', alt: 'Baby Shower Theme', category: 'babyshower' },
    // { src: '/baby5.jpeg', alt: 'Baby Shower Stage', category: 'babyshower' },
    { src: '/baby6.jpeg', alt: 'Baby Shower Background', category: 'babyshower' },
    { src: '/baby7.jpeg', alt: 'Baby Shower Design', category: 'babyshower' },
    { src: '/baby8.jpeg', alt: 'Baby Shower Decor', category: 'babyshower' },
    { src: '/baby9.jpeg', alt: 'Baby Shower Celebration', category: 'babyshower' },
    { src: '/baby10.jpeg', alt: 'Baby Shower Event', category: 'babyshower' },

    // ✨ Plate Decoration
    { src: '/pd2.JPG', alt: 'Premium Plate Decoration Design', category: 'platedecoration' },
{ src: '/pd3.HEIC', alt: 'Premium Plate Decoration Setup', category: 'platedecoration' },
{ src: '/pd4.HEIC', alt: 'Elegant Premium Plate Decoration', category: 'platedecoration' },
{ src: '/pd5.HEIC', alt: 'Luxury Premium Plate Decoration', category: 'platedecoration' },
{ src: '/pd6.HEIC', alt: 'Wedding Premium Plate Decoration', category: 'platedecoration' },
{ src: '/pd8.HEIC', alt: 'Premium Plate Decoration Styling', category: 'platedecoration' },
    { src: '/plate7.jpeg', alt: 'Creative Plate Decoration', category: 'platedecoration' },
    { src: '/plate2.jpeg', alt: 'Engagement Plate Display', category: 'platedecoration' },
    { src: '/plate3.jpeg', alt: 'Aarti Thali Setup', category: 'platedecoration' },
    { src: '/plate4.jpeg', alt: 'Bridal Trousseau Packing', category: 'platedecoration' },
    { src: '/plate5.jpeg', alt: 'Plate Decor Design', category: 'platedecoration' },
    { src: '/plate6.jpeg', alt: 'Ceremony Plates', category: 'platedecoration' },
    { src: '/plate1.jpeg', alt: 'Plate Arrangements', category: 'platedecoration' },
    { src: '/plate8.jpeg', alt: 'Engagement Trays', category: 'platedecoration' },
    { src: '/plate9.jpeg', alt: 'Decorative Thali', category: 'platedecoration' },
    { src: '/plate10.jpeg', alt: 'Gift Packing', category: 'platedecoration' },

    // 🌼 Haldi
    { src: '/hal1.jpeg', alt: 'Haldi Stage Setup', category: 'haldi' },
    { src: '/hal2.jpeg', alt: 'Traditional Haldi Decoration', category: 'haldi' },
    { src: '/hal3.jpeg', alt: 'Haldi Floral Backdrop', category: 'haldi' },
    { src: '/hal4.jpeg', alt: 'Outdoor Haldi Design', category: 'haldi' },
    { src: '/hal5.jpeg', alt: 'Haldi Function Setup', category: 'haldi' },
    // { src: '/hal6.jpeg', alt: 'Haldi Event Decoration', category: 'haldi' },

    // 🏠 House Warming
    { src: '/house1.jpeg', alt: 'House Warming Entrance', category: 'housewarming' },
    { src: '/house2.jpeg', alt: 'House Warming Floral Decor', category: 'housewarming' },
    { src: '/house3.jpeg', alt: 'House Ceremony Setup', category: 'housewarming' },
    { src: '/house4.jpeg', alt: 'Home Decoration Design', category: 'housewarming' },
    { src: '/house6.jpeg', alt: 'House Warming Puja Decor', category: 'housewarming' },
    { src: '/house5.jpeg', alt: 'House Warming Setup', category: 'housewarming' },
    { src: '/house7.jpeg', alt: 'House Warming Exterior', category: 'housewarming' },

    // 💍 Engagement
    { src: '/eng5.jpeg', alt: 'Engagement Stage Setup', category: 'engagement' },
    { src: '/eng2.jpeg', alt: 'Engagement Floral Backdrop', category: 'engagement' },
    { src: '/eng3.jpeg', alt: 'Ring Ceremony Setup', category: 'engagement' },
    // { src: '/eng5.jpeg', alt: 'Engagement Reception Decoration', category: 'engagement' },

    // ⛺ Chapra
    { src: '/chapra1.jpeg', alt: 'Chapra Decoration', category: 'chapra' },

    // 📦 Rentals
    { src: '/rent1.jpeg', alt: 'Event Seating Rentals', category: 'rentals' },
  ];


  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'naming', label: 'Naming Ceremony' },
    { id: 'halfsaree', label: 'Halfsaree' },
    { id: 'babyshower', label: 'Baby Shower' },
    { id: 'platedecoration', label: 'Plate Decoration' },
    { id: 'haldi', label: 'Haldi' },
    { id: 'housewarming', label: 'House Warming' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'chapra', label: 'Chapra' },
    { id: 'rentals', label: 'Rentals' },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-pink-200"
          >
            Explore our stunning collection of events and celebrations
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-slate-900 border-2 border-slate-200 hover:border-pink-500'
                  }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(index)}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-72 cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Image */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
