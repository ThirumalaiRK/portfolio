/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#32245A', // Deep Purple
          light: '#463275',   // Lighter Purple
          dark: '#251A43',    // Darker Purple
          100: '#E8E6F0',     // Lightest Purple (backgrounds)
          200: '#C5C0D9',     // Light Purple (borders)
          300: '#9F97BF',     // Medium Purple (secondary text)
          400: '#786DA6',     // Dark Purple (primary text)
          500: '#32245A',     // Main Purple (buttons, headers)
        },
        // Secondary Colors
        secondary: {
          DEFAULT: '#F2B45E', // Golden Orange
          light: '#F4C17D',   // Light Orange
          dark: '#E6A44A',    // Dark Orange
          100: '#FEF6E9',     // Lightest Orange (backgrounds)
          200: '#FAECD3',     // Light Orange (borders)
          300: '#F7D9A7',     // Medium Orange (accents)
          400: '#F2B45E',     // Main Orange (CTAs)
          500: '#E6A44A',     // Dark Orange (hover states)
        },
        // Neutral Colors
        neutral: {
          DEFAULT: '#1A1A1A', // Dark Gray
          50: '#FFFFFF',      // White
          100: '#F5F5F5',     // Lightest Gray
          200: '#E5E5E5',     // Light Gray
          300: '#D4D4D4',     // Medium Gray
          400: '#A3A3A3',     // Dark Gray
          500: '#737373',     // Darker Gray
          600: '#525252',     // Very Dark Gray
          700: '#404040',     // Almost Black
          800: '#262626',     // Nearly Black
          900: '#171717',     // Black
        },
        // Semantic Colors
        success: {
          DEFAULT: '#10B981', // Green
          light: '#D1FAE5',
        },
        error: {
          DEFAULT: '#EF4444', // Red
          light: '#FEE2E2',
        },
        warning: {
          DEFAULT: '#F59E0B', // Yellow
          light: '#FEF3C7',
        },
        info: {
          DEFAULT: '#3B82F6', // Blue
          light: '#DBEAFE',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-300px * 4 - 1.5rem * 4))' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};