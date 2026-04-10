/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9f9f8',   // Light cream
          100: '#f2f1ef',  // Cream
          200: '#e5e1db',  // Muted beige
          300: '#d1c8bd',  // Sand
          400: '#c1a86a',  // Muted yellow
          500: '#c1a86a',  // User requested yellow
          600: '#736153',  // Darker taupe
          700: '#4a4138',  // Very dark brown
          800: '#2b3344',  // Deep Blue/slate
          900: '#1a2333',  // Navy
          950: '#0f1626',  // Midnight blue
        },
      },
      fontFamily: {
        serif: ['"Google Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
