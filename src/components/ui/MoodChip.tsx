import { Pressable, Text } from "react-native";
import { colors } from "@/theme/tokens";

interface MoodChipProps {
  emoji: string;
  label: string;
  active?: boolean;
  accent?: string;
  onPress?: () => void;
}

export function MoodChip({ emoji, label, active, accent = colors.pink, onPress }: MoodChipProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-1.5 rounded-full px-3 py-1.5"
      style={{
        backgroundColor: active ? `${accent}33` : "rgba(255,255,255,0.05)",
        borderWidth: 1,
        borderColor: active ? `${accent}66` : "rgba(255,255,255,0.08)",
      }}
    >
      <Text style={{ fontSize: 14 }}>{emoji}</Text>
      <Text className="font-sans text-[12.5px]" style={{ color: active ? "#fff" : colors.inkDim }}>
        {label}
      </Text>
    </Pressable>
  );
}
