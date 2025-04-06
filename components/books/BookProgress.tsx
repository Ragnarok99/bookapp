import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/components/theme/ThemeProvider';
import Svg, { Circle } from 'react-native-svg';

interface BookProgressProps {
  /**
   * Porcentaje de progreso de la lectura (0-100)
   */
  progress: number;

  /**
   * Si el libro está activo (siendo leído actualmente)
   */
  isActive?: boolean;

  /**
   * Tamaño del círculo de progreso
   */
  size?: number;

  /**
   * Estilo personalizado para el componente
   */
  className?: string;
}

/**
 * Componente que muestra el progreso de lectura de un libro
 * con dos estados: activo (verde) e inactivo (gris)
 */
export function BookProgress({
  progress = 0,
  isActive = false,
  size = 64,
  className = '',
}: BookProgressProps) {
  const { theme } = useTheme();

  // Normalizar el progreso entre 0-100
  const normalizedProgress = Math.min(100, Math.max(0, progress));

  // Calcular las dimensiones del círculo
  const strokeWidth = size * 0.1;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (normalizedProgress / 100) * circumference;

  // Determinar colores basados en el estado activo/inactivo
  const trackColor = isActive
    ? 'rgba(11, 181, 137, 0.2)' // Verde con opacidad (#0BB589)
    : 'rgba(158, 158, 158, 0.2)'; // Gris con opacidad (#9E9E9E)

  const progressColor = isActive
    ? '#0BB589' // Verde primario
    : '#9E9E9E'; // Gris

  const textColor = isActive
    ? '#0BB589' // Verde primario
    : '#9E9E9E'; // Gris

  return (
    <View className={`items-center justify-center ${className}`}>
      <View style={{ width: size, height: size }}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Círculo de fondo (track) */}
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Círculo de progreso */}
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={progressColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            transform={`rotate(-90, ${center}, ${center})`}
          />
        </Svg>

        {/* Texto del porcentaje */}
        <View className="absolute inset-0 items-center justify-center">
          <Text
            style={{
              color: textColor,
              fontFamily: 'Montserrat_600SemiBold',
              fontSize: size * 0.25,
            }}
          >
            {normalizedProgress}%
          </Text>
        </View>
      </View>
    </View>
  );
}
