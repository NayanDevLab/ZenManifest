import { Pressable, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, type IconName } from "./Icon";
import { colors, gradients, shadows } from "@/theme/tokens";

interface FabProps {
  onPress?: () => void;
  icon?: IconName;
  style?: ViewStyle;
}

export function Fab({ onPress, icon = "plus", style }: FabProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [shadows.glow, { opacity: pressed ? 0.85 : 1 }, style]}
    >
      <LinearGradient
        colors={gradients.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-14 w-14 items-center justify-center rounded-fab"
      >
        <Icon name={icon} size={22} color={colors.onBright} strokeWidth={2.2} />
      </LinearGradient>
    </Pressable>
  );
}
