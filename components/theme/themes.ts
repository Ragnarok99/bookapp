import { Theme } from './types';

// Tema claro
export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '59 130 246', // blue-500
    primaryContrast: '255 255 255', // white
    secondary: '79 70 229', // indigo-600
    secondaryContrast: '255 255 255', // white
    accent: '236 72 153', // pink-500
    accentContrast: '255 255 255', // white
    background: '249 250 251', // gray-50
    text: '17 24 39', // gray-900
    textMuted: '107 114 128', // gray-500
    border: '229 231 235', // gray-200
  },
};

// Tema oscuro
export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '96 165 250', // blue-400
    primaryContrast: '30 41 59', // slate-800
    secondary: '129 140 248', // indigo-400
    secondaryContrast: '30 41 59', // slate-800
    accent: '244 114 182', // pink-400
    accentContrast: '30 41 59', // slate-800
    background: '15 23 42', // slate-900
    text: '248 250 252', // slate-50
    textMuted: '148 163 184', // slate-400
    border: '51 65 85', // slate-700
  },
};

// Tema sepia (para lectura)
export const sepiaTheme: Theme = {
  name: 'sepia',
  colors: {
    primary: '180 83 9', // amber-800
    primaryContrast: '255 251 235', // amber-50
    secondary: '133 77 14', // yellow-800
    secondaryContrast: '255 251 235', // amber-50
    accent: '146 64 14', // amber-700
    accentContrast: '255 251 235', // amber-50
    background: '254 243 199', // amber-100
    text: '120 53 15', // amber-900
    textMuted: '146 64 14', // amber-700
    border: '252 211 77', // amber-300
  },
};

export const allThemes = [lightTheme, darkTheme, sepiaTheme];
