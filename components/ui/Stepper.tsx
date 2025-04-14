import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/components/theme/ThemeProvider';

export interface StepperProps {
  /**
   * Títulos de los pasos
   */
  steps: string[];

  /**
   * Índice del paso actual (0-based)
   */
  currentStep: number;

  /**
   * Clase adicional para el contenedor
   */
  className?: string;
}

export function Stepper({ steps, currentStep, className = '' }: StepperProps) {
  const { theme } = useTheme();

  // Este es el componente simplificado para el estado inicial
  return (
    <View className={`w-full ${className}`}>
      {/* Estructura principal del stepper */}
      <View className="w-full flex-row items-center justify-between">
        {/* Círculos y líneas conectoras */}
        <View className="absolute w-full h-1 bg-gray-300" />

        {/* Barra de progreso verde */}
        <View
          className="absolute h-1 bg-primary"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />

        {/* Círculos de los pasos */}
        <View className="w-full flex-row justify-between z-10">
          {steps.map((_, index) => {
            // Determinar el estado de cada paso
            const isCompletedStep = index < currentStep;
            const isCurrentStep = index === currentStep;
            const isPendingStep = index > currentStep;

            // Aplicar estilos según el estado
            let backgroundColor, borderWidth, borderColor;

            if (isCurrentStep || isCompletedStep) {
              // Paso actual o completado: círculo verde sólido
              backgroundColor = '#0BB589';
              borderWidth = 0;
              borderColor = 'transparent';
            } else {
              // Paso pendiente: círculo blanco con borde gris
              backgroundColor = '#FFFFFF';
              borderWidth = 1;
              borderColor = '#E0E0E0';
            }

            return (
              <View
                key={index}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor,
                  borderWidth,
                  borderColor,
                }}
              />
            );
          })}
        </View>
      </View>

      {/* Títulos de los pasos */}
      <View className="flex-row justify-between mt-2">
        {steps.map((step, index) => {
          // Determinar el estado de cada paso para el texto
          const isCompletedStep = index < currentStep;
          const isCurrentStep = index === currentStep;
          const isPendingStep = index > currentStep;

          // Color del texto según el estado
          const color =
            isCurrentStep || isCompletedStep ? '#0BB589' : '#9CA3AF';
          const fontWeight = isCurrentStep || isCompletedStep ? '500' : '400';

          return (
            <Text
              key={index}
              style={{
                color,
                fontSize: 12,
                fontWeight,
                textAlign: 'center',
                width: 70,
              }}
            >
              {step}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
