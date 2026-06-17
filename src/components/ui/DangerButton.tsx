import { Pressable, Text, type ViewStyle } from "react-native";
import type { ReactNode } from "react";

interface DangerButtonProps {
  label: string;
  onPress?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
}

export function DangerButton({ label, onPress, icon, disabled, style }: DangerButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className="h-[46px] flex-row items-center justify-center gap-2 rounded-row border border-rose/30 bg-rose/[0.08] px-5"
      style={({ pressed }) => [{ opacity: disabled ? 0.5 : pressed ? 0.7 : 1 }, style]}
    >
      {icon}
      <Text className="font-sans-medium text-[12.5px] text-rose">{label}</Text>
    </Pressable>
  );
}
