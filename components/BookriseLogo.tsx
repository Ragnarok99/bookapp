import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, Text } from 'react-native';

interface BookriseLogoProps {
  size?: number;
  color?: string;
  showText?: boolean;
}

export default function BookriseLogo({
  size = 80,
  color = '#FFFFFF',
  showText = true,
}: BookriseLogoProps) {
  return (
    <View className="items-center">
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Path
          d="M9 3v18M4 15h7M4 11h7M15 9l5-5M15 5h5v5"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>

      {showText && (
        <Text className="text-white text-3xl font-montserrat-medium mt-3">
          Bookrise
        </Text>
      )}
    </View>
  );
}
