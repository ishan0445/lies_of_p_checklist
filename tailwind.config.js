const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "elden-ring-green": {
          0: "#ebfff4",
          50: "#d3f3e2",
          100: "#bce8d1",
          150: "#a7dcc1",
          200: "#93d0b1",
          300: "#71b996",
          400: "#56a17f",
          500: "#418a69",
          600: "#317256",
          700: "#235b43",
          800: "#194331",
          900: "#0f2c20",
          1000: "#07140f",
        },
        "elden-ring-dark-blue": "#0c2527",
        "elden-ring-dark-green": "#14302d",
        "elden-ring-light-green": "#3a5950",
        
        "lies-of-p-persian-gold": "#c39e66",
        "lies-of-p-persian-red": "#BB3839ff",
        "lies-of-p-raisin-black": "#312429ff",
        "lies-of-p-black": "#060607ff",
        "lies-of-p-gunmetal": "#202C38ff",
        "lies-of-p-charcoal": "#3A4958ff",
        "lies-of-p-prussian-blue": "#193554ff",
        "lies-of-p-paynes-gray": "#5A6D7Eff",
        "lies-of-p-air-force-blue": "#6E8B9Dff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
