import { ActivityIndicator, Pressable, Text } from 'react-native';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, { container: string; text: string }> = {
  primary: {
    container: 'bg-white',
    text: 'text-background-secondary font-bold',
  },
  secondary: {
    container: 'bg-surface border border-primary',
    text: 'text-primary font-semibold',
  },
  ghost: {
    container: 'bg-transparent border border-border',
    text: 'text-text-secondary font-semibold',
  },
};

const sizeClasses: Record<Size, { container: string; text: string }> = {
  sm: { container: 'h-10 px-4 rounded-xl', text: 'text-sm' },
  md: { container: 'h-14 px-6 rounded-2xl', text: 'text-base' },
  lg: { container: 'h-16 px-8 rounded-2xl', text: 'text-lg' },
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  fullWidth = true,
  disabled = false,
  loading = false,
  className = '',
}: ButtonProps) {
  const { container: vContainer, text: vText } = variantClasses[variant];
  const { container: sContainer, text: sText } = sizeClasses[size];
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`${vContainer} ${sContainer} ${widthClass} flex-row items-center justify-center active:opacity-75 disabled:opacity-40 ${className}`}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#1a0a2e' : '#8B5CF6'} />
      ) : (
        <Text className={`${vText} ${sText}`}>{label}</Text>
      )}
    </Pressable>
  );
}
