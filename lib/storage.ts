import AsyncStorage from '@react-native-async-storage/async-storage';

const PREFIX = '@zenmanifest';

const key = (k: string) => `${PREFIX}/${k}`;

async function get<T>(k: string): Promise<T | null> {
  const raw = await AsyncStorage.getItem(key(k));
  if (raw === null) {
    return null;
  }
  try {
    return JSON.parse(raw) as T;
  } catch {
    return raw as unknown as T;
  }
}

async function set<T>(k: string, value: T): Promise<void> {
  await AsyncStorage.setItem(key(k), JSON.stringify(value));
}

async function remove(k: string): Promise<void> {
  await AsyncStorage.removeItem(key(k));
}

// ── Typed storage API ──────────────────────────────────────────────────────────

export const storage = {
  // Onboarding
  getOnboardingDone: () => get<boolean>('onboarding_done'),
  setOnboardingDone: (v: boolean) => set('onboarding_done', v),

  // Per-screen tutorial "don't show again"
  getTutorialSeen: (tutorialKey: string) => get<boolean>(`tutorial_seen/${tutorialKey}`),
  setTutorialSeen: (tutorialKey: string) => set(`tutorial_seen/${tutorialKey}`, true),

  // Journal lock
  getJournalPin: () => get<string>('journal_pin'),
  setJournalPin: (pin: string) => set('journal_pin', pin),
  removeJournalPin: () => remove('journal_pin'),

  getBiometricEnabled: () => get<boolean>('biometric_enabled'),
  setBiometricEnabled: (v: boolean) => set('biometric_enabled', v),

  // Future: theme / locale
  getTheme: () => get<'dark'>('theme'),
  setTheme: (v: 'dark') => set('theme', v),

  getLocale: () => get<string>('locale'),
  setLocale: (v: string) => set('locale', v),

  getNotificationsConfig: () => get<Record<string, unknown>>('notifications_config'),
  setNotificationsConfig: (v: Record<string, unknown>) => set('notifications_config', v),
};
