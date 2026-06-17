import { Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients } from "@/theme/tokens";

interface FilterPillProps {
  label: string;
  active?: boolean;
  accent?: string;
  onPress?: () => void;
}

export function FilterPill({ label, active, accent, onPress }: FilterPillProps) {
  if (active) {
    return (
      <Pressable onPress={onPress}>
        <LinearGradient
          colors={accent ? [accent, accent] : gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="rounded-full px-[14px] py-[6px]"
        >
          <Text className="font-sans-semibold text-[12.5px] text-on-bright">{label}</Text>
        </LinearGradient>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-[14px] py-[6px]"
      style={
        accent
          ? { backgroundColor: `${accent}22`, borderColor: `${accent}44` }
          : undefined
      }
    >
      <Text className="font-sans text-[12.5px]" style={{ color: accent ?? colors.inkDim }}>
        {label}
      </Text>
    </Pressable>
  );
}
