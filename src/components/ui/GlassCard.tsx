import { View, type ViewProps } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

interface GlassCardProps extends ViewProps {
  padding?: number;
}

export function GlassCard({ children, style, padding = 18, ...rest }: GlassCardProps) {
  return (
    <View className="overflow-hidden rounded-glass border border-white/10" style={style} {...rest}>
      <BlurView
        intensity={20}
        tint="dark"
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <LinearGradient
        colors={["rgba(255,255,255,0.08)", "rgba(255,255,255,0.03)"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <View style={{ padding }}>{children}</View>
    </View>
  );
}
