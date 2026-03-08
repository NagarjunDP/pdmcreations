
// 'use client';

// import React, { useMemo, useRef, useEffect } from 'react';
// import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
// import { Feather } from 'lucide-react'; // Using Feather as a minimal aesthetic replacement for Butterfly
// import { animate } from "framer-motion";

// // --- Configuration ---
// const TEXT = 'Shri Events';
// const PARTICLE_SIZE = 3; // px
// const BUTTERFLY_SIZE = 24; // px
// const TRAIL_RADIUS = 50; // px
// const SPRING_CONFIG = { stiffness: 100, damping: 10 };

// // --- Utility: Generate particle positions for text (Simplified grid-based approach) ---
// const generateTextParticles = (text: string, scale: number = 1) => {
//   const charWidth = 6 * scale;
//   const charHeight = 8 * scale;
//   const spacing = 2 * scale;
//   const particlePositions: { x: number; y: number; char: string }[] = [];
//   let currentX = 0;

//   // Simple font map (using a 5x7 grid for each character)
//   const fontMap: { [key: string]: number[][] } = {
//     'S': [[1,1,1,1,1], [1,0,0,0,0], [1,1,1,1,1], [0,0,0,0,1], [1,1,1,1,1]],
//     'h': [[1,0,0,0,0], [1,0,0,0,0], [1,1,1,1,0], [1,0,0,0,1], [1,0,0,0,1]],
//     'r': [[1,0,0,0,0], [1,0,0,0,0], [1,1,1,0,0], [1,0,0,1,0], [1,0,0,0,1]],
//     'i': [[1], [0], [1], [0], [1]],
//     ' ': [[0,0,0,0,0]],
//     'E': [[1,1,1,1,1], [1,0,0,0,0], [1,1,1,0,0], [1,0,0,0,0], [1,1,1,1,1]],
//     'v': [[1,0,0,0,1], [1,0,0,0,1], [0,1,0,1,0], [0,0,1,0,0], [0,0,0,0,0]],
//     'e': [[0,1,1,1,0], [1,0,0,0,1], [1,1,1,1,1], [1,0,0,0,0], [0,1,1,1,0]],
//     'n': [[1,0,0,0,0], [1,1,0,0,0], [1,0,1,0,0], [1,0,0,1,0], [1,0,0,0,1]],
//     't': [[1,1,1,1,1], [0,0,1,0,0], [0,0,1,0,0], [0,0,1,0,0], [0,0,1,0,0]],
//   };

//   text.split('').forEach((char) => {
//     const map = fontMap[char] || fontMap[' '];
//     const charMap = map[0].length > 1 ? map : [[1]]; // Handle 'i' and space

//     for (let row = 0; row < charMap.length; row++) {
//       for (let col = 0; col < charMap[row].length; col++) {
//         if (charMap[row][col] === 1) {
//           particlePositions.push({
//             x: currentX + col * spacing,
//             y: row * spacing,
//             char: char,
//           });
//         }
//       }
//     }
//     currentX += charMap[0].length * spacing + charWidth;
//   });

//   // Center the text
//   const totalWidth = currentX;
//   return particlePositions.map(p => ({
//     ...p,
//     x: p.x - totalWidth / 2,
//     y: p.y - (charHeight * 5) / 2, // Center vertically based on 5 rows
//   }));
// };

// // --- Particle Component ---
// const Particle: React.FC<{
//   initialX: number;
//   initialY: number;
//   butterflyX: motion.MotionValue<number>;
//   butterflyY: motion.MotionValue<number>;
// }> = ({ initialX, initialY, butterflyX, butterflyY }) => {
//   const particleX = useMotionValue(initialX);
//   const particleY = useMotionValue(initialY);

//   // Use spring for smooth return to initial position
//   const springX = useSpring(particleX, SPRING_CONFIG);
//   const springY = useSpring(particleY, SPRING_CONFIG);

//   // Calculate distance and displacement from butterfly
//   const distance = useTransform([butterflyX, butterflyY], ([bX, bY]) => {
//     const dx = bX - initialX;
//     const dy = bY - initialY;
//     return Math.sqrt(dx * dx + dy * dy);
//   });

