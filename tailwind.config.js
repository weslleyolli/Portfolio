module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { 
        'dark-text': '#ffffff', 
        'light-text': '#475569', 
      },
      screens: {
        'xs': '480px', 
      },
    },
  },
  plugins: [],
}
