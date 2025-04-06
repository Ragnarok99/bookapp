import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ChevronRight } from 'lucide-react-native';
import { BookProgress } from './BookProgress';

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
  const bgColor = isActive ? 'bg-primary/10' : 'bg-white';
  const borderColor = isActive ? '' : 'border border-gray-200';
  const textColor = isActive ? 'text-primary' : 'text-gray-800';
  const mutedTextColor = isActive ? 'text-primary/70' : 'text-gray-500';
  const progressBgColor = isActive ? 'bg-primary/20' : 'bg-gray-200';
  const progressFillColor = isActive ? 'bg-primary' : 'bg-orange-400';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`w-full rounded-xl ${bgColor} ${borderColor} overflow-hidden ${className}`}
    >
      <View className="flex-row p-4 items-center">
        {/* Portada del libro */}
        <Image
          source={{ uri: coverImage }}
          className="w-[72px] h-[100px] rounded-md mr-4"
          resizeMode="cover"
        />

        {/* Información del libro */}
        <View className="flex-1 justify-between h-[100px] py-1">
          <View>
            <Text
              className={`${textColor} font-semibold text-lg mb-1`}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className={`${mutedTextColor} text-sm`} numberOfLines={1}>
              by {author}
            </Text>
          </View>

          {/* Progreso de páginas */}
          <View className="flex-row items-center justify-between">
            <Text className={`${textColor} text-sm`}>
              Page {currentPage} of {totalPages}
            </Text>
            <View
              className={`w-32 h-1 ${progressBgColor} rounded-full overflow-hidden`}
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
