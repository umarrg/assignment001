/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'dark': '#0E0E2C',
      'black': '#000000',
      'purple': '#3f3cbb',
      'light-bg': "#F5F5F5",
      "dark-border": "rgba(0, 0, 0, 0.2)",
      "dark-gray": "rgba(0, 0, 0, 0.2)",
      "grey": "rgba(0, 0, 0, 0.2)",
      "green": "#3CAA2A",
      "red": "#FF4800",
      "grey-text": "rgba(0, 0, 0, 0.5)",
      "light-grey": "#E4E4E4",
      "dark-grey": "#4C4C4C",
      "lemon-blue": "#D8EED4",

    },
    extend: {
      backgroundImage: {
        'blue-img': "url('../assets/images/blue.svg')",
        'brown-img': "url('../assets/images/brown.svg')",
      }
    },
  },
  plugins: [],
}
