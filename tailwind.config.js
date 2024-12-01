/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        "5xl": "42px",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"], // Add the Poppins font
      },
      minHeight: {
        32: "7.75rem",
        80: "82dvh",
      },
      maxWidth: {
        104: "780px",
      },
      lineHeight: {
        subTitle: "50px", // Add custom line-height
      },
    },
  },
  plugins: [],
};
