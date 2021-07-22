// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontSize: {
        "5xl": ["3rem", "1.15"],
        "6xl": ["3.75rem", "1.15"],
        "7xl": ["4.5rem", "1.5"],
        "8xl": ["6rem", "1.15"],
      },
      colors: {
        "shutter-green": {
          DEFAULT: "#B9E48C",
          transparent: "rgba(185, 228, 140, 0.11)",
        },
        "shutter-black": "#2C2D33",
        "shutter-grey": {
          DEFAULT: "#919191",
          dark: "#4F4F4F",
        },
      },
    },
  },
};
