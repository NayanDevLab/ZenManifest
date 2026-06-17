import { Text, View } from "react-native";
import type { ReactNode } from "react";
import { IconButton } from "./IconButton";

interface ScreenHeaderProps {
  title: string;
  kicker?: string;
  onBack?: () => void;
  actions?: ReactNode;
}

export function ScreenHeader({ title, kicker, onBack, actions }: ScreenHeaderProps) {
  return (
    <View className="flex-row items-center justify-between">
      {onBack ? (
        <IconButton name="arrowLeft" onPress={onBack} />
      ) : (
        <View className="h-[38px] w-[38px]" />
      )}
      <View className="items-center">
        {kicker && (
          <Text className="font-mono text-[10.5px] uppercase tracking-wider text-ink-soft">
            {kicker}
          </Text>
        )}
        <Text className="font-serif text-[18px] text-white">{title}</Text>
      </View>
      <View className="flex-row gap-2">{actions ?? <View className="h-[38px] w-[38px]" />}</View>
    </View>
  );
}
