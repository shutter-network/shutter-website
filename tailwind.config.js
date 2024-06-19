// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontSize: {
        "3xl": ["1.5rem", "1.3"],
        "4xl": ["2.25rem", "1.3"],
        "5xl": ["3rem", "1.3"],
        "6xl": ["3.75rem", "1.3"],
        "7xl": ["4.5rem", "1.3"],
        "8xl": ["6rem", "1.3"],
      },
      colors: {
        "shutter-green": {
          DEFAULT: "#D4ED7A",
          transparent: "rgba(185, 228, 140, 0.11)",
        },
        "shutter-green-dark": "#2D5916",
        "shutter-green-mid": "#82B725",
        "shutter-red": "#ED6464",
        "shutter-orange": "#FF9833",
        "shutter-black": "#2C2D33",
        "shutter-new": "#051016",
        "shutter-grey": {
          DEFAULT: "#8C9193",
          darkest: "#35393A",
          darker: "#585E60",
          dark: "#8C9193",
          light: "#ACB2B5",
          lighter: "#C1C9CF",
          lightest: "#DFE6EA",          
        },
      },
    },
    container: {
      padding: '8rem',
    }
  },
};
