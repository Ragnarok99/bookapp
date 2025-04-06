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
      <View
        style={styles.tabBarContainer}
        className="absolute bottom-0 w-full bg-white rounded-t-3xl pb-4 pt-3 shadow-lg z-50"
      >
        <View className="flex-row justify-around items-center">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            const IconComponent = tab.icon;

            return (
              <TouchableOpacity
                key={tab.key}
                className="items-center py-1 px-2"
                onPress={() => onTabPress(tab)}
                activeOpacity={0.7}
              >
                {/* Contenedor del icono activo */}
                <View
                  style={isActive ? styles.activeIconContainer : null}
                  className={isActive ? 'bg-white rounded-full p-2' : 'p-2'}
                >
                  {/* Ícono con color según estado activo/inactivo */}
                  <IconComponent
                    size={22}
                    color={isActive ? primaryColor : inactiveColor}
                    strokeWidth={isActive ? 2.5 : 1.5}
                  />
                </View>

                {/* Texto debajo del ícono */}
                <P3
                  className={`mt-0.5 ${
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

const styles = StyleSheet.create({
  tabBarContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    zIndex: 50,
  },
  activeIconContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: 'rgb(0, 184, 124)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

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
