import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import BookriseLogo from '@/components/BookriseLogo';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Después de 3 segundos, redirigir al usuario a la pantalla principal
    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <StatusBar style="light" />

      {/* Logo de Bookrise */}
      <BookriseLogo size={120} color="#FFFFFF" showText={true} />

      {/* Indicador de carga */}
      <ActivityIndicator color="white" className="mt-10" />
    </View>
  );
}
