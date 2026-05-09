import '../global.css';

import {
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  useFonts,
} from '@expo-google-fonts/merriweather';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';

import { db } from '../lib/db';
import migrations from '../lib/db/migrations/migrations';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    Merriweather_400Regular,
    Merriweather_400Regular_Italic,
    Merriweather_700Bold,
  });

  const { success: migrationsSuccess, error: migrationsError } = useMigrations(db, migrations);

  const isReady = (fontsLoaded || fontsError) && (migrationsSuccess || migrationsError);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return <View className="flex-1 bg-background" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
