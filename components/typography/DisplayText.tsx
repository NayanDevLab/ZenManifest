import { Text, type TextProps } from 'react-native';

interface DisplayTextProps extends TextProps {
  children: React.ReactNode;
  size?: 'xl' | 'lg' | 'md';
  accent?: boolean;
  className?: string;
}

const sizeClasses = {
  xl: 'text-5xl',
  lg: 'text-4xl',
  md: 'text-3xl',
};

export function DisplayText({
  children,
  size = 'lg',
  accent = false,
  className = '',
  ...props
}: DisplayTextProps) {
  const colorClass = accent ? 'text-secondary' : 'text-text-primary';
  return (
    <Text
      className={`${sizeClasses[size]} ${colorClass} font-display leading-tight ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}
