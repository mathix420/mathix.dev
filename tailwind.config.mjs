import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    typography,
    forms,
    aspectRatio,
    scrollbarHide,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif", "\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\"", "\"Noto Color Emoji\""],
      },
      colors: {
        crimson: "#DC143C",
        charcoal: "#0d0d0d",
        accent: "#00c9ff",
      },
      spacing: {
        "kb-height": "env(keyboard-inset-height, 0)",
        "kb-width": "env(keyboard-inset-width, 0)",
      },
    },
  },
};
