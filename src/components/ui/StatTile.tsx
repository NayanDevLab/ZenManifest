import { Text, View } from "react-native";
import { Icon, type IconName } from "./Icon";

interface StatTileProps {
  value: string;
  label: string;
  icon: IconName;
  color: string;
}

export function StatTile({ value, label, icon, color }: StatTileProps) {
  return (
    <View className="flex-1 rounded-tile border border-hairline bg-panel px-[10px] py-3">
      <Icon name={icon} size={14} color={color} />
      <Text className="mt-1.5 font-serif text-[24px] leading-none text-white">{value}</Text>
      <Text className="mt-1 text-[10px] text-white/50">{label}</Text>
    </View>
  );
}
