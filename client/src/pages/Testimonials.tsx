'use client';

import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

export default function Testimonials() {
  // Map gallery images to real testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      event: "Baby Shower",
      quote: "The balloon arch and pastel theme were absolutely perfect! Everyone loved it.",
      image: "/event05.webp",
      rating: 5
    },
    {
      name: "Rahul & Sneha",
      event: "Engagement",
      quote: "Stunning stage and lighting! Made our special day unforgettable.",
      image: "/event18.webp",
      rating: 5
    },
    {
      name: "Ananya Patel",
      event: "1st Birthday Party",
      quote: "The custom unicorn theme was a dream come true for my daughter!",
      image: "/event12.webp",
      rating: 5
    },
    {
      name: "Vikram Singh",
      event: "Haldi Ceremony",
      quote: "Beautiful yellow floral setup — exactly what we wanted!",
      image: "/event11.jpg",
      rating: 5
    },
    {
      name: "Meera Desai",
      event: "Naming Ceremony",
      quote: "Elegant and traditional decor. Highly recommend!",
      image: "/event02.webp",
      rating: 5
    },
    {
      name: "Karan Malhotra",
      event: "50th Birthday Surprise",
      quote: "The balloon ceiling and gold theme blew everyone away!",
      image: "/event14.webp",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="text-center pt-32 md:pt-40 lg:pt-48 mb-16 max-w-5xl mx-auto px-4"
>
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
    Loved by Our Clients
  </h2>
  <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
    Real stories from real celebrations
  </p>
</motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-pink-400 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.event}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-bold">{testimonial.event}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>

              {/* Decorative Sparkle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-2 right-2 text-pink-400 opacity-20"
              >
                <Sparkles size={24} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Sparkles size={20} />
            Be Our Next Happy Client
          </a>
        </motion.div>
      </div>
    </section>
  );
}


