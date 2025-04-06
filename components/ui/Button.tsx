import React from 'react';
import { TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { Text } from '@/components/typography';
import { useTheme } from '@/components/theme/ThemeProvider';
import { TextVariant } from '../typography/Text';

export type ButtonVariant = 'filled' | 'outlined' | 'text';

export interface ButtonProps {
  /**
   * Texto que se mostrará en el botón
   */
  children: React.ReactNode;

  /**
   * Variante del botón
   * - filled: Botón con fondo de color completo
   * - outlined: Botón con borde y fondo transparente
   * - text: Botón sin fondo ni borde, solo texto
   */
  variant?: ButtonVariant;

  /**
   * Si el botón está deshabilitado
   */
  disabled?: boolean;

  /**
   * Si el botón está en estado de carga
   */
  loading?: boolean;

  /**
   * Función que se llama al presionar el botón
   */
  onPress?: () => void;

  /**
   * Clases personalizadas para el botón
   */
  className?: string;

  /**
   * Icono a la izquierda del texto (componente React)
   */
  leftIcon?: React.ReactNode;

  /**
   * Icono a la derecha del texto (componente React)
   */
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'filled',
  disabled = false,
  loading = false,
  onPress,
  className = '',
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const { theme } = useTheme();

  // Configuración de estilos según la variante
  let containerStyles = '';
  let color: TextVariant = 'primary';

  switch (variant) {
    case 'filled':
      containerStyles = 'bg-primary border-0';
      color = 'white'; // Texto blanco para el botón filled
      break;
    case 'outlined':
      containerStyles = 'bg-transparent border-2 border-primary';
      break;
    case 'text':
      containerStyles = 'bg-transparent';
      break;
  }

  // Aplicar estilos cuando está deshabilitado
  if (disabled) {
    containerStyles =
      variant === 'filled'
        ? 'bg-gray-200 border-0'
        : 'bg-transparent border-2 border-gray-300';
    color = 'muted';
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      className={`rounded-3xl py-4 px-5 flex-row items-center justify-center ${containerStyles} ${className}`}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'filled' ? '#FFFFFF' : theme.colors.primary}
        />
      ) : (
        <View className="flex-row items-center justify-center">
          {leftIcon && <View className="mr-2">{leftIcon}</View>}
          <Text weight="medium" color={color}>
            {children}
          </Text>
          {rightIcon && <View className="ml-2">{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
}
