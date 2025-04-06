import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { H1, P1 } from '@/components/typography';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-4">
        <H1 color="primary" className="mb-4">
          Profile
        </H1>
        <P1>Aquí podrás ver y gestionar tu perfil.</P1>
      </View>
    </SafeAreaView>
  );
}
