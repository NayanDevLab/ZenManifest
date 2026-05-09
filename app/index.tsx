import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

import { storage } from '../lib/storage';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    storage.getOnboardingDone().then((done) => {
      // Types resolve from .expo cache — will be correct after first `expo start`
      router.replace((done ? '/(tabs)' : '/(auth)/splash') as never);
    });
  }, [router]);

  return <View className="flex-1 bg-background" />;
}
