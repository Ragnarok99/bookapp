import React, { ReactNode } from 'react';
import { View, Platform, SafeAreaView, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { BottomTabBar, TabItem, defaultTabs } from './BottomTabBar';

interface TabBarContainerProps {
  children: ReactNode;
  tabs?: TabItem[];
}

export function TabBarContainer({
  children,
  tabs = defaultTabs,
}: TabBarContainerProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Determinar la pestaña activa basada en la ruta actual
  const getActiveTab = () => {
    // Eliminar los parámetros de la URL para la comparación
    const currentPath = pathname.split('?')[0];

    // Encontrar el tab que coincide con la ruta actual
    const activeTab = tabs.find((tab) => {
      // Verificar si la URL actual comienza con la URL del tab
      return currentPath === tab.href || currentPath.startsWith(`${tab.href}/`);
    });

    return activeTab?.key || tabs[0].key;
  };

  // Manejar la pulsación de una pestaña
  const handleTabPress = (tab: TabItem) => {
    router.push(tab.href);
  };

  // Obtener la pestaña activa
  const activeTab = getActiveTab();

  return (
    <View className="flex-1 bg-background">
      {/* Contenido principal */}
      <View className="flex-1 pb-24">{children}</View>

      {/* Barra de navegación inferior */}
      <View
        style={styles.navigationContainer}
        className="absolute bottom-0 left-0 right-0 z-50"
      >
        <BottomTabBar
          tabs={tabs}
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />

        {/* Área segura para dispositivos iOS con notch */}
        {Platform.OS === 'ios' && <View className="h-6 bg-white" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    zIndex: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
});
