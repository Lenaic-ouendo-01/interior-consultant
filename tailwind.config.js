/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily:{
        'header' : "Crimson Pro",
        'body' : "Lora",
        'footer' : "Montserrat"
      }
    },
    screens: {
      'ml': '726px'
      //J'ai définit une nouvelle taille d'écran minimale qui sera de 371px 
    }
  },
  plugins: [],
}

