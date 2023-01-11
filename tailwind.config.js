/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    screens: {
      'xs': '360px',
      // => @media (min-width: 360px) { ... }
      'es': '380px',
      // => @media (min-width: 360px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1260px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1836px',
      // => @media (min-width: 1836px) { ... }
      '4xl': '2836px',
      // => @media (min-width: 2836px) { ... }
    }
  },
  plugins: [],
}
