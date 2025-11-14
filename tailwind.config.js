/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base / Background
        background: "#FFFFFF", // Page background
        surface: "#FFFFFF", // Card/panel background
        "surface-muted": "#FAFAFA", // Assistant panel background

        // Text
        text: {
          primary: "#1A1A1A", // Primary text (titles, main labels)
          secondary: "#6B7280", // Secondary text (descriptions, muted copy)
          muted: "#9CA3AF", // Tertiary/placeholder text
        },

        // Borders / Dividers
        border: {
          DEFAULT: "#E5E7EB", // Card borders (gray-200)
          input: "#D1D5DB", // Input borders (gray-300)
        },

        // Brand / Accent
        brand: {
          primary: "#2563EB", // Primary highlight (blue-600)
          nav: "#374151", // Muted nav text (gray-700)
        },

        // Market States
        yes: {
          DEFAULT: "#16A34A", // YES (green-600)
          bg: "#DCFCE7", // Light green background (green-100)
        },
        no: {
          DEFAULT: "#DC2626", // NO (red-600)
          bg: "#FEE2E2", // Light red background (red-100)
        },

        // Category Tags
        category: {
          crypto: "#4F46E5", // Crypto (indigo-600)
          politics: "#2563EB", // Politics (blue-600)
          economics: "#6B7280", // Economics (gray-500)
          stocks: "#374151", // Stocks (gray-700)
          technology: "#475569", // Technology (slate-600)
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight to avoid conflicts with Ant Design
  },
};
