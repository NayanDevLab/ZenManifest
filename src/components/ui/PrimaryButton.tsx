import { Pressable, Text, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { gradients, shadows } from "@/theme/tokens";

interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
}

export function PrimaryButton({ label, onPress, icon, disabled, style }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        shadows.glow,
        { opacity: disabled ? 0.5 : pressed ? 0.85 : 1 },
        style,
      ]}
    >
      <LinearGradient
        colors={gradients.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-14 flex-row items-center justify-center gap-2 rounded-card px-6"
      >
        {icon}
        <Text className="font-sans-semibold text-[15px] text-on-bright">{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
