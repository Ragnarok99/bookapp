import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '@/components/typography';
import { Stepper, Button } from '@/components/ui';

export default function StepperShowcase() {
  const [currentStep, setCurrentStep] = useState(0);

  // Ejemplos de pasos para los diferentes steppers
  const steps1 = ['Book Title', 'All Pages', 'Pages/day'];
  const steps2 = ['Book Title', 'All Pages', 'Pages/day'];
  const steps3 = ['Book Title', 'All Pages', 'Pages/day'];

  // Función para avanzar al siguiente paso
  const nextStep = (stepperId: number) => {
    if (stepperId === 1 && currentStep < steps1.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Función para volver al paso anterior
  const prevStep = (stepperId: number) => {
    if (stepperId === 1 && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <Stack.Screen options={{ title: 'Stepper Showcase' }} />
      <ScrollView className="flex-1 p-4">
        <Text className="text-xl font-bold mb-6 text-white">
          Componente Stepper
        </Text>

        {/* Stepper con paso 1 activo */}
        <View className="mb-10">
          <Text className="text-sm mb-3 text-gray-400">Paso 1 (Inicial)</Text>
          <Stepper steps={steps1} currentStep={0} />
        </View>

        {/* Stepper con paso 2 activo */}
        <View className="mb-10">
          <Text className="text-sm mb-3 text-gray-400">
            Paso 2 (Intermedio)
          </Text>
          <Stepper steps={steps2} currentStep={1} />
        </View>

        {/* Stepper con paso 3 activo (final) */}
        <View className="mb-10">
          <Text className="text-sm mb-3 text-gray-400">Paso 3 (Final)</Text>
          <Stepper steps={steps3} currentStep={2} />
        </View>

        {/* Stepper interactivo */}
        <View className="mb-10">
          <Text className="text-sm mb-3 text-gray-400">
            Stepper Interactivo
          </Text>
          <Stepper steps={steps1} currentStep={currentStep} />

          <View className="flex-row justify-between mt-6">
            <Button
              variant="outlined"
              onPress={() => prevStep(1)}
              className="flex-1 mr-2"
              disabled={currentStep === 0}
            >
              Anterior
            </Button>
            <Button
              variant="filled"
              onPress={() => nextStep(1)}
              className="flex-1 ml-2"
              disabled={currentStep === steps1.length - 1}
            >
              Siguiente
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
