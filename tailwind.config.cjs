/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //primary
        scissorsGradientFrom: "hsl(39, 89%, 49%)",
        scissorsGradientTo: "hsl(40, 84%, 53%)",
        paperGradientFrom: "hsl(230, 89%, 62%)",
        paperGradientTo: "hsl(230, 89%, 65%)",
        rockGradientFrom: "hsl(349, 71%, 52%)",
        rockGradientTo: "hsl(349, 70%, 56%)",
        lizardGradientFrom: "hsl(261, 73%, 60%)",
        lizardGradientTo: "hsl(261, 72%, 63%)",
        spockGradientFrom: "hsl(189, 59%, 53%)",
        spockGradientTo: "hsl(189, 58%, 57%)",

        //neutral
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",

        //background
        radialGradientFrom: "hsl(214, 47%, 23%)",
        radialGradientTo: "hsl(237, 49%, 15%)",
      },
    },
    fontFamily: {
      barlow: ["Barlow Semi Condensed", "sans-serif"],
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
    },
  },

  plugins: [],
};
