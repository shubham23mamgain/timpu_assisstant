/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'back-gray': 'rgba(156,163,175,1)',
        'back-blue': 'rgba(239,246,255,1)',
        'front-blue': 'rgba(59, 130, 246, 1)',
      },
    },
  },
  plugins: [],
};
