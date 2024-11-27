/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Paths to all of your components
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // Use media query to respect user's system preference
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-commitmono)", "monospace"],
      },
      colors: {
        // Backgrounds and Surfaces
        background: "var(--color-background)",
        surface: "var(--color-surface)",

        // Primary Color
        primary: "var(--color-primary)",

        // Text Colors
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          placeholder: "var(--color-placeholder)",
        },

        // Divider
        divider: "var(--color-divider)",

        // System Label Colors
        "system-label": "var(--system-label)",
        "system-secondary-label": "var(--system-secondary-label)",
        "system-tertiary-label": "var(--system-tertiary-label)",
        "system-quaternary-label": "var(--system-quaternary-label)",

        // Link Color
        link: "var(--color-link)",

        // Brand Color (if still applicable)
        brand: "var(--brand-color)",
      },
      boxShadow: {
        "ds-inset-border": "var(--ds-inset-border)",
        "ds-inset-border-light": "var(--ds-inset-border-light)",
        // Shadows
        "shadow-small": "var(--ds-shadow-small)",
        "shadow-medium": "var(--ds-shadow-medium)",

        // Borders
        "ds-border": "var(--ds-border)",
        "ds-border-light": "var(--ds-border-light)",
      },
      // Additional Customizations
      borderColor: (theme) => ({
        DEFAULT: "var(--ds-border)",
        light: "var(--ds-border-light)",
      }),
      ringColor: {
        DEFAULT: "var(--color-focus-ring)",
      },
    },
  },
  plugins: [],
};
