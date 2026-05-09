/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#1a0a2e',
          secondary: '#2d1454',
          tertiary: '#3d1f6b',
        },
        surface: {
          DEFAULT: '#251135',
          elevated: '#3d1f6b',
        },
        primary: {
          DEFAULT: '#8B5CF6',
          light: '#a78bfa',
          lighter: '#c4b5fd',
          dark: '#7c3aed',
        },
        secondary: {
          DEFAULT: '#ec4899',
          light: '#f472b6',
          dark: '#be185d',
        },
        'text-primary': '#ffffff',
        'text-secondary': '#d1d5db',
        'text-muted': '#9ca3af',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        border: '#3d1f6b',
      },
      fontFamily: {
        display: ['Merriweather_400Regular_Italic'],
        'display-bold': ['Merriweather_700Bold'],
        sans: ['System'],
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
};
