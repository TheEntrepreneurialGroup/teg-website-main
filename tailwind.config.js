/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2C59',
          light: '#3A5AA9',
          dark: '#091c3a'
        },
        secondary: {
          DEFAULT: '#E5E5E5',
          light: '#F5F5F5',
          dark: '#C4C4C4'
        },
        accent: {
          DEFAULT: '#B8860B',
          light: '#DAA520',
          dark: '#8B6914'
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669'
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706'
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif']
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px'
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      }
    },
  },
  plugins: [],
};