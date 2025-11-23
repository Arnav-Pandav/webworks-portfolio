// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         wbBlue: '#1F4E79',
//         wbGold: '#D8A332',
//       },
     
//     },
//   },
//   plugins: [],
// }




/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wbBlue: '#1F4E79',
        wbGold: '#D8A332',
      },

      // ⭐ Animated gradient background (from Hero effect)
      animation: {
        gradientSlow: "gradient 12s ease infinite",
        borderMove: "borderMove 3s linear infinite",
      },

      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },

        // ⭐ Moving border animation
        borderMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
}
