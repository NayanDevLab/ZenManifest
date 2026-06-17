import { Pressable, type ViewStyle } from "react-native";
import { Icon, type IconName } from "./Icon";
import { colors } from "@/theme/tokens";

interface IconButtonProps {
  name: IconName;
  onPress?: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export function IconButton({ name, onPress, size = 18, color = colors.ink, style }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="h-[38px] w-[38px] items-center justify-center rounded-field border border-white/10 bg-white/[0.06]"
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, style]}
    >
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
}
