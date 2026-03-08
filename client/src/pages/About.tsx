// import { motion } from 'framer-motion';
// import { Award, Heart, Zap, Sparkles, UserCheck } from 'lucide-react';

// // Demo placeholder image
// const proprietorImage = '/placeholder-founder.jpg';

// export default function About() {
//   const features = [
//     {
//       icon: Sparkles,
//       title: 'Creative & Custom Solutions',
//       description: 'We design visually appealing setups and experiences tailored to your business needs.',
//     },
//     {
//       icon: Award,
//       title: 'Professional Expertise',
//       description: 'Our team brings experience, planning, and execution together for reliable results.',
//     },
//     {
//       icon: Heart,
//       title: 'Client-Focused Approach',
//       description: 'We listen carefully, understand goals, and deliver solutions aligned with your vision.',
//     },
//     {
//       icon: Zap,
//       title: 'Fast & Reliable Execution',
//       description: 'On-time delivery, smooth coordination, and consistent quality every time.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-20">
//       {/* Header */}
//       <section className="py-16 bg-gradient-to-r from-slate-900 to-purple-900">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-bold text-white mb-4"
//           >
//             About Our Company
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-xl text-pink-200"
//           >
//             Helping businesses create strong and memorable impressions
//           </motion.p>
//         </div>
//       </section>

//       {/* Company Story */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-4xl font-bold text-slate-900 mb-6">
//                 Our Story & Experience
//               </h2>

//               <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                 <span className="font-bold text-purple-600">
//                   This is a demo business profile
//                 </span>{' '}
//                 designed to show how your company’s story could look on a
//                 professional website. It represents years of experience,
//                 structured planning, and customer-centric service.
//               </p>

//               <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                 The focus is on delivering quality services that are practical,
//                 affordable, and visually appealing — helping businesses build
//                 trust and credibility online.
//               </p>

//               <p className="text-lg text-slate-700 leading-relaxed">
//                 This layout can be customized with your real journey, numbers,
//                 services, and achievements once the project moves forward.
//               </p>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="relative h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg flex items-center justify-center"
//             >
//               <div className="text-center p-8">
//                 <h3 className="text-8xl font-extrabold text-purple-700">
//                   100+
//                 </h3>
//                 <p className="text-3xl font-semibold text-slate-800 mt-4">
//                   Projects Delivered
//                 </p>
//                 <p className="text-slate-600 mt-2">
//                   Demonstration metric for demo purposes
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Founder */}
//           <div className="mb-20 py-10">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl font-bold text-slate-900 mb-12 text-center"
//             >
//               Meet the Founder
//             </motion.h2>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start bg-slate-50 p-10 rounded-xl">
//               <motion.div className="flex justify-center">
//                 <div className="w-48 lg:w-64 aspect-[3/4] rounded-xl overflow-hidden shadow-xl border-4 border-pink-500">
//                   <img
//                     src={proprietorImage}
//                     alt="Founder"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </motion.div>

//               <motion.div className="lg:col-span-2">
//                 <div className="flex items-center mb-4">
//                   <UserCheck size={36} className="text-purple-600 mr-3" />
//                   <h3 className="text-3xl font-bold text-slate-900">
//                     Founder Name
//                   </h3>
//                 </div>

//                 <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                   This section highlights the person behind the business —
//                   showcasing leadership, experience, and commitment to quality.
//                 </p>

//                 <p className="text-lg text-slate-700 mb-4 leading-relaxed">
//                   It helps build trust by showing that the company is led by
//                   professionals who care about results and client satisfaction.
//                 </p>

//                 <p className="text-lg text-slate-700 leading-relaxed">
//                   Final content will be personalized once the website is built
//                   specifically for your business.
//                 </p>
//               </motion.div>
//             </div>
//           </div>

//           {/* Why Choose Us */}
//           <div className="mb-20">
//             <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
//               Why Choose Us
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="p-8 bg-white rounded-xl border shadow-md text-center"
//                 >
//                   <feature.icon className="w-8 h-8 text-pink-600 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-slate-700 text-sm">
//                     {feature.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* CTA */}
//           <motion.div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-12 text-center border">
//             <Heart size={60} className="text-pink-600 mx-auto mb-4" />
//             <h3 className="text-3xl font-bold text-slate-900 mb-4">
//               Ready to Build Your Website Like This?
//             </h3>
//             <p className="text-lg text-slate-700 max-w-3xl mx-auto">
//               This is a demo layout. Your real content, branding, and features
//               will be customized after confirmation.
//             </p>
//           </motion.div>
//         </div>


import { motion } from "framer-motion";
import { Award, Heart, Sparkles, MapPin, User } from "lucide-react";

// Logo Image
const logoImage = "/WhatsApp_Image_2026-03-08_at_10.45.49_AM-removebg-preview.png";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "250+ Events Completed",
      desc: "Successfully decorated functions and celebrations.",
    },
    {
      icon: Sparkles,
      title: "3+ Years Experience",
      desc: "Trusted floral decoration expertise with consistent quality.",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      desc: "Every design is crafted with care, passion, and precision.",
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900"
        >
          About PDM Creations
        </motion.h1>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Creating beautiful floral experiences for every special occasion
        </p>
      </section>

      {/* Premium Brand Mark */}
      <section className="flex justify-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="group flex flex-col items-center gap-6"
        >
          {/* Logo Icon Container */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative h-32 w-32 md:h-44 md:w-44 flex items-center justify-center p-6 bg-gradient-to-br from-pink-500/10 to-purple-600/20 rounded-3xl backdrop-blur-md border border-pink-200/30 shadow-2xl shadow-pink-500/10"
          >
            <div className="absolute inset-0 bg-white/40 rounded-3xl -z-10" />
            <img
              src={logoImage}
              alt="PDM Creations Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            />
          </motion.div>

          {/* Brand Text Stacking */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter font-serif text-slate-900 leading-none">
              PDM<span className="text-pink-600">.</span>
            </h2>
            <p className="text-sm md:text-base font-bold tracking-[0.4em] uppercase text-purple-600 mt-2">
              Creations
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Story
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <span className="font-semibold text-pink-600">
                PDM Creations
              </span>{" "}
              is a professional flower decoration service based in Bengaluru,
              specializing in weddings, events, and traditional functions.
            </p>
            <p className="text-slate-700 leading-relaxed">
              With over <b>3 years of experience</b> and{" "}
              <b>250+ successful events</b>, we are known for elegant designs,
              fresh flowers, and timely execution.
            </p>
          </motion.div>

          {/* Founder – No Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-50 rounded-xl p-8 text-center shadow-sm"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                <User className="text-pink-600 w-8 h-8" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              Pradeep
            </h3>
            <p className="text-slate-600 font-medium mb-3">
              Founder – PDM Creations
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              With years of hands-on experience in floral decoration, the
              founder leads every project with attention to detail,
              creativity, and a commitment to customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white border rounded-xl p-6 text-center shadow-sm"
            >
              <item.icon className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Based in Bengaluru
          </h3>
          <p className="text-slate-600">
            Serving Bengaluru and nearby areas with premium flower decorations
          </p>
        </div>
      </section>
    </div>
  );
}

//       </section>
//     </div>
//   );
// }
