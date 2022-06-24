module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
  },
  extend: {
    backgroundImage: {
      'hero-pattern': "url('https://img.freepik.com/free-vector/abstract-geometric-pattern-background_1319-242.jpg?t=st=1655760437~exp=1655761037~hmac=6de5d9bc7d85c6fa12673191f87354bdc8a6435e9b5ec8cad9abd00ff60e2c6c&w=900')",
      'footer-texture': "url('')",
    }
  },
  plugins: [require('daisyui')],

}