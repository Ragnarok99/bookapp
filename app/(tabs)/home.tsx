import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { H2, P1, P2 } from '@/components/typography';
import { useTheme } from '@/components/theme/ThemeProvider';
import { RoadmapBanner } from '@/components/banners';

export default function HomeScreen() {
  const { theme } = useTheme();
  const primaryColor = `rgb(${theme.colors.primary})`;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        {/* Banner de Roadmap */}
        <View className="px-4 mt-4 mb-2">
          <RoadmapBanner />
        </View>

        {/* Próxima sesión */}
        <View className="p-4">
          <H2 className="mb-4">Próxima sesión</H2>
          <TouchableOpacity
            className="bg-card p-4 rounded-xl border border-border shadow-sm mb-4"
            activeOpacity={0.7}
          >
            <View className="flex-row justify-between mb-2">
              <View>
                <P1 weight="semibold">Matemáticas</P1>
                <P2 color="muted">Álgebra lineal</P2>
              </View>
              <View className="bg-primary/10 h-8 w-8 rounded-full items-center justify-center">
                <P2 color="primary" weight="semibold">
                  30
                </P2>
              </View>
            </View>
            <P2 color="muted">Hoy, 15:30 - 16:00</P2>
          </TouchableOpacity>
        </View>

        {/* Cursos populares */}
        <View className="px-4 pb-20">
          <H2 className="mb-4">Cursos populares</H2>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-4"
          >
            {[
              {
                id: 1,
                title: 'Programación',
                image:
                  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=300',
              },
              {
                id: 2,
                title: 'Inglés',
                image:
                  'https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?q=80&w=300',
              },
              {
                id: 3,
                title: 'Ciencias',
                image:
                  'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=300',
              },
            ].map((course) => (
              <TouchableOpacity
                key={course.id}
                className="mr-3 w-32"
                activeOpacity={0.7}
              >
                <Image
                  source={{ uri: course.image }}
                  className="w-32 h-32 rounded-xl mb-2"
                />
                <P1 weight="medium">{course.title}</P1>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
