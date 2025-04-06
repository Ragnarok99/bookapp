import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { H1, P1 } from '@/components/typography';

export default function FocusScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-4">
        <H1 color="accent" className="mb-4">
          Focus
        </H1>
        <P1>Concéntrate en tus sesiones de estudio aquí.</P1>
      </View>
    </SafeAreaView>
  );
}
