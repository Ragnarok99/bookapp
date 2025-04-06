import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ChevronRight } from 'lucide-react-native';
import { BookProgress } from './BookProgress';
import { H1, H3, H4, P1, P2, P3 } from '../typography';

interface BookProgressCardProps {
  title: string;
  author: string;
  coverImage: string;
  progress: number;
  currentPage: number;
  totalPages: number;
  isActive?: boolean;
  onPress?: () => void;
  className?: string;
}

export function BookProgressCard({
  title,
  author,
  coverImage,
  progress,
  currentPage,
  totalPages,
  isActive = true,
  onPress,
  className = '',
}: BookProgressCardProps) {
  const { theme } = useTheme();

  // Diferentes estilos según el estado activo/inactivo
  const bgColor = isActive ? 'bg-primary' : 'bg-white';
  const borderColor = isActive ? '' : 'border border-gray-200';
  const textColor = isActive ? 'text-white' : 'text-gray-600';
  const progressBgColor = isActive ? 'bg-green-100/40' : 'bg-gray-200';
  const progressFillColor = isActive ? 'bg-white' : 'bg-orange-400';

  const containerClasses = isActive
    ? 'bg-primary rounded-xl'
    : 'bg-white border border-gray-200 rounded-xl';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`w-full ${containerClasses} overflow-hidden ${className}`}
    >
      <View className="flex-row p-4 items-center">
        {/* Portada del libro */}
        <Image
          source={{ uri: coverImage }}
          className="w-[72px] h-[90px] rounded-md mr-4"
          resizeMode="cover"
        />

        {/* Información del libro */}
        <View className="flex-1 justify-between h-[90px] py-0.5">
          <View>
            <Text
              className={`${textColor} mb-1 capitalize font-regular text-xl`}
            >
              {title}
            </Text>
            <P1
              color="muted"
              className={`${textColor} text-sm`}
              numberOfLines={1}
            >
              by {author}
            </P1>
          </View>

          {/* Progreso de páginas */}
          <View className="flex-column items-start justify-between">
            <Text className={`${textColor} text-sm mb-1 font-regular`}>
              Page {currentPage} of {totalPages}
            </Text>
            <View
              className={`w-full h-2 ${progressBgColor} rounded-full overflow-hidden`}
            >
              <View
                className={`h-full ${progressFillColor} rounded-full`}
                style={{ width: `${progress}%` }}
              />
            </View>
          </View>
        </View>

        {/* Icono de flecha */}
        <ChevronRight
          size={24}
          color={isActive ? theme.colors.primary : '#9ca3af'}
          className="ml-2"
        />
      </View>
    </TouchableOpacity>
  );
}
