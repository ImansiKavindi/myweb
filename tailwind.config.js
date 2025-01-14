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
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      boxShadow: {
        'pink-glow': '0 0 5px #fff, 0 0 15px #ff00ff, 0 0 25px #ff00ff',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
