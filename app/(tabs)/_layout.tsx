import React from 'react';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import { TabBarContainer, TabItem } from '@/components/navigation';
import { Home, Map as Roadmap, Target, User } from 'lucide-react-native';

// Definir las pestañas de nuestra aplicación
const appTabs: TabItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: Home,
    href: '/home',
  },
  {
    key: 'roadmap',
    label: 'Roadmap',
    icon: Roadmap,
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

export default function TabLayout() {
  return (
    <TabBarContainer tabs={appTabs}>
      <Slot />
    </TabBarContainer>
  );
}
