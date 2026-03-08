// // src/components/Loader.tsx
// import { ClipLoader } from 'react-spinners';
// import { CSSProperties } from 'react';

// interface LoaderProps {
//   /** Show the loader */
//   loading?: boolean;
//   /** Size in px */
//   size?: number;
//   /** Custom color (any CSS color) */
//   color?: string;
//   /** Optional extra CSS */
//   className?: string;
// }

// const override: CSSProperties = {
//   display: 'block',
//   margin: '0 auto',
// };

// export const Loader = ({
//   loading = true,
//   size = 40,
//   color = '#3b82f6',   // Tailwind blue-500
//   className = '',
// }: LoaderProps) => {
//   if (!loading) return null;

//   return (
//     <div
//       className={`flex items-center justify-center w-full h-full ${className}`}
//       aria-live="polite"
//       aria-label="Loading..."
//     >
//       <ClipLoader
//         color={color}
//         loading={loading}
//         size={size}
//         cssOverride={override}
//       />
//     </div>
//   );
// };
// src/components/Loader.tsx
import { FC } from "react";

type LoaderType =
  | "pulse"      // Pulsating circle
  | "dots"       // 3 bouncing dots
  | "ring"       // Rotating ring
  | "orbit"      // Orbiting dots
  | "cube"       // Flipping cube
  | "bars"       // Audio-wave bars
  | "spinner";   // Classic spinner (fallback)

interface LoaderProps {
  /** Choose a cool spinner */
  type?: LoaderType;
  /** Size in `rem` (default 2rem) */
  size?: number;
  /** Primary color (Tailwind class or hex) */
  color?: string;
  /** Extra class */
  className?: string;
}

const Loader: FC<LoaderProps> = ({
  type = "spinner",
  size = 2,
  color = "text-blue-600 dark:text-blue-400",
  className = "",
}) => {
  const s = `${size * 4}rem`; // Tailwind uses rem, 1rem = 16px → 2rem = 32px

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label="Loading"
    >
      {/* ────── PULSE ────── */}
      {type === "pulse" && (
        <div
          className={`animate-ping rounded-full ${color}`}
          style={{ width: s, height: s }}
        />
      )}

      {/* ────── DOTS (3 bouncing) ────── */}
      {type === "dots" && (
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`animate-bounce rounded-full ${color}`}
              style={{
                width: `calc(${s} / 3)`,
                height: `calc(${s} / 3)`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* ────── RING ────── */}
      {type === "ring" && (
        <div
          className={`animate-spin rounded-full border-4 border-transparent ${color.replace(
            "text-",
            "border-t-"
          )}`}
          style={{
            width: s,
            height: s,
            borderTopColor: "currentColor",
          }}
        />
      )}

      {/* ────── ORBIT ────── */}
      {type === "orbit" && (
        <div className="relative" style={{ width: s, height: s }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`absolute inset-0 animate-spin rounded-full ${color}`}
              style={{
                width: "100%",
                height: "100%",
                border: "2px solid transparent",
                borderTopColor: "currentColor",
                animationDelay: `${i * 0.2}s`,
                transform: `rotate(${i * 120}deg)`,
              }}
            />
          ))}
        </div>
      )}

      {/* ────── CUBE FLIP ────── */}
      {type === "cube" && (
        <div
          className={`animate-spin ${color}`}
          style={{
            width: s,
            height: s,
            border: "4px solid transparent",
            borderTopColor: "currentColor",
            borderRightColor: "currentColor",
            transformStyle: "preserve-3d",
            animation: "cubeFlip 1.5s infinite linear",
          }}
        />
      )}

      {/* ────── BARS (audio wave) ────── */}
      {type === "bars" && (
        <div className="flex items-end space-x-1 h-full">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`animate-wave rounded-full ${color}`}
              style={{
                width: `calc(${s} / 6)`,
                height: `${Math.random() * 100 + 50}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* ────── CLASSIC SPINNER (fallback) ────── */}
      {type === "spinner" && (
        <svg
          className={`animate-spin ${color}`}
          style={{ width: s, height: s }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
    </div>
  );
};

export default Loader;