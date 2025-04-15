import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Text } from '@/components/typography';
import { TextField, Stepper, Button } from '@/components/ui';
import { ChevronLeft, Check } from 'lucide-react-native';
import { useTheme } from '@/components/theme/ThemeProvider';

// Definir interfaz para los libros
interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  pages: number;
}

// Mock de datos de libros
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover:
      'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
    pages: 218,
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    cover:
      'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
    pages: 328,
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover:
      'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg',
    pages: 281,
  },
];

export default function CreateRoadmapScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [bookTitle, setBookTitle] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Pasos del wizard
  const steps = ['Book Title', 'All Pages', 'Pages/day'];

  // Simulación de búsqueda
  useEffect(() => {
    if (bookTitle.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Filtrar libros que coincidan con la búsqueda
    const filteredBooks = mockBooks.filter((book) =>
      book.title.toLowerCase().includes(bookTitle.toLowerCase())
    );

    setSearchResults(filteredBooks);
  }, [bookTitle]);

  // Función para avanzar al siguiente paso
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Renderizar un ítem de libro
  const renderBookItem = ({ item }: { item: Book }) => (
    <TouchableOpacity
      className={`flex-row items-center p-3 mb-2 rounded-lg ${
        selectedBook?.id === item.id ? 'bg-primary/10' : 'bg-white'
      }`}
      onPress={() => setSelectedBook(item)}
    >
      <Image
        source={{ uri: item.cover }}
        style={{ width: 50, height: 70, borderRadius: 4 }}
        resizeMode="cover"
      />
      <View className="flex-1 ml-3">
        <Text className="font-medium text-base">{item.title}</Text>
        <Text className="text-gray-500 text-sm">{item.author}</Text>
        <Text className="text-gray-400 text-xs">{item.pages} pages</Text>
      </View>
      {selectedBook?.id === item.id && (
        <Check size={20} color={theme.colors.primary} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <Stack.Screen
          options={{
            title: '',
            headerLeft: () => (
              <ChevronLeft
                size={24}
                color="#000"
                onPress={() => router.back()}
              />
            ),
            headerShadowVisible: false,
          }}
        />

        <View className="flex-1 px-5">
          {/* Imagen decorativa */}
          <View className="items-center mb-4">
            <Image
              source={{ uri: 'https://i.imgur.com/TxOuGR9.png' }}
              style={{
                width: '100%',
                height: 180,
                borderRadius: 8,
              }}
              resizeMode="cover"
            />
          </View>

          {/* Título de la pantalla */}
          <Text className="text-center text-gray-500 text-lg mb-4">
            Create Roadmap
          </Text>

          {/* Stepper para mostrar el progreso */}
          <Stepper steps={steps} currentStep={currentStep} className="mb-8" />

          {/* Contenido del paso actual */}
          <View className="flex-1">
            {currentStep === 0 && (
              <>
                {/* Paso 1: Buscar libro por título */}
                <Text className="text-gray-600 mb-2">Search Books</Text>
                <TextField
                  placeholder="Book Title"
                  value={bookTitle}
                  onChangeText={setBookTitle}
                  className="mb-4"
                />

                {/* Resultados de la búsqueda */}
                <FlatList
                  data={searchResults}
                  renderItem={renderBookItem}
                  keyExtractor={(item) => item.id}
                  ListEmptyComponent={() =>
                    bookTitle.trim() !== '' ? (
                      <Text className="text-center text-gray-500 mt-5">
                        No books found. Try a different search.
                      </Text>
                    ) : null
                  }
                />
              </>
            )}
          </View>

          {/* Botón para avanzar */}
          <View className="mb-5">
            <Button
              variant="filled"
              onPress={goToNextStep}
              disabled={currentStep === 0 && !selectedBook}
            >
              Next
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
