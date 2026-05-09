import { Text, type TextProps } from 'react-native';

type BodySize = 'lg' | 'md' | 'sm' | 'xs';

interface BodyTextProps extends TextProps {
  size?: BodySize;
  muted?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<BodySize, string> = {
  lg: 'text-lg',
  md: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
};

export function BodyText({
  size = 'md',
  muted = false,
  secondary = false,
  children,
  className = '',
  ...props
}: BodyTextProps) {
  let colorClass = 'text-text-primary';
  if (muted) {
    colorClass = 'text-text-muted';
  } else if (secondary) {
    colorClass = 'text-text-secondary';
  }

  return (
    <Text className={`${sizeClasses[size]} ${colorClass} ${className}`} {...props}>
      {children}
    </Text>
  );
}
