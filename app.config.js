module.exports = {
  expo: {
    name: 'bookapp-tracker',
    slug: 'bookapp-tracker',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
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
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
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
