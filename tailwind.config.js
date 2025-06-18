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
        primary: '#1a365d',
        'primary-dark': '#142b4c',
        secondary: '#2a4365',
        accent: '#ed8936',
        'accent-dark': '#dd6b20',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        reemkufi: ['Reem Kufi', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        sans: ['Tajawal', 'sans-serif'],
        serif: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
} 