/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      custom: {
        orange: '#FF7E1C',
        red: '#F83457',
        violet: '#ad76da',
        black: {
          600: '#312F2D',
          800: '#171513',
        },
        gray: {
          100: '#f3f3f3',
        },
        white: '#ffffff',
      }
    },
    width: {
      '90': '90%',
      '95': '95%',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
    screens: {
      'tn': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
    }
  },
  plugins: [],
}
