import React, { ReactNode } from 'react';
import { Text, TextProps } from './Text';

// Tipos de texto
interface BaseTextProps extends Omit<TextProps, 'variant'> {
  children: ReactNode;
}

// Párrafos
export function P1(props: BaseTextProps) {
  return <Text variant="p1" {...props} />;
}

export function P2(props: BaseTextProps) {
  return <Text variant="p2" {...props} />;
}

export function P3(props: BaseTextProps) {
  return <Text variant="p3" {...props} />;
}

// Encabezados
export function H1(props: BaseTextProps) {
  return <Text variant="h1" {...props} />;
}

export function H2(props: BaseTextProps) {
  return <Text variant="h2" {...props} />;
}

export function H3(props: BaseTextProps) {
  return <Text variant="h3" {...props} />;
}

export function H4(props: BaseTextProps) {
  return <Text variant="h4" {...props} />;
}

// Etiquetas
export function Label1(props: BaseTextProps) {
  return <Text variant="label1" {...props} />;
}

export function Label2(props: BaseTextProps) {
  return <Text variant="label2" {...props} />;
}

// Exportar el componente Text para casos personalizados
export { Text };

// Exportar un objeto que contiene todos los componentes
export const Typography = {
  P1,
  P2,
  P3,
  H1,
  H2,
  H3,
  H4,
  Label1,
  Label2,
  Text,
};
