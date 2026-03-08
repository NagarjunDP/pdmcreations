import { motion } from "framer-motion";
import { Instagram, Facebook, PhoneCallIcon, Phone, Mail, MapPin } from "lucide-react";
import { MapView } from "../components/Map";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/pdmcreations?igsh=cmo5NHNzdThkdng5", label: "Instagram" },

    { icon: PhoneCallIcon, href: "tel:+918884076143", label: "Call" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-12 pb-10 md:pt-16 md:pb-12 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Top Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14 text-center md:text-left"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <motion.div whileHover={{ rotate: 8, scale: 1.1 }}>
                <div className="h-10 w-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-pink-500/20">
                  P
                </div>
              </motion.div>
              <span className="font-bold text-lg text-pink-400">
                PDM Creations
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              PDM Creations specializes in elegant flower decorations for
              weddings, engagements, haldi functions, chapra setups, and all
              special occasions. We bring beauty, tradition, and perfection to
              every event.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-pink-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 4 }}>
                  <a
                    className="hover:text-pink-400 transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-pink-400">Contact</h3>
            <ul className="space-y-3 text-sm w-full max-w-xs mx-auto md:mx-0">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} className="text-pink-400" />
                <a href="tel:+918884076143" className="hover:text-pink-400">
                  +91 88840 76143
                </a>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-2 break-all">
                <Mail size={16} className="text-pink-400" />
                <a
                  href="mailto:pdplatedecors@gmail.com"
                  className="hover:text-pink-400"
                >
                  pdplatedecors@gmail.com
                </a>
              </li>

              <li className="flex items-start justify-center md:justify-start gap-2">
                <MapPin size={16} className="text-pink-400 mt-0.5" />
                <a href="https://maps.app.goo.gl/2avTFHTyJE7A3pW69" target="_blank" className="hover:text-pink-400 text-center md:text-left">
                  Bangalore, Karnataka
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-400 transition-all shadow-md"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-4 text-pink-400">Location</h3>
            <div className="w-full max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <MapView className="h-56 md:h-72 w-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800/40 pt-5 md:pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-center md:justify-between text-sm text-slate-400 gap-4 text-center md:text-left">
            <p>© {currentYear} PDM Creations. All rights reserved.</p>
            <div className="flex gap-6 justify-center">
              <a href="#" className="hover:text-pink-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-400">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

