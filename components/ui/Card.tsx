import { type ReactNode } from 'react';
import { View, type ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  children: ReactNode;
  elevated?: boolean;
  bordered?: boolean;
  className?: string;
}

export function Card({ children, elevated = false, bordered = false, className = '', ...props }: CardProps) {
  const base = elevated ? 'bg-surface-elevated' : 'bg-surface';
  const border = bordered ? 'border border-border' : '';

  return (
    <View className={`${base} ${border} rounded-2xl p-4 ${className}`} {...props}>
      {children}
    </View>
  );
}
