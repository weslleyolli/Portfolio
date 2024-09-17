module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { 
        'dark-text': '#ffffff', 
        'light-text': '#2b2b33', 
      },
      screens: {
        'xs': '480px', 
      },
    },
  },
  plugins: [],
}
