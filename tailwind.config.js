/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          contrast: 'rgb(var(--color-primary-contrast) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          contrast: 'rgb(var(--color-secondary-contrast) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          contrast: 'rgb(var(--color-accent-contrast) / <alpha-value>)',
        },
        background: 'rgb(var(--color-background) / <alpha-value>)',
        text: {
          DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        },
        border: 'rgb(var(--color-border) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
        progress: 'rgb(var(--color-progress) / <alpha-value>)',
        input: 'rgb(var(--color-input) / <alpha-value>)',
        overlay: 'rgb(var(--color-overlay) / <alpha-value>)',
      },
      fontFamily: {
        'montserrat-extrabold': ['Montserrat_800ExtraBold'],
        'montserrat-bold': ['Montserrat_700Bold'],
        'montserrat-semibold': ['Montserrat_600SemiBold'],
        'montserrat-medium': ['Montserrat_500Medium'],
        'montserrat-regular': ['Montserrat_400Regular'],
        'montserrat-light': ['Montserrat_300Light'],
      },
      fontSize: {
        // Párrafos
        p1: ['16px', { lineHeight: '24px' }],
        p2: ['14px', { lineHeight: '20px' }],
        p3: ['12px', { lineHeight: '20px' }],

        // Encabezados
        h1: ['32px', { lineHeight: '38px' }],
        h2: ['24px', { lineHeight: '28px' }],
        h3: ['20px', { lineHeight: '24px' }],
        h4: ['18px', { lineHeight: '22px' }],

        // Etiquetas
        label1: ['16px', { lineHeight: '24px' }],
        label2: ['14px', { lineHeight: '20px' }],
      },
    },
  },
  plugins: [
    // Definimos valores por defecto para las variables CSS
    function ({ addBase }) {
      addBase({
        ':root': {
          '--color-primary': '11 181 137', // Verde #0BB589
          '--color-primary-contrast': '255 255 255',
          '--color-secondary': '239 132 76', // Naranja #EF844C
          '--color-secondary-contrast': '255 255 255',
          '--color-accent': '0 207 232', // Azul #00CFE8
          '--color-accent-contrast': '255 255 255',
          '--color-background': '247 251 252', // #F7FBFC
          '--color-text': '92 96 94', // #5C605E
          '--color-text-muted': '130 134 139', // #82868B
          '--color-border': '224 228 229', // #E0E4E5
          '--color-error': '177 43 44', // #B12B2C
          '--color-success': '33 150 83', // #219653
          '--color-card': '247 249 253', // #F7F9FD
          '--color-progress': '224 228 229', // #E0E4E5
          '--color-input': '239 239 239', // #EFEFEF
          '--color-overlay': '105 105 105', // #696969
        },
      });
    },
  ],
};
