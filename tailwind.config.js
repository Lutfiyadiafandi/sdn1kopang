/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1240px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontSize: {
        // display1: ["64px", { lineHeight: "77.45px" }],
        // display2: ["56px", { lineHeight: "67.77px" }],
        heading1: ["60px", { lineHeight: "75.6px" }],
        heading2: ["56px", { lineHeight: "70.56px" }],
        heading3: ["48px", { lineHeight: "60.48px" }],
        heading4: ["42px", { lineHeight: "52.92px" }],
        heading5: ["36px", { lineHeight: "45.36px" }],
        heading6: ["28px", { lineHeight: "35.28px" }],
        // "heading-s": ["24px", { lineHeight: "29.05px" }],
        "type-xl": ["24px", { lineHeight: "30.24px" }],
        "type-l": ["16px", { lineHeight: "24px" }],
        "type-m": ["14px", { lineHeight: "22px" }],
        "type-s": ["12px", { lineHeight: "20px" }],
        "type-xs": ["10px", { lineHeight: "12.6px" }],
        // "type-xl": ["20px", { lineHeight: "24.2px" }],
        // "type-l": ["18px", { lineHeight: "22.2px" }],
        // "type-m": ["16px", { lineHeight: "19.36px" }],
        // "type-s": ["12px", { lineHeight: "14.52px" }],
        // "label-l": ["10px", { lineHeight: "12.1px" }],
        "label-m": ["8px", { lineHeight: "9.68px" }],
      },
      boxShadow: {
        ku: "0px 4px 8px 0px #00000033",
      },
      colors: {
        // PRIMARY
        "primary-50": "#E8FFF2",
        "primary-100": "#D6FAE6",
        "primary-200": "#AFF5D4",
        "primary-300": "#81E2BE",
        "primary-400": "#5CC5A8",
        "primary-500": "#2EA08B",
        "primary-600": "#218980",
        "primary-700": "#177273",
        "primary-800": "#0E555C",
        "primary-900": "#083F4C",
        // NEUTRAL
        "basic-50": "#FFFFFF",
        "basic-100": "#F5F5F6",
        "basic-200": "#E5E5E5",
        "basic-300": "#D4D4D4",
        "basic-400": "#A3A3A3",
        "basic-500": "#737373",
        "basic-600": "#525252",
        "basic-700": "#404040",
        "basic-800": "#262626",
        "basic-900": "#171717",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
