import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  onboardingCompleted: "zm:onboardingCompleted",
  userName: "zm:userName",
  language: "zm:language",
} as const;

export async function getOnboardingCompleted(): Promise<boolean> {
  return (await AsyncStorage.getItem(KEYS.onboardingCompleted)) === "true";
}

export async function setOnboardingCompleted(value: boolean): Promise<void> {
  await AsyncStorage.setItem(KEYS.onboardingCompleted, value ? "true" : "false");
}

export async function getUserName(): Promise<string | null> {
  return AsyncStorage.getItem(KEYS.userName);
}

export async function setUserName(name: string): Promise<void> {
  await AsyncStorage.setItem(KEYS.userName, name);
}

export async function getLanguage(): Promise<string | null> {
  return AsyncStorage.getItem(KEYS.language);
}

export async function setLanguage(language: string): Promise<void> {
  await AsyncStorage.setItem(KEYS.language, language);
}
