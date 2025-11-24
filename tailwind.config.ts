import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section-dark-autumn': "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/generalBgAutumn.jpg')",
        'section-light-autumn': "linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)), url('/generalBgAutumn.jpg')",
        'section-dark-spring': "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/generalBgSpring.jpg')",
        'section-light-spring': "linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)), url('/generalBgSpring.jpg')",
        'section-dark-winter': "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/generalBgWinter.jpg')",
        'section-light-winter': "linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8)), url('/generalBgWinter.jpg')",
        'section-dark-summer': "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/generalBgSummer.jpg')",
        'section-light-summer': "linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)), url('/generalBgSummer.jpg')",
        'home-dark': "linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))",
        'home-light': "linear-gradient(90deg, rgba(255, 165, 0, 0.3), rgba(165, 42, 42, 0.2))",
      },
      backgroundPosition: {
          'top': 'top',
      },
      backgroundSize: {
          'cover': 'cover',
      },
      backgroundRepeat: {
          'no-repeat': 'no-repeat',
      },
      animation: {
          'fade-out': 'fadeOut 1s ease-in-out',
      },
      keyframes: {
          'fadeOut' : {
            '0%' : { 'opacity': '0' },
            '100%' : { 'opacity': '1' },
          },
      },
      minHeight: {
        '125' : '500px',
      },
      boxShadow: {
        'custom-dark': '-40px 0 10px -20px inset #27272a',
        'custom-light': '-40px 0 10px -20px inset #ffedd5',
      },
      width: {
        '9/10': '90%',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-section-light-autumn',
    'dark:bg-section-dark-autumn',
    'bg-section-light-winter',
    'dark:bg-section-dark-winter',
    'bg-section-light-spring',
    'dark:bg-section-dark-spring',
    'bg-section-light-summer',
    'dark:bg-section-dark-summer',
  ],
};
export default config;
