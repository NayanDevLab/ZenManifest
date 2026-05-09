import { Text, type TextProps } from 'react-native';

type HeadingSize = 'xl' | 'lg' | 'md' | 'sm';

interface HeadingProps extends TextProps {
  size?: HeadingSize;
  muted?: boolean;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<HeadingSize, string> = {
  xl: 'text-3xl font-bold',
  lg: 'text-2xl font-bold',
  md: 'text-xl font-semibold',
  sm: 'text-base font-semibold',
};

export function Heading({ size = 'lg', muted = false, children, className = '', ...props }: HeadingProps) {
  const colorClass = muted ? 'text-text-secondary' : 'text-text-primary';
  return (
    <Text className={`${sizeClasses[size]} ${colorClass} ${className}`} {...props}>
      {children}
    </Text>
  );
}
