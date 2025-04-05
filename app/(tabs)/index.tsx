import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'PlayfairDisplay-Bold': PlayfairDisplay_700Bold,
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.header}>
        <Text style={styles.title}>Be the Hero of{'\n'}your life!</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Reading</Text>
        <View style={styles.bookCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400' }}
            style={styles.bookImage}
          />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>The Little Prince</Text>
            <Text style={styles.bookAuthor}>Antoine de Saint-Exupéry</Text>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.buttonText}>Continue Reading</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Best Stories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.storyCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400' }}
                style={styles.storyImage}
              />
              <Text style={styles.storyTitle}>Book Title</Text>
              <Text style={styles.storyAuthor}>Author Name</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#6366f1',
  },
  title: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 32,
    color: '#ffffff',
    marginBottom: 24,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 16,
  },
  bookCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  bookInfo: {
    marginLeft: 16,
    flex: 1,
  },
  bookTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 4,
  },
  bookAuthor: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#6366f1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    fontSize: 14,
  },
  horizontalScroll: {
    marginLeft: -8,
  },
  storyCard: {
    width: 140,
    marginHorizontal: 8,
  },
  storyImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  storyTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1e293b',
    marginBottom: 2,
  },
  storyAuthor: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748b',
  },
});