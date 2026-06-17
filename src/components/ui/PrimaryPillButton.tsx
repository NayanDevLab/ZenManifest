import { Pressable, Text, type ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { gradients, shadows } from "@/theme/tokens";

interface PrimaryPillButtonProps {
  label: string;
  onPress?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
}

export function PrimaryPillButton({ label, onPress, icon, disabled, style }: PrimaryPillButtonProps) {
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
        className="h-[34px] flex-row items-center justify-center gap-1.5 rounded-full px-[14px]"
      >
        {icon}
        <Text className="font-sans-semibold text-[12.5px] text-on-bright">{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
