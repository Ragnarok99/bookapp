import React, { createContext, useContext, useEffect, useState } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Theme, ThemeContextType } from './types';
import { allThemes, darkTheme, lightTheme } from './themes';
import { vars } from 'nativewind';

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  setTheme: () => {},
  availableThemes: allThemes,
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    colorScheme === 'dark' ? darkTheme : lightTheme
  );

  // Actualiza el tema cuando cambie el modo del sistema
  useEffect(() => {
    if (colorScheme === 'dark') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [colorScheme]);

  // Aplica las variables CSS para NativeWind usando vars()
  // Estas variables deben estar en formato RGB para que funcionen los modificadores de opacidad
  const themeVars = vars({
    '--color-primary': theme.colors.primary,
    '--color-primary-contrast': theme.colors.primaryContrast,
    '--color-secondary': theme.colors.secondary,
    '--color-secondary-contrast': theme.colors.secondaryContrast,
    '--color-accent': theme.colors.accent,
    '--color-accent-contrast': theme.colors.accentContrast,
    '--color-background': theme.colors.background,
    '--color-text': theme.colors.text,
    '--color-text-muted': theme.colors.textMuted,
    '--color-border': theme.colors.border,
    '--color-error': theme.colors.error,
    '--color-success': theme.colors.success,
    '--color-card': theme.colors.card,
    '--color-progress': theme.colors.progress,
    '--color-input': theme.colors.input,
    '--color-overlay': theme.colors.overlay,
  });

  const value = {
    theme,
    setTheme,
    availableThemes: allThemes,
  };

  return (
    <ThemeContext.Provider value={value}>
      <View style={themeVars} className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
}
