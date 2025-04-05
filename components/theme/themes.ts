import { Theme } from './types';

// Función auxiliar para convertir HEX a RGB
function hexToRgb(hex: string): string {
  // Eliminar # si existe
  hex = hex.replace('#', '');

  // Convertir a valores RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `${r} ${g} ${b}`;
}

// Tema claro actualizado con la nueva paleta de colores
export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: hexToRgb('#0BB589'), // Primary - Verde
    primaryContrast: hexToRgb('#FFFFFF'), // White
    secondary: hexToRgb('#EF844C'), // Secondary - Naranja
    secondaryContrast: hexToRgb('#FFFFFF'), // White
    accent: hexToRgb('#00CFE8'), // Info - Azul claro
    accentContrast: hexToRgb('#FFFFFF'), // White
    background: hexToRgb('#F7FBFC'), // Background - Blanco hueso
    text: hexToRgb('#5C605E'), // Text - Gris oscuro
    textMuted: hexToRgb('#82868B'), // Secondary Text - Gris medio
    border: hexToRgb('#E0E4E5'), // Disabled - Gris claro
    error: hexToRgb('#B12B2C'), // Error - Rojo
    success: hexToRgb('#219653'), // Success - Verde
    card: hexToRgb('#F7F9FD'), // Card - Blanco azulado
    progress: hexToRgb('#E0E4E5'), // Progress - Mismo que disabled
    input: hexToRgb('#EFEFEF'), // Input Text - Gris muy claro
    overlay: hexToRgb('#696969'), // Overlay - Gris 24% opacidad
  },
};

// Tema oscuro
export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: hexToRgb('#0BB589'), // Mantenemos el verde como primario
    primaryContrast: hexToRgb('#000000'), // Negro para contraste
    secondary: hexToRgb('#EF844C'), // Naranja secundario
    secondaryContrast: hexToRgb('#000000'), // Negro para contraste
    accent: hexToRgb('#00CFE8'), // Acento azul
    accentContrast: hexToRgb('#000000'), // Negro para contraste
    background: hexToRgb('#000000'), // Negro para fondo
    text: hexToRgb('#FFFFFF'), // Blanco para texto
    textMuted: hexToRgb('#82868B'), // Gris para texto secundario
    border: hexToRgb('#5C605E'), // Bordes más oscuros
    error: hexToRgb('#B12B2C'), // Error - Rojo
    success: hexToRgb('#219653'), // Success - Verde
    card: hexToRgb('#1E1E1E'), // Tarjetas oscuras
    progress: hexToRgb('#5C605E'), // Progreso oscuro
    input: hexToRgb('#2D2D2D'), // Inputs oscuros
    overlay: hexToRgb('#696969'), // Overlay - Gris
  },
};

// Tema sepia (para lectura)
export const sepiaTheme: Theme = {
  name: 'sepia',
  colors: {
    primary: hexToRgb('#0BB589'), // Mantenemos el verde primario
    primaryContrast: hexToRgb('#FFF8E1'), // Sepia claro
    secondary: hexToRgb('#EF844C'), // Naranja secundario
    secondaryContrast: hexToRgb('#FFF8E1'), // Sepia claro
    accent: hexToRgb('#00CFE8'), // Acento azul
    accentContrast: hexToRgb('#FFF8E1'), // Sepia claro
    background: hexToRgb('#FFF8E1'), // Fondo sepia claro
    text: hexToRgb('#5C605E'), // Texto oscuro
    textMuted: hexToRgb('#82868B'), // Texto secundario
    border: hexToRgb('#E6DFC8'), // Bordes sepia
    error: hexToRgb('#B12B2C'), // Error - Rojo
    success: hexToRgb('#219653'), // Success - Verde
    card: hexToRgb('#FFF8E1'), // Tarjetas sepia
    progress: hexToRgb('#E6DFC8'), // Progreso sepia
    input: hexToRgb('#F5EFD9'), // Inputs sepia
    overlay: hexToRgb('#696969'), // Overlay - Gris
  },
};

export const allThemes = [lightTheme, darkTheme, sepiaTheme];
