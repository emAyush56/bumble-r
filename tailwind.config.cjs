/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "y-primary": "#ffc629",
        "y-primary-hover": "#f2bc27",
        "y-primary-active": "#e6b225",
        "y-primary-light": "#fff7d8",
        "y-primary-contrast": "#454650",
      },
    },
  },
  plugins: [],
};
