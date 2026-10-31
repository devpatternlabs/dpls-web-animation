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
        background: "#05070d",
        surface: "#0b101d",
        "surface-card": "rgba(16, 24, 40, 0.7)",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        brand: {
          cyan: "#06b6d4",
          teal: "#14b8a6",
          emerald: "#10b981",
          indigo: "#6366f1",
          purple: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        "scan-line": "scanline 8s linear infinite",
        "gradient-x": "gradientX 10s ease infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        gradientX: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
