import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navyBlue: "#18212A",
        slateBlue: "#334155",
        slateLightBlue: "#6B9ACB",
        devilRed: "#D61C2C",
        cloudyGray: "#F8F8F8",
        WayneBlack: "#151515",
        SunsetOrange: "#F7A21B",
        whiteBaby: "#fcfcfc",
        darkGray: "#373737",
        bottomGray: "#4C4C4C",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        "inner-before": "inset 0 0 70px rgba(0, 0, 0, 0.3)",
        "inner-after": "inset 0 0 70px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-motion")],
} satisfies Config;

export default config;
