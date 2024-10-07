/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "var(--darkBlue)",
        neonPink: "var(--neonPink)",
        neonGreen: "var(--neonGreen)",
        smokeGray: "var(--smokeGray)",
        neonDarkBlue: "var(--neonBlue)",
        darkerPink: "var(--darkerPink)",
        neonBlue: "var(--neonBlue)",
      },
      fontFamily: {
        michroma: ["var(--font-michroma)"],
        robotoMono: ["var(--font-roboto-mono)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        'home-hero': "url('/backgrounds/squared_cyber_back.png')",
      },
      boxShadow: {
        'neon-pink': "0px 10px 25px 5px rgb(215,78,124,10%)",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
