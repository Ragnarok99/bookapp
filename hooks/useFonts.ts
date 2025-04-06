import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Importamos las fuentes Montserrat
import {
  Montserrat_800ExtraBold,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_400Regular,
  Montserrat_300Light,
} from '@expo-google-fonts/montserrat';

// Mantener la pantalla de splash visible mientras cargamos recursos
SplashScreen.preventAutoHideAsync();

export function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        // Cargar fuentes
        await Font.loadAsync({
          // Fuentes Montserrat
          Montserrat_800ExtraBold,
          Montserrat_700Bold,
          Montserrat_600SemiBold,
          Montserrat_500Medium,
          Montserrat_400Regular,
          Montserrat_300Light,
        });

        // Marcar las fuentes como cargadas
        setFontsLoaded(true);
      } catch (e) {
        console.warn('Error al cargar fuentes:', e);
      }
    }

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Ocultar splash screen cuando se hayan cargado las fuentes
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
}