//   const displacementX = useTransform([distance, butterflyX], ([d, bX]) => {
//     if (d < TRAIL_RADIUS) {
//       const strength = 1 - d / TRAIL_RADIUS;
//       const angle = Math.atan2(initialY - butterflyY.get(), initialX - bX);
//       return initialX + Math.cos(angle) * strength * 10; // Push away slightly
//     }
//     return initialX;
//   });

//   const displacementY = useTransform([distance, butterflyY], ([d, bY]) => {
//     if (d < TRAIL_RADIUS) {
//       const strength = 1 - d / TRAIL_RADIUS;
//       const angle = Math.atan2(initialY - bY, initialX - butterflyX.get());
//       return initialY + Math.sin(angle) * strength * 10; // Push away slightly
//     }
//     return initialY;
//   });

//   // Update motion values to follow the displacement
//   useEffect(() => {
//     const unsubscribeX = displacementX.on('change', (v) => particleX.set(v));
//     const unsubscribeY = displacementY.on('change', (v) => particleY.set(v));
//     return () => {
//       unsubscribeX();
//       unsubscribeY();
//     };
//   }, [displacementX, displacementY, particleX, particleY]);

//   // Opacity and scale based on distance
//   const opacity = useTransform(distance, [0, TRAIL_RADIUS * 2], [0.1, 1]);
//   const scale = useTransform(distance, [0, TRAIL_RADIUS], [0.8, 1]);

//   return (
//     <motion.div
//       style={{
//         x: springX,
//         y: springY,
//         opacity,
//         scale,
//         width: PARTICLE_SIZE,
//         height: PARTICLE_SIZE,
//         backgroundColor: 'currentColor',
//         borderRadius: '50%',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//       }}
//       className="text-pink-500 dark:text-pink-300"
//     />
//   );
// };

// // --- Butterfly Animation Component ---
// const ButterflyAnimation: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const particles = useMemo(() => generateTextParticles(TEXT, 4), []); // Increased scale for better visibility

//   const butterflyX = useMotionValue(0);
//   const butterflyY = useMotionValue(0);

//   // Animate the butterfly in a figure-eight pattern
//   useEffect(() => {
//     const animateButterfly = () => {
//       const path = [
//         { x: 100, y: 0 },
//         { x: 0, y: 100 },
//         { x: -100, y: 0 },
//         { x: 0, y: -100 },
//         { x: 100, y: 0 },
//       ];
  
//       // Extract X and Y keyframes
//       const xValues = path.map(p => p.x);
//       const yValues = path.map(p => p.y);
  
//       // Animate X
//       const xAnim = animate(butterflyX, xValues, {
//         duration: 20,
//         ease: "linear",
//         repeat: Infinity
//       });
  
//       // Animate Y
//       const yAnim = animate(butterflyY, yValues, {
//         duration: 20,
//         ease: "linear",
//         repeat: Infinity
//       });
  
//       // Cleanup
//       return () => {
//         xAnim.stop();
//         yAnim.stop();
//       };
//     };
  
//     const cleanup = animateButterfly();
//     return cleanup;
  
//   }, [butterflyX, butterflyY]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-full flex items-center justify-center"
//       style={{ minHeight: '200px' }} // Ensure container has height
//     >
//       {/* Particles forming the text */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         {particles.map((p, index) => (
//           <Particle
//             key={index}
//             initialX={p.x}
//             initialY={p.y}
//             butterflyX={butterflyX}
//             butterflyY={butterflyY}
//           />
//         ))}
//       </div>

//       {/* The Butterfly Element */}
//       <motion.div
//         style={{
//           x: butterflyX,
//           y: butterflyY,
//           width: BUTTERFLY_SIZE,
//           height: BUTTERFLY_SIZE,
//           position: 'absolute',
//           zIndex: 10,
//         }}
//         animate={{
//           rotate: [0, 10, -10, 0], // Minimal wing flap
//           scale: [1, 1.1, 1],
//         }}
//         transition={{
//           duration: 0.5,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//         className="text-purple-600/80"
//       >
//         <Feather size={BUTTERFLY_SIZE} fill="currentColor" className="drop-shadow-md" />
//       </motion.div>
//     </div>
//   );
// };

