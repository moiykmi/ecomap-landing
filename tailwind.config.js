/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32',
        secondary: '#1976D2',
        success: '#388E3C',
        warning: '#F57C00',
        error: '#D32F2F',
        background: '#F5F5F5',
        surface: '#FFFFFF',
        'text-primary': '#212121',
        'text-secondary': '#757575',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}