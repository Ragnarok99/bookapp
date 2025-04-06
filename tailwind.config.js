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
  plugins: [],
};
