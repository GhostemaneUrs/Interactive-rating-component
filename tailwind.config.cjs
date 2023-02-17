/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        'light-grey': {
          900: 'hsl(217, 12%, 63%)',
          500: 'hsl(217, 12%, 54%)',
        },
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      },
    },
  },
  plugins: [],
}
