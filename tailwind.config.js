/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#059669',
          600: '#047857',
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22',
        },
        secondary: {
          DEFAULT: '#0891b2',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0891b2',
          600: '#0e7490',
          700: '#0f766e',
          800: '#155e75',
          900: '#164e63',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        background: '#fafafa',
        surface: '#ffffff',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}