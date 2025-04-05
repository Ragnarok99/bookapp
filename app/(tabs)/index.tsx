import React, { useCallback } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useTheme } from '@/components/theme/ThemeProvider';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const { theme } = useTheme();

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
    <ScrollView className="flex-1 bg-background" onLayout={onLayoutRootView}>
      <View className="px-6 pt-14 pb-6 bg-primary">
        <Text className="font-['PlayfairDisplay-Bold'] text-3xl text-primary-contrast mb-6">
          Be the Hero of{'\n'}your life!
        </Text>
      </View>

      <View className="p-6">
        <Text className="font-['Inter-SemiBold'] text-xl text-text mb-4">
          Continue Reading
        </Text>
        <View className="bg-background rounded-2xl p-4 flex-row shadow-sm border border-border">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
            }}
            className="w-24 h-36 rounded-lg"
          />
          <View className="ml-4 flex-1">
            <Text className="font-['Inter-SemiBold'] text-lg text-text mb-1">
              The Little Prince
            </Text>
            <Text className="font-['Inter-Regular'] text-sm text-text-muted mb-4">
              Antoine de Saint-Exupéry
            </Text>
            <TouchableOpacity className="bg-primary p-3 rounded-lg items-center">
              <Text className="font-['Inter-SemiBold'] text-sm text-primary-contrast">
                Continue Reading
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="px-6 pb-6">
        <Text className="font-['Inter-SemiBold'] text-xl text-text mb-4">
          Best Stories
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="-ml-2"
        >
          {[1, 2, 3].map((item) => (
            <View key={item} className="w-36 mx-2">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
                }}
                className="w-full h-48 rounded-lg mb-2"
              />
              <Text className="font-['Inter-SemiBold'] text-sm text-text mb-0.5">
                Book Title
              </Text>
              <Text className="font-['Inter-Regular'] text-xs text-text-muted">
                Author Name
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
