import { Pressable, Text } from 'react-native';

interface TutorialButtonProps {
  onPress: () => void;
  className?: string;
}

export function TutorialButton({ onPress, className = '' }: TutorialButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-primary/10 active:opacity-70 ${className}`}
    >
      <Text className="text-xs font-bold text-primary">?</Text>
    </Pressable>
  );
}
