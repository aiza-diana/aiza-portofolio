/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03050a',
          900: '#070b14',
          800: '#0d1424',
          700: '#152038',
        },
        accent: {
          DEFAULT: '#2c67ed',
          light: '#5b8ef5',
          dark: '#1d4ed8',
          glow: 'rgba(44, 103, 237, 0.45)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'blue-glow': '0 0 25px -3px rgba(44, 103, 237, 0.55), 0 0 10px -2px rgba(44, 103, 237, 0.35)',
        'blue-glow-lg': '0 0 45px -5px rgba(44, 103, 237, 0.65), 0 0 20px -4px rgba(44, 103, 237, 0.45)',
        'card-glow': '0 8px 32px 0 rgba(44, 103, 237, 0.14)',
      },
    },
  },
  plugins: [],
};
