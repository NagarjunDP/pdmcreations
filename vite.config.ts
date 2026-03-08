// import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
// import fs from "node:fs";
// import path from "path";
// import { defineConfig } from "vite";
// import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

// export default defineConfig({
//   plugins,
//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "client", "src"),
//       "@shared": path.resolve(import.meta.dirname, "shared"),
//       "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//     },
//   },
//   envDir: path.resolve(import.meta.dirname),
//   root: path.resolve(import.meta.dirname, "client"),
//   build: {
//     outDir: path.resolve(import.meta.dirname, "dist/public"),
//     emptyOutDir: true,
//   },
//   server: {
//     port: 3000,
//     strictPort: false, // Will find next available port if 3000 is busy
//     host: true,
//     allowedHosts: [
//       "localhost",
//       "127.0.0.1",
//     ],
//     fs: {
//       strict: true,
//       deny: ["**/.*"],
//     },
//   },
// });

// // vite.config.ts
// // vite.config.ts// vite.config.ts

// // import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
// import manus from "vite-plugin-manus-runtime";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import { defineConfig } from "vite";
// import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

// export default defineConfig({
//   plugins,
//   root: path.resolve(import.meta.dirname, "client"),

//   // ❗ Output MUST be "dist" – not "dist/public"
//   build: {
//     outDir: "../../dist",
//     emptyOutDir: true,
//   },

//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "client", "src"),
//       "@shared": path.resolve(import.meta.dirname, "shared"),
//       "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//     },
//   },

//   server: {
//     port: 3000,
//     host: true,
//   },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { resolve } from "path";

// export default defineConfig({
//   root: "client",
//   plugins: [react()],
//   server: {
//     host: true,
//     port: 5173,
//   },
//   build: {
//     outDir: "../dist",
//     emptyOutDir: true,
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   root: "client",
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "client/src"), // <-- this allows @/ imports
//     },
//   },
//   build: {
//     outDir: "../dist",
//     emptyOutDir: true, // cleans the output folder before build
//   },
//   server: {
//     host: true,
//     port: 5173,
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import path from "path";

// export default defineConfig({
//   root: "client",
//   plugins: [react(), tailwindcss()],
//   base: "./",
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "client/src"),
//       "@shared": path.resolve(__dirname, "shared"),
//       "@assets": path.resolve(__dirname, "attached_assets"),
//     },
//   },
//   build: {
//     outDir: "../dist",   // output **outside client** to match Vercel expectation
//     emptyOutDir: true,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  root: "client",
  base: "/",   // important: assets load correctly on all routes
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "../dist",  // output outside client folder for Vercel
    emptyOutDir: true,
  },
});


