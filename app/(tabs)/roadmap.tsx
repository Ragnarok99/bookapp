import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { H1, P1 } from '@/components/typography';

export default function RoadmapScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-4">
        <H1 color="secondary" className="mb-4">
          Roadmap
        </H1>
        <P1>Aquí podrás ver tu plan de aprendizaje.</P1>
      </View>
    </SafeAreaView>
  );
}
