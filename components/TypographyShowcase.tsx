import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, H1, H2, H3, H4, P1, P2, P3, Label1, Label2 } from './typography';

export function TypographyShowcase() {
  return (
    <ScrollView className="flex-1 p-4 bg-background">
      <View className="mb-8">
        <H2 color="primary">Tipografía: Montserrat</H2>
        <View className="flex-row flex-wrap my-4">
          <View className="bg-card p-3 m-1 rounded-md">
            <P2 weight="extrabold">ExtraBold</P2>
          </View>
          <View className="bg-card p-3 m-1 rounded-md">
            <P2 weight="bold">Bold</P2>
          </View>
          <View className="bg-card p-3 m-1 rounded-md">
            <P2 weight="semibold">SemiBold</P2>
          </View>
          <View className="bg-card p-3 m-1 rounded-md">
            <P2 weight="medium">Medium</P2>
          </View>
          <View className="bg-card p-3 m-1 rounded-md">
            <P2 weight="regular">Regular</P2>
          </View>
          <View className="bg-card p-3 m-1 rounded-md">
            <P2 weight="light">Light</P2>
          </View>
        </View>
      </View>

      {/* Encabezados */}
      <View className="mb-8">
        <H3 color="primary" className="mb-4">
          Encabezados
        </H3>

        <View className="bg-card p-4 rounded-lg mb-2">
          <H1>Headline 1</H1>
          <P3 color="muted">Font size: 32px | Line height: 38px</P3>
        </View>

        <View className="bg-card p-4 rounded-lg mb-2">
          <H2>Headline 2</H2>
          <P3 color="muted">Font size: 24px | Line height: 28px</P3>
        </View>

        <View className="bg-card p-4 rounded-lg mb-2">
          <H3>Headline 3</H3>
          <P3 color="muted">Font size: 20px | Line height: 24px</P3>
        </View>

        <View className="bg-card p-4 rounded-lg mb-2">
          <H4>Headline 4</H4>
          <P3 color="muted">Font size: 18px | Line height: 22px</P3>
        </View>
      </View>

      {/* Párrafos */}
      <View className="mb-8">
        <H3 color="primary" className="mb-4">
          Párrafos
        </H3>

        <View className="bg-card p-4 rounded-lg mb-2">
          <P1>
            Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce at purus in massa maximus fringilla a at turpis.
          </P1>
          <P3 color="muted">Font size: 16px | Line height: 24px</P3>
        </View>

        <View className="bg-card p-4 rounded-lg mb-2">
          <P2>
            Paragraph 2: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce at purus in massa maximus fringilla a at turpis.
          </P2>
          <P3 color="muted">Font size: 14px | Line height: 20px</P3>
        </View>

        <View className="bg-card p-4 rounded-lg mb-2">
          <P3>
            Paragraph 3: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce at purus in massa maximus fringilla a at turpis.
          </P3>
          <P3 color="muted">Font size: 12px | Line height: 20px</P3>
        </View>
      </View>

      {/* Etiquetas */}
      <View className="mb-8">
        <H3 color="primary" className="mb-4">
          Etiquetas
        </H3>

        <View className="bg-card p-4 rounded-lg mb-2">
          <Label1>Label 1</Label1>
          <P3 color="muted">Font size: 16px | Line height: 24px</P3>
        </View>

        <View className="bg-card p-4 rounded-lg mb-2">
          <Label2>Label 2</Label2>
          <P3 color="muted">Font size: 14px | Line height: 20px</P3>
        </View>
      </View>

      {/* Colores de texto */}
      <View className="mb-8">
        <H3 color="primary" className="mb-4">
          Colores de texto
        </H3>

        <View className="bg-card p-4 rounded-lg">
          <P1 color="default" className="mb-2">
            Texto predeterminado
          </P1>
          <P1 color="muted" className="mb-2">
            Texto atenuado
          </P1>
          <P1 color="primary" className="mb-2">
            Texto primario
          </P1>
          <P1 color="secondary" className="mb-2">
            Texto secundario
          </P1>
          <P1 color="accent" className="mb-2">
            Texto acento
          </P1>
          <P1 color="error" className="mb-2">
            Texto error
          </P1>
          <P1 color="success" className="mb-2">
            Texto éxito
          </P1>
        </View>
      </View>
    </ScrollView>
  );
}
