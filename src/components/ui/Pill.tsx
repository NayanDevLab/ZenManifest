import { Text, View, type ViewStyle } from "react-native";
import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  accent?: string;
  style?: ViewStyle;
}

export function Pill({ children, accent, style }: PillProps) {
  return (
    <View
      className="flex-row items-center gap-1.5 rounded-full px-[11px] py-[5px]"
      style={[
        {
          backgroundColor: accent ? `${accent}22` : "rgba(255,255,255,0.08)",
          borderWidth: 1,
          borderColor: accent ? `${accent}44` : "rgba(255,255,255,0.12)",
        },
        style,
      ]}
    >
      {typeof children === "string" ? (
        <Text
          className="font-sans-medium"
          style={{ fontSize: 11, letterSpacing: 0.2, color: accent ?? "rgba(255,255,255,0.85)" }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}
