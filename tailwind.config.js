/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
        100: '#FFFFFF',
        200: '#F2F5F9',
        300: '#E7EAEE',
        400: '#CDD5E0',
        700: '#677489',
        900: '#111827',
        DEFAULT: '#111827'
      },
      blue: '#A3CBF0',
      pink: '#FEC8E8',
      green: '#00C28A'
    }
  },
  plugins: [],
}
