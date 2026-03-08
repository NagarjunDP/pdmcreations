import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [

    // 💒 Wedding Stage
  { src: '/IMG-20251230-WA0002.jpg', alt: 'Wedding Stage Decoration', category: 'wedding' },
  { src: '/wed3.jpg', alt: 'Wedding Mandap Decoration', category: 'wedding' },
  { src: '/wed2.jpg', alt: 'Traditional Wedding Setup', category: 'wedding' },
  { src: '/wed4.jpg', alt: 'Grand Wedding Decoration', category: 'wedding' },
 


    // 💒 Naming Board
  { src: '/name1.jpeg', alt: 'Wedding welcome name board decoration', category: 'board' },
  { src: '/name2.jpeg', alt: 'Floral wedding name board setup', category: 'board' },
  { src: '/name3.jpeg', alt: 'Traditional wedding name display board', category: 'board' },
  { src: '/name4.jpeg', alt: 'Customized wedding name board decoration', category: 'board' },
  


    // 💒 Mantapa Decorations
  { src: '/mantapaa2.jpeg', alt: 'Elegant wedding mantapa with marigold and rose flower decor', category: 'mantapa' },
  { src: '/mantapaa1.jpeg', alt: 'Traditional South Indian wedding mantapa with floral pillars', category: 'mantapa' },
  { src: '/man1.jpg', alt: 'Wedding mantapa decoration with flowers', category: 'mantapa' },
  { src: '/man2.jpg', alt: 'Traditional wedding mantapa setup', category: 'mantapa' },
  { src: '/man3.jpg', alt: 'South Indian wedding mantapa design', category: 'mantapa' },
  { src: '/man4.jpg', alt: 'Grand mantapa decoration for wedding', category: 'mantapa' },
  { src: '/man5.jpg', alt: 'Floral themed wedding mantapa decoration', category: 'mantapa' },


    // 🌼 Haldi Decorations
  { src: '/haltop.jpeg', alt: 'Haldi Decoration', category: 'haldi' },
  { src: '/hal1.jpg', alt: 'Haldi Decoration', category: 'haldi' },
  { src: '/hal2.jpg', alt: 'Traditional Haldi Setup', category: 'haldi' },
  { src: '/hal3.jpg', alt: 'Haldi Backdrop Decoration', category: 'haldi' },
  { src: '/hal4.jpg', alt: 'Haldi Stage Decoration', category: 'haldi' },
  { src: '/hal5.jpg', alt: 'Outdoor Haldi Decoration', category: 'haldi' },


     
  // 💍 Engagement Stage
  { src: '/engage1.png', alt: 'Engagement Stage Decoration', category: 'engagement' },
  { src: '/engage2.jpg', alt: 'Engagement Floral Setup', category: 'engagement' },
  { src: '/engage3.jpg', alt: 'Ring Ceremony Decoration', category: 'engagement' },
  { src: '/engage4.jpg', alt: 'Engagement Backdrop', category: 'engagement' },
  { src: '/engage5.jpg', alt: 'Engagement Event Setup', category: 'engagement' },


     // 🌸 Entry Decorations
  { src: '/entry5.jpeg', alt: 'Flower entrance decoration for wedding', category: 'entry' },
  { src: '/entry2.jpeg', alt: 'Wedding stage entry flower decoration', category: 'entry' },
  { src: '/entry3.jpeg', alt: 'Floral entrance decoration for events', category: 'entry' },
  { src: '/entry4.jpeg', alt: 'Elegant floral theme entry decoration', category: 'entry' },
  { src: '/entry1.jpeg', alt: 'Premium wedding entrance flower decor', category: 'entry' },
  { src: '/entry6.jpeg', alt: 'Luxury floral entry decoration design', category: 'entry' },




     // ⛺ Chapra Decorations
  { src: '/chap1.jpg', alt: 'Chapra Decoration', category: 'chapra' },
  { src: '/chap2.jpg', alt: 'Traditional Chapra Setup', category: 'chapra' },
  { src: '/chap3.jpg', alt: 'Chapra Seating Decoration', category: 'chapra' },
  { src: '/chap4.jpg', alt: 'Outdoor Chapra Decoration', category: 'chapra' },
  { src: '/chap5.jpg', alt: 'Chapra Event Setup', category: 'chapra' },



    
     // ⛺ Home Ceremony
  { src: '/home1.jpg', alt: 'Home wedding ceremony decoration', category: 'home' },
  { src: '/home2.jpg', alt: 'Traditional home ceremony setup', category: 'home' },
  { src: '/home3.jpg', alt: 'Home function seating decoration', category: 'home' },
  { src: '/home4.png', alt: 'Simple home ceremony decoration design', category: 'home' },
  { src: '/home5.png', alt: 'Home wedding event decoration', category: 'home' },
  { src: '/home6.png', alt: 'Festive home ceremony decoration setup', category: 'home' },

   


   // 🔤 Naming Ceremony
  { src: '/baby1.jpg', alt: 'Naming Ceremony Setup', category: 'naming' },
  { src: '/baby2.jpg', alt: 'Traditional Naming Ceremony', category: 'naming' },
  { src: '/baby3.png', alt: 'Naming Ceremony Stage', category: 'naming' },
  { src: '/baby4.png', alt: 'Naming Ceremony Stage', category: 'naming' },
  { src: '/baby5.JPG', alt: 'Naming Ceremony Stage', category: 'naming' },

 
];
  

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'board', label: 'Naming Board' },
    { id: 'mantapa', label: 'Mantapa Decoration' },
    { id: 'haldi', label: 'Haldi' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'entry', label: 'Entry Decoration' },
    { id: 'chapra', label: 'Chapra Decoration' },
    //{ id: 'home', label: 'House Ceremony' },
    { id: 'naming', label: 'Naming Ceremony' },
    
    
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
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
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
