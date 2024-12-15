/** @type {import('tailwindcss').Config} */
export default {
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