// export default ButterflyAnimation;
// import { motion } from "framer-motion";

// const butterfly = {
//   float: {
//     y: [0, -10, 0],
//     x: [0, 5, 0],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// export default function ButterflyDecoration() {
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-visible">

//       {/* Butterfly 1 */}
//       <motion.div
//         className="absolute"
//         style={{ top: "10%", left: "20%" }}
//         variants={butterfly}
//         animate="float"
//       >
//         <span className="text-pink-400 text-2xl drop-shadow-lg">🦋</span>
//       </motion.div>

//       {/* Butterfly 2 */}
//       <motion.div
//         className="absolute"
//         style={{ top: "30%", left: "80%" }}
//         variants={butterfly}
//         animate="float"
//       >
//         <span className="text-violet-400 text-xl drop-shadow-lg">🦋</span>
//       </motion.div>

//       {/* Butterfly 3 */}
//       <motion.div
//         className="absolute"
//         style={{ top: "70%", left: "10%" }}
//         variants={butterfly}
//         animate="float"
//       >
//         <span className="text-blue-400 text-2xl drop-shadow-lg">🦋</span>
//       </motion.div>

//     </div>
//   );
// }
//crazy
// import React from "react";
// import { motion, Variants } from "framer-motion";

// // Realistic butterfly flight path using a smooth Lissajous-inspired curve + noise
// const getButterflyPath = (seed: number): Variants => {
//   const frequencyX = 0.8 + (seed % 3) * 0.3;
//   const frequencyY = 1.1 + ((seed * 7) % 4) * 0.2;
//   const amplitudeX = 120 + (seed % 5) * 30;
//   const amplitudeY = 80 + ((seed * 3) % 4) * 25;

//   return {
//     float: {
//       x: [
//         0,
//         amplitudeX * 0.7,
//         amplitudeX,
//         amplitudeX * 0.7,
//         0,
//         -amplitudeX * 0.8,
//         -amplitudeX,
//         -amplitudeX * 0.6,
//         0,
//       ],
//       y: [
//         0,
//         -amplitudeY,
//         -amplitudeY * 0.6,
//         amplitudeY * 0.4,
//         amplitudeY,
//         amplitudeY * 0.8,
//         -amplitudeY * 0.3,
//         -amplitudeY,
//         0,
//       ],
//       rotate: [0, 8, 12, 6, -6, -12, -8, 4, 0], // gentle wing tilt
//       transition: {
//         duration: 18 + (seed % 8), // 18–25s cycles
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: seed * 1.3,
//       },
//     },
//   };
// };

// // Wing flap animation (very subtle, like real butterflies)
// const wingFlap: Variants = {
//   flap: {
//     rotateY: [0, -30, 30, 0],
//     scaleX: [1, 0.9, 1.1, 1],
//     transition: {
//       duration: 0.4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// const Butterfly = ({
//   top,
//   left,
//   size,
//   hue,
//   delaySeed,
// }: {
//   top: string;
//   left: string;
//   size: string;
//   hue: number;
//   delaySeed: number;
// }) => {
//   const color = `hsl(${hue}, 80%, 60%)`;
//   const glowColor = `hsl(${hue}, 90%, 70%)`;

//   const pathVariants = React.useMemo(
//     () => getButterflyPath(delaySeed),
//     [delaySeed]
//   );

//   return (
//     <motion.div
//       className="absolute"
//       style={{ top, left }}
//       variants={pathVariants}
//       animate="float"
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ delay: delaySeed * 0.8, duration: 2 }}
//     >
//       {/* Multiple layered trails for magical glowing effect */}
//       {[1, 0.8, 0.6, 0.4].map((opacity, i) => (
//         <motion.span
//           key={i}
//           className={`absolute inset-0 ${size}`}
//           style={{
//             color: glowColor,
//             filter: `blur(${i * 6}px) brightness(1.8)`,
//             opacity: opacity * 0.5,
//           }}
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [opacity * 0.4, opacity * 0.7, opacity * 0.4],
//           }}
//           transition={{
//             duration: 2 + i * 0.5,
//             repeat: Infinity,
//             ease: "easeOut",
//           }}
//         >
//           🦋
//         </motion.span>
//       ))}

