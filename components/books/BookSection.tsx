import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { H2, P2, Text } from '@/components/typography';
import { BookCard } from './BookCard';
import { CategoryTabs, Category } from './CategoryTabs';
import { useTheme } from '@/components/theme/ThemeProvider';

export interface Book {
  id: string | number;
  title: string;
  coverImage: string;
  category: string;
}

interface BookSectionProps {
  title: string;
  books: Book[];
  onSeeMorePress?: () => void;
  onBookPress?: (book: Book) => void;
  className?: string;
}

export function BookSection({
  title,
  books,
  onSeeMorePress,
  onBookPress,
  className = '',
}: BookSectionProps) {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // Lista de categorías extraídas de los libros, con "All" siempre primero
  const categories: Category[] = React.useMemo(() => {
    const categorySet = new Set(books.map((book) => book.category));
    const categoryArray = Array.from(categorySet).map((cat) => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1), // Capitalizar
    }));

    // Agregar "All" como primera categoría
    return [{ id: 'all', name: 'All' }, ...categoryArray];
  }, [books]);

  // Filtrar libros según la categoría seleccionada
  const filteredBooks = React.useMemo(() => {
    if (selectedCategory === 'all') {
      return books;
    }
    return books.filter((book) => book.category === selectedCategory);
  }, [books, selectedCategory]);

  return (
    <View className={`${className}`}>
      {/* Encabezado con título y botón "See more" */}
      <View className="flex-row justify-between items-center mb-4 px-4">
        <Text variant="h2">{title}</Text>

        <TouchableOpacity onPress={onSeeMorePress} activeOpacity={0.7}>
          <Text variant="p2" color="primary">
            See more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Carrusel de libros */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        className="mb-4"
      >
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            coverImage={book.coverImage}
            onPress={() => onBookPress && onBookPress(book)}
            className="mr-3"
          />
        ))}
      </ScrollView>

      {/* Pestañas de categorías */}
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        className="mb-4"
      />
    </View>
  );
}
