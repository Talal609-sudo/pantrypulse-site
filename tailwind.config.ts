import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        panel: "#0c0c0c",
        border: "#5a5a62",
        accent: "#ec4899"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } }
      },
      animation: { fadeIn: "fadeIn .35s ease-in-out" }
    }
  },
  plugins: []
};
export default config;
