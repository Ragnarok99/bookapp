import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { P2, Text } from '@/components/typography';
import { Rocket, Cloud } from 'lucide-react-native';
import { useTheme } from '@/components/theme/ThemeProvider';

interface RoadmapBannerProps {
  onPress?: () => void;
  className?: string;
}

export function RoadmapBanner({ onPress, className = '' }: RoadmapBannerProps) {
  const router = useRouter();
  const { theme } = useTheme();

  // Convertir RGB a string para los íconos
  const contrastColor = `rgb(${theme.colors.primaryContrast})`;
  const secondaryColor = `rgb(${theme.colors.secondary})`;
  const backgroundColor = `rgb(${theme.colors.background})`;

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // Por defecto, navegar a la página de roadmap
      router.push('/roadmap');
    }
  };

  return (
    <View className={`rounded-xl overflow-hidden shadow-md ${className}`}>
      <View className="bg-primary py-4 px-5 relative">
        {/* Nubes decorativas */}
        <View className="absolute top-2 left-16 opacity-50">
          <Cloud size={20} color={contrastColor} />
        </View>
        <View className="absolute top-4 left-32 opacity-40">
          <Cloud size={16} color={contrastColor} />
        </View>
        <View className="absolute top-1 left-48 opacity-30">
          <Cloud size={14} color={contrastColor} />
        </View>

        {/* Contenido de texto */}
        <View className="flex-1 z-10 mr-16">
          <Text
            className="text-primary-contrast font-semibold mb-1"
            variant="p2"
          >
            Ready For Adventure?!
          </Text>
          <Text className="text-primary-contrast font-bold mb-3" variant="h3">
            Create Your Own Roadmap
          </Text>

          <TouchableOpacity
            onPress={handlePress}
            className="bg-background py-2 px-8 rounded-full self-start items-center justify-center shadow-sm"
            activeOpacity={0.8}
          >
            <Text className="text-secondary font-bold" variant="p2">
              Let's Go
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ilustración de persona en cohete */}
        <View className="absolute right-4 bottom-3">
          {/* Base del cohete (naranja) */}
          <View className="w-16 h-8 bg-orange-500 rounded-b-full absolute bottom-0 right-0 z-10" />

          {/* Persona en el cohete */}
          <View className="w-12 h-12 absolute right-2 bottom-4 z-20">
            <View className="w-6 h-6 bg-primary-contrast rounded-full absolute bottom-2 left-0" />{' '}
            {/* Cabeza */}
            <View className="w-8 h-10 bg-primary absolute bottom-0 left-2 rounded-t-lg" />{' '}
            {/* Cuerpo */}
          </View>

          {/* Cohete */}
          <View className="absolute right-1 bottom-2 rotate-[-20deg] transform z-30">
            <Rocket size={32} color={backgroundColor} />
          </View>
        </View>
      </View>
    </View>
  );
}
