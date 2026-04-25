/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdf8f0',
          100: '#faefd8',
          200: '#f5deb0',
        },
        caramel: {
          400: '#d4923a',
          500: '#b87333',
          600: '#9a5e28',
        },
        espresso: {
          800: '#3b2010',
          900: '#1e0f05',
        },
        sand: {
          300: '#e8d5b0',
          400: '#d4ba8a',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
