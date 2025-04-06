import React from 'react';
import { SafeAreaView } from 'react-native';
import { TypographyShowcase } from '@/components/TypographyShowcase';

export default function TypographyScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <TypographyShowcase />
    </SafeAreaView>
  );
}
