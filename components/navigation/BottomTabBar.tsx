import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Home, Map, Target, User } from 'lucide-react-native';
import { useTheme } from '../theme/ThemeProvider';
import { P3 } from '../typography';

// Obtenemos las dimensiones de la pantalla para cálculos
const { width } = Dimensions.get('window');

// Definición de los elementos de la navegación
export type TabItem = {
  key: string;
  label: string;
  icon: React.ElementType;
  href: string;
};

// Propiedades del componente
export interface BottomTabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabPress: (tab: TabItem) => void;
}

export function BottomTabBar({
  tabs,
  activeTab,
  onTabPress,
}: BottomTabBarProps) {
  const { theme } = useTheme();

  // Convertir los colores RGB a formato de string para iconos
  const primaryColor = `rgb(${theme.colors.primary})`;
  const inactiveColor = `rgb(${theme.colors.textMuted})`;

  return (
    <View className="relative w-full">
      {/* Fondo de la barra con sombra y bordes redondeados */}
      <View className="absolute bottom-0 w-full bg-background rounded-t-3xl pb-4 pt-3 px-4 shadow-lg border-t border-border">
        <View className="flex-row justify-around items-center">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            const IconComponent = tab.icon;

            return (
              <TouchableOpacity
                key={tab.key}
                className={`items-center py-1 px-2 ${
                  isActive ? 'relative' : ''
                }`}
                onPress={() => onTabPress(tab)}
                activeOpacity={0.7}
              >
                {/* Ícono con color según estado activo/inactivo */}
                <IconComponent
                  size={24}
                  color={isActive ? primaryColor : inactiveColor}
                  strokeWidth={isActive ? 2 : 1.5}
                />

                {/* Texto debajo del ícono */}
                <P3
                  className={`mt-1 ${
                    isActive ? 'text-primary' : 'text-text-muted'
                  }`}
                  weight={isActive ? 'medium' : 'regular'}
                >
                  {tab.label}
                </P3>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

// Tabs predefinidos para la navegación principal
export const defaultTabs: TabItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: Home,
    href: '/',
  },
  {
    key: 'roadmap',
    label: 'Roadmap',
    icon: Map,
    href: '/roadmap',
  },
  {
    key: 'focus',
    label: 'Focus',
    icon: Target,
    href: '/focus',
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: User,
    href: '/profile',
  },
];
