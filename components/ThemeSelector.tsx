import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from './theme/ThemeProvider';
import { Theme } from './theme/types';

export function ThemeSelector() {
  const { theme, setTheme, availableThemes } = useTheme();

  const handleThemeChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
  };

  return (
    <ScrollView>
      <View className="p-4 bg-background rounded-lg border border-border mb-4">
        <Text className="text-text font-bold text-lg mb-4">
          Seleccionar Tema
        </Text>

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

      {/* Paleta de colores */}
      <View className="p-4 bg-card rounded-lg border border-border mb-4">
        <Text className="text-text font-bold text-lg mb-4">
          Paleta de Colores
        </Text>

        <View className="space-y-4">
          {/* Colores principales */}
          <View className="flex-row flex-wrap">
            <ColorSwatch
              name="Primary"
              colorClass="bg-primary"
              textClass="text-primary-contrast"
            />
            <ColorSwatch
              name="Secondary"
              colorClass="bg-secondary"
              textClass="text-secondary-contrast"
            />
            <ColorSwatch
              name="Accent"
              colorClass="bg-accent"
              textClass="text-accent-contrast"
            />
          </View>

          {/* Estados */}
          <View className="flex-row flex-wrap">
            <ColorSwatch
              name="Success"
              colorClass="bg-success"
              textClass="text-white"
            />
            <ColorSwatch
              name="Error"
              colorClass="bg-error"
              textClass="text-white"
            />
          </View>

          {/* Fondos y textos */}
          <View className="flex-row flex-wrap">
            <ColorSwatch
              name="Background"
              colorClass="bg-background"
              textClass="text-text"
            />
            <ColorSwatch
              name="Card"
              colorClass="bg-card"
              textClass="text-text"
            />
            <ColorSwatch
              name="Input"
              colorClass="bg-input"
              textClass="text-text"
            />
          </View>

          {/* Texto */}
          <View className="flex-row flex-wrap">
            <ColorSwatch
              name="Text"
              colorClass="bg-text"
              textClass="text-white"
            />
            <ColorSwatch
              name="Text Muted"
              colorClass="bg-text-muted"
              textClass="text-white"
            />
          </View>

          {/* Otros */}
          <View className="flex-row flex-wrap">
            <ColorSwatch
              name="Border"
              colorClass="bg-border"
              textClass="text-text"
            />
            <ColorSwatch
              name="Progress"
              colorClass="bg-progress"
              textClass="text-text"
            />
            <ColorSwatch
              name="Overlay"
              colorClass="bg-overlay"
              textClass="text-white"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Componente para mostrar una muestra de color
function ColorSwatch({
  name,
  colorClass,
  textClass,
}: {
  name: string;
  colorClass: string;
  textClass: string;
}) {
  return (
    <View
      className={`${colorClass} h-20 w-1/3 p-2 items-center justify-center`}
    >
      <Text className={`${textClass} font-medium text-center`}>{name}</Text>
    </View>
  );
}
