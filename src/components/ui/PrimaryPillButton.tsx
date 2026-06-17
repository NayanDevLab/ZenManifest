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
        style={{ height: 34, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, borderRadius: 999, paddingHorizontal: 14 }}
      >
        {icon}
        <Text className="font-sans-semibold text-[12.5px] text-on-bright">{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
