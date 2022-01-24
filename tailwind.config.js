const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hs-mono': ['ibm-plex-mono', ...defaultTheme.fontFamily.mono]
      },
      width: {
        '104': '28rem',
        '118': '30rem',
        '128': '32rem',
        'container': '1024px' 
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}
