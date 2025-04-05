import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { ThemeSelector } from '@/components/ThemeSelector';
import { useTheme } from '@/components/theme/ThemeProvider';

export default function ConfigScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-text text-2xl font-bold mb-2">
            Configuración
          </Text>
          <Text className="text-text-muted mb-6">
            Personaliza la apariencia de la aplicación
          </Text>

          <View className="mb-6">
            <Text className="text-text text-lg font-semibold mb-2">Tema</Text>
            <Text className="text-text-muted mb-4">
              Tema actual:{' '}
              {theme.name === 'light'
                ? 'Claro'
                : theme.name === 'dark'
                ? 'Oscuro'
                : 'Sepia'}
            </Text>
            <ThemeSelector />
          </View>

          <View className="mb-6">
            <Text className="text-text text-lg font-semibold mb-2">
              Ejemplos de estilo
            </Text>

            <View className="space-y-4 mb-4">
              <View className="p-4 bg-primary rounded-lg">
                <Text className="text-primary-contrast font-bold">
                  Color primario
                </Text>
              </View>

              <View className="p-4 bg-secondary rounded-lg">
                <Text className="text-secondary-contrast font-bold">
                  Color secundario
                </Text>
              </View>

              <View className="p-4 bg-accent rounded-lg">
                <Text className="text-accent-contrast font-bold">
                  Color de acento
                </Text>
              </View>
            </View>

            <View className="p-4 border border-border rounded-lg">
              <Text className="text-text font-bold">Texto normal</Text>
              <Text className="text-text-muted">Texto atenuado</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
