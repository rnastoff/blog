/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: "#eec74d"
    },
    extend: {
      backgroundImage: {
        'dirtbg': "url('../images/bg-med.jpg')",
      },
    },
  },
  plugins: [],
}


/* COLORS
yellow: #eec74d
light green: #a9cdab
red-orange: #fb5315
#ed440c
*/