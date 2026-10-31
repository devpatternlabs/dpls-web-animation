/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070b1a",
        "deep-navy": "#070b1a",
        "navy-raise": "#0c1226",
        "navy-card": "#101833",
        "navy-line": "rgba(148, 163, 184, 0.16)",
        brand: {
          primary: "#2563eb",
          bright: "#3b82f6",
          light: "#60a5fa",
          cyan: "#06b6d4",
          slate: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563eb 0%, #3b82f6 55%, #06b6d4 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(16, 24, 51, 0.8) 0%, rgba(12, 18, 38, 0.95) 100%)",
      },
    },
  },
  plugins: [],
};
