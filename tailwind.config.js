/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      screens: {
        mobile: {
          max: '1024px',
        },
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans serif'],
      serif: ['Source Serif Pro', 'serif'],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#8C0327',
          secondary: '#836B5D',
          accent: '#D59B6C',
          neutral: '#181A2A',
          'base-100': '#f3f4f6',
          info: '#42AEBD',
          success: '#4ade80',
          warning: '#fde047',
          error: '#b91c1c',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
