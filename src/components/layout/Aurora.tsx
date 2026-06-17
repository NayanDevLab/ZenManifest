import { View, type ViewStyle } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

interface AuroraProps {
  width: number;
  height: number;
  color: string;
  opacity?: number;
  style?: ViewStyle;
}

export function Aurora({ width, height, color, opacity = 0.4, style }: AuroraProps) {
  const gradId = `aurora-${color.replace("#", "")}`;

  return (
    <View pointerEvents="none" style={[{ position: "absolute", width, height }, style]}>
      <Svg width={width} height={height}>
        <Defs>
          <RadialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={color} stopOpacity={opacity} />
            <Stop offset="100%" stopColor={color} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Rect width={width} height={height} fill={`url(#${gradId})`} />
      </Svg>
    </View>
  );
}
