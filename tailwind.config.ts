import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: '#121212',
        darkpurple: '#1E062F',
        midpurple: '#7A1CAC',
        lightpurple: '#EBD3F8',
        sand: '#D8E9A8'
      },
    },
  },
  plugins: [typography],
  darkMode: 'class'
};


export default config;
