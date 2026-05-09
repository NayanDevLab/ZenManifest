import { Text, View } from 'react-native';

interface StreakBadgeProps {
  count: number;
  label?: string;
}

export function StreakBadge({ count, label = 'streak' }: StreakBadgeProps) {
  return (
    <View className="flex-row items-center gap-1 rounded-full border border-warning/40 bg-warning/10 px-3 py-1">
      <Text className="text-warning">🔥</Text>
      <Text className="text-sm font-bold text-warning">{count}</Text>
      <Text className="text-xs text-warning/70">{label}</Text>
    </View>
  );
}
