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
