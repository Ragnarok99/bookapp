import React, { ReactNode } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export type TextVariant =
  | 'default'
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'error'
  | 'success'
  | 'white';

export interface TextProps extends RNTextProps {
  children: ReactNode;
  variant?:
    | 'p1'
    | 'p2'
    | 'p3'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'label1'
    | 'label2';
  color?: TextVariant;
  weight?: 'extrabold' | 'bold' | 'semibold' | 'medium' | 'regular' | 'light';
  className?: string;
}

export function Text({
  children,
  variant = 'p1',
  color = 'default',
  weight,
  className = '',
  style,
  ...props
}: TextProps) {
  // Determinar clases de tailwind para la variante
  let variantClasses = '';

  // Definir clases de tamaño basadas en la variante
  switch (variant) {
    case 'p1':
      variantClasses = 'text-p1';
      break;
    case 'p2':
      variantClasses = 'text-p2';
      break;
    case 'p3':
      variantClasses = 'text-p3';
      break;
    case 'h1':
      variantClasses = 'text-h1';
      break;
    case 'h2':
      variantClasses = 'text-h2';
      break;
    case 'h3':
      variantClasses = 'text-h3';
      break;
    case 'h4':
      variantClasses = 'text-h4';
      break;
    case 'label1':
      variantClasses = 'text-label1';
      break;
    case 'label2':
      variantClasses = 'text-label2';
      break;
  }

  // Determinar fuente basada en el peso o la variante
  let fontClasses = '';

  // Si se proporciona un peso específico, usarlo
  if (weight) {
    switch (weight) {
      case 'extrabold':
        fontClasses = 'font-montserrat-extrabold';
        break;
      case 'bold':
        fontClasses = 'font-montserrat-bold';
        break;
      case 'semibold':
        fontClasses = 'font-montserrat-semibold';
        break;
      case 'medium':
        fontClasses = 'font-montserrat-medium';
        break;
      case 'regular':
        fontClasses = 'font-montserrat-regular';
        break;
      case 'light':
        fontClasses = 'font-montserrat-light';
        break;
    }
  } else {
    // Si no se proporciona un peso, usar el que corresponde por defecto según el tipo
    if (variant.startsWith('h')) {
      fontClasses = 'font-montserrat-bold';
    } else if (variant.startsWith('label')) {
      fontClasses = 'font-montserrat-semibold';
    } else {
      fontClasses = 'font-montserrat-regular';
    }
  }

  // Determinar el color
  let colorClasses = '';

  switch (color) {
    case 'default':
      colorClasses = 'text-text';
      break;
    case 'muted':
      colorClasses = 'text-text-muted';
      break;
    case 'primary':
      colorClasses = 'text-primary';
      break;
    case 'secondary':
      colorClasses = 'text-secondary';
      break;
    case 'accent':
      colorClasses = 'text-accent';
      break;
    case 'error':
      colorClasses = 'text-error';
      break;
    case 'success':
      colorClasses = 'text-success';
      break;
    case 'white':
      colorClasses = 'text-white';
      break;
  }

  return (
    <RNText
      className={`${variantClasses} ${fontClasses} ${colorClasses} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </RNText>
  );
}
