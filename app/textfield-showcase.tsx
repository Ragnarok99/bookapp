import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '@/components/typography';
import { TextField } from '@/components/ui';

export default function TextFieldShowcase() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('Entered Text');
  const [value4, setValue4] = useState('•••');
  const [value5, setValue5] = useState('Entered Text');
  const [value6, setValue6] = useState('Entered Text');
  const [value7, setValue7] = useState('Entered Text');

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Stack.Screen options={{ title: 'TextField Showcase' }} />
      <ScrollView className="flex-1 p-4">
        <Text className="text-xl font-bold mb-6">TextField Componentes</Text>

        {/* Estado básico con título */}
        <View className="mb-6">
          <Text className="text-sm mb-2 text-gray-600">Básico con título</Text>
          <TextField
            title="TextField Title"
            value={value1}
            onChangeText={setValue1}
          />
        </View>

        {/* Estado con placeholder */}
        <View className="mb-6">
          <Text className="text-sm mb-2 text-gray-600">Con placeholder</Text>
          <TextField
            title="TextField Title"
            placeholder="PlaceHolder"
            value={value2}
            onChangeText={setValue2}
          />
        </View>

        {/* Estado con texto ingresado */}
        <View className="mb-6">
          <Text className="text-sm mb-2 text-gray-600">
            Con texto ingresado
          </Text>
          <TextField
            title="TextField Title"
            value={value3}
            onChangeText={setValue3}
          />
        </View>

        {/* Estado con contador de caracteres */}
        <View className="mb-6">
          <Text className="text-sm mb-2 text-gray-600">
            Con contador de caracteres
          </Text>
          <TextField
            title="TextField Title"
            value={value3}
            onChangeText={setValue3}
            showCharCount
            maxLength={15}
          />
        </View>

        {/* Estado tipo contraseña */}
        <View className="mb-6">
          <Text className="text-sm mb-2 text-gray-600">
            Campo de contraseña
          </Text>
          <TextField
            title="TextField Title"
            value={value4}
            onChangeText={setValue4}
            isPassword
          />
        </View>

        {/* Estado con guideline */}
        <View className="mb-6">
          <Text className="text-sm mb-2 text-gray-600">
            Con mensaje de guía
          </Text>
          <TextField
            title="TextField Title"
            value={value5}
            onChangeText={setValue5}
            guideline="Guideline for text input"
          />
        </View>

        {/* Estado con error */}
        <View className="mb-6">
          <Text className="text-sm mb-2 text-gray-600">
            Con mensaje de error
          </Text>
          <TextField
            title="TextField Title"
            value={value6}
            onChangeText={setValue6}
            error="Optional error text"
          />
        </View>

        {/* Estado con éxito */}
        <View className="mb-6">
          <Text className="text-sm mb-2 text-gray-600">
            Con mensaje de éxito
          </Text>
          <TextField
            title="TextField Title"
            value={value7}
            onChangeText={setValue7}
            success="Successful message text"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
