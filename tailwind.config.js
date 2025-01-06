// tailwind.config.js
module.exports = {
  darkMode: 'media', // or 'class' if you want to toggle manually
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'var(--primary-500)', // Custom color
        },
        secondary: {
          500: 'var(--secondary-500)', // Custom color
        },
      },
    },
  },
  plugins: [],
};
