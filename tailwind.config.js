/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        line: "var(--line)",
        dark: "var(--dark)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Instrument Serif", "serif"],
      },
      animation: { "sheet-in": "sheet-in .28s ease-out" },
      keyframes: {
        "sheet-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
