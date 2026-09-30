/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue-dark': '#1c3252',
        'brand-blue-mid': '#2a4a72',
        'brand-blue-light': '#e8eff7',
        'brand-red': '#c0392b',
        'brand-white': '#FFFFFF',
        'brand-gray-light': '#f2f6fc',
        'brand-text': '#1c3252',
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
