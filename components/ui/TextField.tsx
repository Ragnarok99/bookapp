import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/components/theme/ThemeProvider';
import {
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react-native';

export interface TextFieldProps {
  /**
   * Título del campo de texto que se muestra arriba
   */
  title?: string;

  /**
   * Texto de placeholder cuando el campo está vacío
   */
  placeholder?: string;

  /**
   * Valor actual del campo
   */
  value: string;

  /**
   * Función llamada cuando cambia el valor
   */
  onChangeText: (text: string) => void;

  /**
   * Si es un campo de contraseña (muestra ícono de visibilidad)
   */
  isPassword?: boolean;

  /**
   * Si debe mostrar contador de caracteres
   */
  showCharCount?: boolean;

  /**
   * Máximo número de caracteres permitidos
   */
  maxLength?: number;

  /**
   * Mensaje de guía debajo del campo
   */
  guideline?: string;

  /**
   * Mensaje de error
   */
  error?: string;

  /**
   * Mensaje de éxito
   */
  success?: string;

  /**
   * Estilos adicionales para el contenedor
   */
  className?: string;
}

export function TextField({
  title,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  showCharCount = false,
  maxLength,
  guideline,
  error,
  success,
  className = '',
  ...props
}: TextFieldProps &
  Omit<React.ComponentProps<typeof TextInput>, 'value' | 'onChangeText'>) {
  const { theme } = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Determinar colores basados en el estado
  let borderColor = 'border-gray-200';
  let focusedBorderColor = 'border-primary';

  if (error) {
    borderColor = 'border-error';
    focusedBorderColor = 'border-error';
  } else if (success) {
    borderColor = 'border-success';
    focusedBorderColor = 'border-success';
  }

  // Alternar visibilidad de contraseña
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View className={`w-full ${className}`}>
      {/* Título del campo */}
      {title && (
        <View className="flex-row items-center mb-1">
          <Text className="text-gray-600 text-sm font-medium">{title}</Text>
          {/* Línea horizontal después del título */}
          <View className="h-[1px] flex-1 bg-gray-200 ml-2" />
        </View>
      )}

      {/* Campo de texto */}
      <View
        className={`flex-row items-center border rounded-full px-4 py-3.5 ${borderColor}`}
      >
        <TextInput
          className="flex-1 text-gray-700 text-base"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !passwordVisible}
          maxLength={maxLength}
          placeholderTextColor="#ACACAC"
          {...props}
        />

        {/* Contador de caracteres */}
        {showCharCount && maxLength && (
          <Text className="text-gray-400 text-xs ml-2">
            {value.length}/{maxLength}
          </Text>
        )}

        {/* Icono de visibilidad para contraseñas */}
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility} className="ml-2">
            {passwordVisible ? (
              <Eye size={20} color={theme.colors.text} />
            ) : (
              <EyeOff size={20} color={theme.colors.text} />
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* Mensajes de retroalimentación */}
      {guideline && (
        <View className="flex-row items-center mt-1">
          <AlertCircle size={16} color="#F9A825" />
          <Text className="text-gray-500 text-xs ml-1">{guideline}</Text>
        </View>
      )}

      {error && (
        <View className="flex-row items-center mt-1">
          <AlertTriangle size={16} color={theme.colors.error} />
          <Text className="text-error text-xs ml-1">{error}</Text>
        </View>
      )}

      {success && (
        <View className="flex-row items-center mt-1">
          <CheckCircle size={16} color={theme.colors.success} />
          <Text className="text-success text-xs ml-1">{success}</Text>
        </View>
      )}
    </View>
  );
}
