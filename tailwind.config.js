/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar'

const config = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindScrollbar],
}

export default config
