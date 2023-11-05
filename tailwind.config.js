/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,json,liquid,html}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
        ChivoMono: ['Chivo Mono'],
        Poppins: ['Poppins'],
        SemplicitaBoldItalic: 'SemplicitaBoldItalic',
        SemplicitaBold: 'SemplicitaBold',
        SemplicitaLightItalic: "SemplicitaLightItalic",
        SemplicitaLight: "SemplicitaLight",
        SemplicitaMediumItalic: "SemplicitaMediumItalic",
        SemplicitaMedium: 'SemplicitaMedium',
        SemplicitaOmbra: "SemplicitaOmbra",
        TomaSansRegular: "TomaSansRegular"

      },
      colors: {
        maincolor: '#386FBF',
        secondarycolor: '#B4C7E5',
        accentcolor: '#8F9BB5',
      },
      keyframes: {
        mov: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(12px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        photoOne: 'mov 6s ease-in-out infinite',
        photoTwo: 'mov 9s ease-in-out infinite',
        photoThree: 'mov 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}