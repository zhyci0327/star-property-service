import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#14181D",       // Deep Slate / Charcoal
          charcoal: "#1F2630",   // Secondary dark
          slate: "#334155",      // Body dark
          muted: "#64748B",      // Subtitle gray
          sand: "#D4AF37",       // Refined champagne gold/sand accent
          bronze: "#C59B63",     // Warm architectural bronze
          warmCream: "#FBFBF9",  // Crisp Scandinavian warm off-white canvas
          neutralLight: "#F3F2EE", // Subtle contrast background
          border: "#E5E3DC",     // Architectural thin borders
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 24, 29, 0.05)',
        'luxury': '0 20px 40px -15px rgba(20, 24, 29, 0.08)',
        'elevated': '0 25px 50px -12px rgba(20, 24, 29, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
