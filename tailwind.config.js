import flowbite from 'flowbite-react/tailwind';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    container: {
      center: true,
      padding: '.75rem',
    },
    extend: {
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