//       {/* Main butterfly with wing flap */}
//       <motion.span
//         className={`${size} block drop-shadow-2xl`}
//         style={{
//           color,
//           filter: "brightness(1.3) drop-shadow(0 0 20px currentColor)",
//           transformStyle: "preserve-3d",
//           transformOrigin: "center",
//         }}
//         variants={wingFlap}
//         animate="flap"
//       >
//         🦋
//       </motion.span>
//     </motion.div>
//   );
// };

// export default function ButterflyDecoration() {
//   const butterflies = [
//     { top: "10%", left: "15%", size: "text-4xl", hue: 300, seed: 1 }, // pink-purple
//     { top: "25%", left: "75%", size: "text-3xl", hue: 270, seed: 2 }, // magenta
//     { top: "60%", left: "10%", size: "text-4xl", hue: 200, seed: 3 }, // blue
//     { top: "40%", left: "60%", size: "text-5xl", hue: 40, seed: 4 },  // golden
//     { top: "75%", left: "70%", size: "text-3xl", hue: 320, seed: 5 }, // rose
//     { top: "15%", left: "50%", size: "text-4xl", hue: 170, seed: 6 }, // teal
//   ];

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//       {butterflies.map((b, i) => (
//         <Butterfly
//           key={i}
//           top={b.top}
//           left={b.left}
//           size={b.size}
//           hue={b.hue}
//           delaySeed={b.seed}
//         />
//       ))}
//     </div>
//   );
// }
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Butterfly = ({
  top,
  left,
  size = "text-5xl",
  hue = 290,
  speed = 1,
}: {
  top: string;
  left: string;
  size?: string;
  hue?: number;
  speed?: number;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Gentle wind drift from mouse movement (very subtle)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 80);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 60);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const windX = useTransform(mouseX, (v) => v * 0.3);
  const windY = useTransform(mouseY, (v) => v * 0.2);

  return (
    <motion.div
      className="absolute"
      style={{
        top,
        left,
        x,
        y,
      }}
      animate={{
        x: [0, 100, 80, -60, -120, -40, 60, 0],
        y: [0, -80, -120, -60, 40, 100, 60, 0],
      }}
      transition={{
        duration: 24 * speed,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 5,
      }}
    >
      <motion.div
        style={{
          x: windX,
          y: windY,
        }}
        animate={{
          rotate: [0, 15, 10, -10, -15, -8, 12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Main butterfly */}
        <motion.span
          className={`${size} block`}
          style={{
            color: `hsl(${hue}, 85%, 65%)`,
            filter: `drop-shadow(0 0 20px hsl(${hue}, 90%, 75%))`,
          }}
          animate={{
            scale: [1, 1.1, 0.95, 1.15, 1],
            rotateY: [0, -25, 25, -20, 0],
          }}
          transition={{
            duration: 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🦋
        </motion.span>

        {/* Natural glowing trail (motion trail effect) */}
        <motion.span
          className={`${size} absolute inset-0 blur-xl opacity-60`}
          style={{
            color: `hsl(${hue}, 90%, 75%)`,
          }}
          animate={{
            scale: [0.8, 1.4, 0.9],
            opacity: [0.3, 0.6, 0.2],
            x: [-20, -40, -30],
            y: [10, 20, 15],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          🦋
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default function ButterflyDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <Butterfly top="12%" left="18%" size="text-5xl" hue={310} speed={1.2} />
      <Butterfly top="28%" left="78%" size="text-4xl" hue={200} speed={0.9} />
      <Butterfly top="65%" left="12%" size="text-5xl" hue={170} speed={1.1} />
      <Butterfly top="45%" left="62%" size="text-6xl" hue={45}  speed={1.3} />
      <Butterfly top="80%" left="75%" size="text-4xl" hue={280} speed={1} />
    </div>
  );
}