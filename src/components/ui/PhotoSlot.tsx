import { Text, View, type ViewStyle } from "react-native";
import Svg, { Defs, Pattern, Rect } from "react-native-svg";

interface PhotoSlotProps {
  label: string;
  height?: number;
  style?: ViewStyle;
}

export function PhotoSlot({ label, height = 120, style }: PhotoSlotProps) {
  return (
    <View
      className="items-center justify-center overflow-hidden rounded-tile border border-white/10"
      style={[{ height }, style]}
    >
      <Svg width="100%" height="100%" style={{ position: "absolute" }}>
        <Defs>
          <Pattern id="stripes" width={16} height={16} patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
            <Rect width={8} height={16} fill="rgba(240,171,252,0.18)" />
            <Rect x={8} width={8} height={16} fill="rgba(167,139,250,0.18)" />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#stripes)" />
      </Svg>
      <Text className="font-mono uppercase text-ink-soft" style={{ fontSize: 10, letterSpacing: 0.6 }}>
        {label}
      </Text>
    </View>
  );
}
