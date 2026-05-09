import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { COLORS } from '../../constants/theme';

interface ProgressRingProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}

export function ProgressRing({
  value,
  max = 100,
  size = 100,
  strokeWidth = 8,
  label,
  sublabel,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(value / max, 1);
  const strokeDashoffset = circumference * (1 - progress);
  const center = size / 2;

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size}>
        {/* Track */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={COLORS.surface.elevated}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={COLORS.primary.DEFAULT}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${center}, ${center}`}
        />
      </Svg>
      {/* Center content */}
      <View className="absolute items-center justify-center">
        {label && <Text className="text-2xl font-bold text-text-primary">{label}</Text>}
        {sublabel && <Text className="text-xs text-text-muted">{sublabel}</Text>}
      </View>
    </View>
  );
}
