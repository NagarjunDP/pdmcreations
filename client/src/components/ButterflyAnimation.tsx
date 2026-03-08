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
      <Butterfly top="45%" left="62%" size="text-6xl" hue={45} speed={1.3} />
      <Butterfly top="80%" left="75%" size="text-4xl" hue={280} speed={1} />
    </div>
  );
}