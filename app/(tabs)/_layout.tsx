import { Tabs } from 'expo-router';
import {
  Book,
  Chrome as Home,
  Library,
  User,
  Settings,
  Type,
} from 'lucide-react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from '@/components/theme/ThemeProvider';

export default function TabLayout() {
  const { theme } = useTheme();

  // Convertir RGB a formato hexadecimal para los colores de las pestañas
  const primaryColor = `rgb(${theme.colors.primary})`;
  const textMutedColor = `rgb(${theme.colors.textMuted})`;
  const borderColor = `rgb(${theme.colors.border})`;
  const backgroundColor = `rgb(${theme.colors.background})`;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar,
          backgroundColor: backgroundColor,
          borderTopColor: borderColor,
        },
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: textMutedColor,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color, size }) => (
            <Library size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reading"
        options={{
          title: 'Lectura',
          tabBarIcon: ({ color, size }) => <Book size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="typography"
        options={{
          title: 'Tipografía',
          tabBarIcon: ({ color, size }) => <Type size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    height: 60,
  },
});
