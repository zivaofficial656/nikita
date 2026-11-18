/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F3',
          light: '#FDFBF7',
          dark: '#F4EFE6'
        },
        cream: {
          DEFAULT: '#F1EDE4',
          light: '#F7F4EE',
          dark: '#E7E0D3'
        },
        sage: {
          DEFAULT: '#87947A',
          light: '#A3B097',
          dark: '#6E7C62',
          muted: '#9CA791'
        },
        olive: {
          DEFAULT: '#414C3B',
          light: '#535F4C',
          dark: '#2E362A',
          deep: '#232920'
        },
        gold: {
          DEFAULT: '#C5A46D',
          light: '#D4BA8C',
          dark: '#B08E55',
          shimmer: '#E2CA9F'
        },
        charcoal: {
          DEFAULT: '#292B27',
          light: '#3D403A',
          dark: '#1C1D1A',
          muted: '#52564F'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -4px rgba(41, 43, 39, 0.05)',
        'premium': '0 12px 35px -8px rgba(65, 76, 59, 0.08), 0 4px 12px -2px rgba(41, 43, 39, 0.03)',
        'elevated': '0 20px 45px -12px rgba(41, 43, 39, 0.12)',
      }
    },
  },
  plugins: [],
}
