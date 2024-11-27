/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Paths to all of your components
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-commitmono)"],
      },
      colors: {
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
          1000: "var(--color-gray-1000)",
          1100: "var(--color-gray-1100)",
          1200: "var(--color-gray-1200)",
        },
        brand: "var(--brand-color)",
      },
      boxShadow: {
        "ds-inset-border": "var(--ds-inset-border)",
        "ds-inset-border-light": "var(--ds-inset-border-light)",
      },
    },
  },
  plugins: [],
};
