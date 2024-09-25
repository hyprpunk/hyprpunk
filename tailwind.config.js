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
      },
      fontFamily: {
        michroma: ["var(--font-michroma)"],
      },
      backgroundImage: {
        'home-hero': "url('/backgrounds/space_colors_back.jpg')",
      }
    },
  },
  plugins: [],
};
