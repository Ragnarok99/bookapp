import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { P1, H1, Text } from '@/components/typography';
import { BookProgressCard } from '@/components/books';
import { Button } from '@/components/ui';
import { Search } from 'lucide-react-native';
import { useTheme } from '@/components/theme/ThemeProvider';
import { useRouter } from 'expo-router';

export default function RoadmapScreen() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'reading' | 'finished'>('reading');
  const router = useRouter();

  // Datos de muestra para los libros
  const books = [
    {
      id: 1,
      title: 'The Little Prince',
      author: 'Antoine de Saint',
      coverImage:
        'https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg',
      currentPage: 52,
      totalPages: 267,
      progress: 19,
      isActive: true,
    },
    {
      id: 2,
      title: 'John Lennon',
      author: 'Antoine de Saint',
      coverImage:
        'https://images.squarespace-cdn.com/content/v1/51af7335e4b0b9e3791a9d17/1458838271343-7VZS7FQE8C6AYEJ2YG0J/image-asset.jpeg',
      currentPage: 52,
      totalPages: 267,
      progress: 19,
      isActive: false,
    },
    {
      id: 3,
      title: 'CYCLOPEDIA',
      author: 'Antoine de Saint',
      coverImage:
        'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_83090027.jpg',
      currentPage: 52,
      totalPages: 267,
      progress: 19,
      isActive: false,
    },
    {
      id: 4,
      title: '1984',
      author: 'Antoine de Saint',
      coverImage:
        'https://m.media-amazon.com/images/I/519zR2oIlmL._AC_UF1000,1000_QL80_.jpg',
      currentPage: 52,
      totalPages: 267,
      progress: 19,
      isActive: false,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1">
        <View className="flex-1 px-4 pt-4 pb-6">
          {/* Header con tabs y botón de búsqueda */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row">
              <TouchableOpacity
                onPress={() => setActiveTab('reading')}
                className="mr-4"
              >
                <Text
                  color={activeTab === 'reading' ? 'primary' : 'muted'}
                  weight={activeTab === 'reading' ? 'semibold' : 'regular'}
                  className={`text-base ${
                    activeTab === 'reading'
                      ? 'border-b-2 border-primary pb-1'
                      : ''
                  }`}
                >
                  Reading
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab('finished')}>
                <Text
                  color={activeTab === 'finished' ? 'primary' : 'muted'}
                  weight={activeTab === 'finished' ? 'semibold' : 'regular'}
                  className={`text-base ${
                    activeTab === 'finished'
                      ? 'border-b-2 border-primary pb-1'
                      : ''
                  }`}
                >
                  Book Finished
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Search size={24} color={theme.colors.text} />
            </TouchableOpacity>
          </View>

          {/* Lista de libros */}
          <View className="mb-4">
            {books.map((book, index) => (
              <View key={book.id} className="mb-4">
                {index === 0 && (
                  <BookProgressCard
                    title={book.title}
                    author={book.author}
                    coverImage={book.coverImage}
                    currentPage={book.currentPage}
                    totalPages={book.totalPages}
                    progress={book.progress}
                    isActive={book.isActive}
                    onPress={() =>
                      console.log(`Libro seleccionado: ${book.title}`)
                    }
                  />
                )}
                {index === 1 && (
                  <P1 className="my-4 text-muted-foreground">
                    It's been a while since your visit! ...
                  </P1>
                )}
                {index > 0 && (
                  <BookProgressCard
                    title={book.title}
                    author={book.author}
                    coverImage={book.coverImage}
                    currentPage={book.currentPage}
                    totalPages={book.totalPages}
                    progress={book.progress}
                    isActive={book.isActive}
                    onPress={() =>
                      console.log(`Libro seleccionado: ${book.title}`)
                    }
                  />
                )}
              </View>
            ))}
          </View>

          {/* Botón de agregar nuevo roadmap */}
          <Button
            variant="filled"
            onPress={() => router.push('/create-roadmap')}
            className="mt-4"
          >
            Add New Roadmap
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
