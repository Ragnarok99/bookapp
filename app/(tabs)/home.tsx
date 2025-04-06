import React from 'react';
import { View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text } from '@/components/typography';
import { useTheme } from '@/components/theme/ThemeProvider';
import { RoadmapBanner } from '@/components/banners';
import { BookSection } from '@/components/books';

// Datos de ejemplo para libros
const SAMPLE_BOOKS = [
  {
    id: '1',
    title: 'The Design of Everyday Things',
    coverImage:
      'https://m.media-amazon.com/images/I/61wiPJzwOsL._AC_UF1000,1000_QL80_.jpg',
    category: 'design',
  },
  {
    id: '2',
    title: 'Clean Code',
    coverImage:
      'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    category: 'programming',
  },
  {
    id: '3',
    title: 'Atomic Habits',
    coverImage:
      'https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg',
    category: 'productivity',
  },
  {
    id: '4',
    title: 'Deep Work',
    coverImage:
      'https://m.media-amazon.com/images/I/71FXLY8Y5jL._AC_UF1000,1000_QL80_.jpg',
    category: 'productivity',
  },
  {
    id: '5',
    title: 'Building a Second Brain',
    coverImage:
      'https://m.media-amazon.com/images/I/71zhG+RdvJL._AC_UF1000,1000_QL80_.jpg',
    category: 'productivity',
  },
  {
    id: '6',
    title: 'JavaScript: The Good Parts',
    coverImage:
      'https://m.media-amazon.com/images/I/61t9s5hwIwL._AC_UF1000,1000_QL80_.jpg',
    category: 'programming',
  },
];

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="pt-6 px-4">
          <Text className="text-2xl font-bold">¡Hola, Estudiante!</Text>
          <Text className="text-base text-neutral-500">
            Bienvenido a tu aplicación de estudio
          </Text>
        </View>

        {/* Sección de progreso diario */}
        <View className="mt-8 p-4 mx-4 bg-primary/10 rounded-xl">
          <Text className="text-base font-bold mb-1">Progreso diario</Text>
          <Text className="text-sm text-neutral-500 mb-3">
            Has completado 65% de tus metas
          </Text>
          <View className="h-2 bg-primary/20 rounded-full overflow-hidden">
            <View
              className="h-full bg-primary rounded-full"
              style={{ width: '65%' }}
            />
          </View>
        </View>

        {/* Banner de creación de roadmap */}
        <View className="mt-4 mb-2">
          <RoadmapBanner />
        </View>

        {/* Sección de libros sugeridos */}
        <BookSection
          title="Libros Sugeridos"
          books={SAMPLE_BOOKS}
          onSeeMorePress={() => console.log('Ver más libros')}
          onBookPress={(book) => console.log('Libro seleccionado:', book.title)}
          className="mt-4"
        />

        {/* Espacio adicional al final */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}
