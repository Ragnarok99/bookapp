// Definición de los tamaños y pesos de tipografía según el diseño

// Fuentes
export const fontFamily = {
  // Variantes de la fuente Montserrat
  montserratExtraBold: 'Montserrat_800ExtraBold',
  montserratBold: 'Montserrat_700Bold',
  montserratSemiBold: 'Montserrat_600SemiBold',
  montserratMedium: 'Montserrat_500Medium',
  montserratRegular: 'Montserrat_400Regular',
  montserratLight: 'Montserrat_300Light',
};

// Párrafos
export const paragraphs = {
  paragraph1: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fontFamily.montserratRegular,
  },
  paragraph2: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fontFamily.montserratRegular,
  },
  paragraph3: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: fontFamily.montserratRegular,
  },
};

// Encabezados
export const headings = {
  heading1: {
    fontSize: 32,
    lineHeight: 38,
    fontFamily: fontFamily.montserratBold,
  },
  heading2: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: fontFamily.montserratBold,
  },
  heading3: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: fontFamily.montserratBold,
  },
  heading4: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: fontFamily.montserratBold,
  },
};

// Etiquetas
export const labels = {
  label1: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fontFamily.montserratSemiBold,
  },
  label2: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fontFamily.montserratSemiBold,
  },
};

// Configuración general de tipografía
export const typography = {
  fontFamily,
  paragraphs,
  headings,
  labels,
};
