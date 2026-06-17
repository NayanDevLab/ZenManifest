import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, type IconName } from "./Icon";
import { colors, gradients } from "@/theme/tokens";

interface ChecklistRowProps {
  label: string;
  done?: boolean;
  icon?: IconName;
  onToggle?: () => void;
}

export function ChecklistRow({ label, done, icon, onToggle }: ChecklistRowProps) {
  return (
    <Pressable
      onPress={onToggle}
      className="flex-row items-center gap-3 rounded-row px-[14px] py-3"
      style={{
        backgroundColor: done ? "rgba(240,171,252,0.08)" : "rgba(255,255,255,0.04)",
        borderWidth: 1,
        borderColor: done ? "rgba(240,171,252,0.18)" : "rgba(255,255,255,0.07)",
      }}
    >
      <View
        className="h-6 w-6 items-center justify-center rounded-[8px]"
        style={!done ? { borderWidth: 1.5, borderColor: "rgba(255,255,255,0.25)" } : undefined}
      >
        {done && (
          <LinearGradient
            colors={gradients.primary}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: 8 }}
          />
        )}
        {done && <Icon name="check" size={13} color={colors.onBright} strokeWidth={2.5} />}
      </View>
      <Text
        className="flex-1 text-[13.5px]"
        style={{
          color: done ? "rgba(255,255,255,0.55)" : "#fff",
          textDecorationLine: done ? "line-through" : "none",
        }}
      >
        {label}
      </Text>
      {icon && (
        <Icon name={icon} size={14} color={done ? "rgba(240,171,252,0.6)" : "rgba(255,255,255,0.4)"} />
      )}
    </Pressable>
  );
}
