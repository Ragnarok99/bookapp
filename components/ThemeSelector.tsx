import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from './theme/ThemeProvider';
import { Theme } from './theme/types';

export function ThemeSelector() {
  const { theme, setTheme, availableThemes } = useTheme();

  const handleThemeChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
  };

  return (
    <View className="p-4 bg-background rounded-lg border border-border">
      <Text className="text-text font-bold text-lg mb-4">Seleccionar Tema</Text>

      <View className="space-y-2">
        {availableThemes.map((t) => (
          <TouchableOpacity
            key={t.name}
            onPress={() => handleThemeChange(t)}
            className={`p-3 rounded-md ${
              theme.name === t.name ? 'bg-primary' : 'bg-secondary/20'
            }`}
          >
            <Text
              className={`${
                theme.name === t.name ? 'text-primary-contrast' : 'text-text'
              } font-medium`}
            >
              {t.name === 'light'
                ? 'Claro'
                : t.name === 'dark'
                ? 'Oscuro'
                : 'Sepia'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
