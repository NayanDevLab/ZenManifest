import { Text, View } from 'react-native';

type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted';

interface BadgeProps {
  label: string;
  color?: BadgeColor;
  className?: string;
}

const colorClasses: Record<BadgeColor, { container: string; text: string }> = {
  primary: { container: 'bg-primary/20 border border-primary/40', text: 'text-primary-lighter' },
  secondary: { container: 'bg-secondary/20 border border-secondary/40', text: 'text-secondary-light' },
  success: { container: 'bg-success/20 border border-success/40', text: 'text-success' },
  warning: { container: 'bg-warning/20 border border-warning/40', text: 'text-warning' },
  error: { container: 'bg-error/20 border border-error/40', text: 'text-error' },
  muted: { container: 'bg-surface border border-border', text: 'text-text-muted' },
};

export function Badge({ label, color = 'muted', className = '' }: BadgeProps) {
  const { container, text } = colorClasses[color];
  return (
    <View className={`${container} rounded-full px-3 py-1 ${className}`}>
      <Text className={`${text} text-xs font-medium`}>{label}</Text>
    </View>
  );
}
