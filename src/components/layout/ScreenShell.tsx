import type { ReactNode } from "react";
import { ScrollView, View, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Starfield } from "./Starfield";

interface ScreenShellProps {
  children: ReactNode;
  auroras?: ReactNode;
  floating?: ReactNode;
  scroll?: boolean;
  starDensity?: number;
  contentStyle?: ViewStyle;
}

export function ScreenShell({
  children,
  auroras,
  floating,
  scroll = true,
  starDensity = 35,
  contentStyle,
}: ScreenShellProps) {
  return (
    <View className="flex-1 bg-canvas">
      <Starfield density={starDensity} opacity={0.4} />
      {auroras}
      <SafeAreaView className="flex-1" edges={["top"]}>
        {scroll ? (
          <ScrollView
            className="flex-1 px-[22px]"
            contentContainerStyle={[{ paddingTop: 10, paddingBottom: 130 }, contentStyle]}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View className="flex-1 px-[22px]" style={[{ paddingTop: 10 }, contentStyle]}>
            {children}
          </View>
        )}
      </SafeAreaView>
      {floating}
    </View>
  );
}
