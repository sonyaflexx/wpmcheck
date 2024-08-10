/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#323437',
        'main-color': '#e2b714',
        'caret-color': '#e2b714',
        'sub-color': '#7a7c80',
        'sub-alt-color': '#a0a2a5',
        'sub-bg-color': '#2c2e31',
        'text-color': '#d1d0c5',
        'error-color': '#ca4754',
        'error-extra-color': '#7e2a33',
        'colorful-error-color': '#ca4754',
        'colorful-error-extra-color': '#7e2a33',
      }
    },
  },
  plugins: [],
}

