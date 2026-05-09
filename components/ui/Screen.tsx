import { type ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenProps {
  children: ReactNode;
  scrollable?: boolean;
  className?: string;
}

export function Screen({ children, scrollable = false, className = '' }: ScreenProps) {
  if (scrollable) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <ScrollView
          className={`flex-1 ${className}`}
          contentContainerClassName="pb-8"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className={`flex-1 ${className}`}>{children}</View>
    </SafeAreaView>
  );
}
