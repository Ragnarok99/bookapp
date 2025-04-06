import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { useFonts } from '@/hooks/useFonts';

import '../global.css';

export default function RootLayout() {
  useFrameworkReady();

  // Cargar las fuentes
  const { fontsLoaded, onLayoutRootView } = useFonts();

  // Si las fuentes no están cargadas, mostramos una pantalla en blanco
  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <ThemeProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack
          initialRouteName="splash"
          screenOptions={{ headerShown: false, animation: 'fade' }}
        >
          <Stack.Screen name="splash" options={{ gestureEnabled: false }} />
          <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
