import React, { useCallback } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Redirect } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  // Redirigir a la página home
  return <Redirect href="/home" />;
}
