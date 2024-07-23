import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'waves': "url('/wave.webp')",
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
          'waves-animate': 'waves-animate 7s linear infinite',
          'fade-out': 'fadeOut 1s ease-in-out',
      },
      keyframes: {
          'waves-animate': {
              '0%': { 'background-position-y': '0' },
              '50%': { 'background-position-y': '20%' },
              '100%': { 'background-position-y': '0' },
          },
          'fadeOut' : {
            '0%' : { 'opacity': '0' },
            '100%' : { 'opacity': '1' },
          },
      },
      minHeight: {
        '125' : '500px',
      },
      boxShadow: {
        'custom': '-40px 0 10px -20px inset #27272a',
        'custom-1': '-40px 0 10px -20px inset #ffedd5',
      },
      width: {
        '9/10': '90%',
      },
    },
  },
  plugins: [],
};
export default config;
