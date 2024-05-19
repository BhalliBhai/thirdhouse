/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        home__hero__curve__radius: "0px 0px 800px 800px",
      },
      backgroundImage: {
        home__hero__curve__lg:
          "linear-gradient(180deg, rgba(76, 201, 240, 0.00) 0%, rgba(0, 206, 58, 0.30) 100%)",
        home__hero__curve__sm:
          "linear-gradient(180deg, rgba(76, 201, 240, 0.00) 0%, rgba(0, 206, 58, 0.30) 100%)",
      },
      fontFamily: {
        hind: ['Hind Siliguri', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
