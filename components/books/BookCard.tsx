import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { P2, P3 } from '@/components/typography';

interface BookCardProps {
  id: string | number;
  title: string;
  coverImage: string;
  onPress?: () => void;
  className?: string;
}

export function BookCard({
  id,
  title,
  coverImage,
  onPress,
  className = '',
}: BookCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`w-32 ${className}`}
    >
      <View className="overflow-hidden rounded-lg shadow-sm mb-2 bg-card border border-border">
        <Image
          source={{ uri: coverImage }}
          className="w-32 h-44"
          resizeMode="cover"
        />
      </View>
      <P2 weight="medium" numberOfLines={2} className="h-12">
        {title}
      </P2>
    </TouchableOpacity>
  );
}
