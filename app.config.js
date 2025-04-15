module.exports = {
  expo: {
    name: 'bookapp-tracker',
    slug: 'bookapp-tracker',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'bookapp',
    splash: {
      resizeMode: 'contain',
      backgroundColor: '#0BB589',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      // Configuración específica para NativeWind
      'expo-router',
    ],
    extra: {
      // Variables de entorno extra para la aplicación
    },
  },
};
