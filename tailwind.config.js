/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#9890db",

        secondary: "#cea210",

        accent: "#52e24a",

        neutral: "#232839",

        "base-100": "#FFFFFF",

        info: "#9CAFE2",

        success: "#51DBCE",

        warning: "#E9AD20",

        error: "#E13D5B",
      },
    },
  ],
  plugins: [require("daisyui")],
};
