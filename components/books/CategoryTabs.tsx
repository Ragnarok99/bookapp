import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { P2, Text } from '@/components/typography';
import { useTheme } from '@/components/theme/ThemeProvider';

export interface Category {
  id: string;
  name: string;
}

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  className?: string;
}

export function CategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
  className = '',
}: CategoryTabsProps) {
  const { theme } = useTheme();

  return (
    <View className={`${className}`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        className="mb-2"
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;

          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => onSelectCategory(category.id)}
              activeOpacity={0.7}
              className="mr-4"
            >
              <View className="flex items-center">
                <Text
                  variant="p2"
                  weight={isSelected ? 'bold' : 'regular'}
                  color={isSelected ? 'primary' : 'default'}
                  className="pb-1"
                >
                  {category.name}
                </Text>

                {/* Indicador de selección */}
                {isSelected && (
                  <View className="h-1 w-4 bg-primary rounded-full" />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
