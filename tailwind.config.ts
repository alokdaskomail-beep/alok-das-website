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
        background: "hsl(var(--background-hsl))",
        primary: "hsl(var(--primary-hsl))",
        accent: "hsl(var(--accent-hsl))",
        foreground: "hsl(var(--foreground-hsl))",
      },
      fontFamily: {
        sans: ["var(--font-pt-sans)"],
        serif: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [],
};
export default config;