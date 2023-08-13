/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('./src/shared/assets/images/1.png')"
      }
    }
  },
  plugins: []
};
