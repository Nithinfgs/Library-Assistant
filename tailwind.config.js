/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FBFBFA',
          100: '#F5F5F0',
          200: '#EBEBE0',
          300: '#DDDDCF',
        },
        library: {
          teal: '#2D6A4F',
          amber: '#B45309',
          navy: '#1F2933',
          crimson: '#9F1239',
          indigo: '#3730A3',
          slate: '#334E68',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
