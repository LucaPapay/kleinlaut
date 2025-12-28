/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#f1e510',
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Arial Narrow"', 'sans-serif'],
        body: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
      },
      boxShadow: {
        'soft-glow': '0 12px 40px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
