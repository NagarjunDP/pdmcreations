import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const WHATSAPP_NUMBER = "+918884076143";
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // CHANGE THIS!

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // === 1. SEND TO WHATSAPP ===
    const message = `
*New Event Inquiry* 

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate || 'Not specified'}
*Message:* 
${formData.message}

---
Sent from PDM Creations Website
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');

    // === 2. SEND TO EMAIL (via Formspree) ===
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          'event type': formData.eventType,
          'event date': formData.eventDate,
          message: formData.message,
        }),
      });

      if (response.ok) {
        console.log("Email backup sent!");
      } else {
        console.error("Email backup failed");
      }
    } catch (err) {
      console.error("Error sending email backup:", err);
    }

    // === 3. SHOW SUCCESS ===
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', value: '+91 88840 76143', link: 'tel:+918884076143' },
    { icon: Mail, title: 'Email', value: 'pdplatedecors@gmail.com', link: 'mailto:pdplatedecors@gmail.com' },
    { icon: MapPin, title: 'Location', value: 'Bengaluru', link: 'https://maps.app.goo.gl/2avTFHTyJE7A3pW69' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-white mb-4">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-pink-200">
            Get in touch with us to discuss your event
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-pink-500 text-center group"
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg mb-6 mx-auto group-hover:from-pink-500/30 group-hover:to-purple-600/30 transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <info.icon className="w-8 h-8 text-pink-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-slate-700 text-lg font-medium">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-xl shadow-lg p-8 md:p-12 border-2 border-slate-200"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Send us a Message</h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-4"
              >
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-green-900">Message Sent!</h3>
                  <p className="text-green-800">Check WhatsApp + Email backup sent.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Phone */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors duration-300"
                  placeholder="+91 XXXXX XXXXX"
                />
              </motion.div>

              {/* Event Type */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Event Type *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors duration-300"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="engagement">Engagement</option>
                  <option value="naming">Naming Ceremony</option>
                  <option value="half">Halfsaree</option>
                  <option value="haldi">Haldi, Bangle Ceremony</option>
                  <option value="house">House Warming</option>
                  <option value="chapra">Chapra</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Events</option>
                  <option value="catering">Catering Services</option>
                  <option value="dance">DJ, Chenda Melam Dance Team</option>
                  <option value="rentals">Rentals</option>
                  <option value="other">other</option>
                </select>
              </motion.div>

              {/* Event Date */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors duration-300"
                />
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.25 }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your event..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send via WhatsApp
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-white mb-6">
            Ready to Plan Your Event?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-xl text-pink-200 mb-8">
            Call us directly or fill out the form above. We're here to help!
          </motion.p>
          <motion.a
            href="tel:+918884076143"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 shadow-lg text-lg"
          >
            <Phone size={24} />
            Call Now: +91 88840 76143
          </motion.a>
        </div>
      </section>
    </div>
  );
}
