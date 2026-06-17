import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { getOnboardingCompleted } from "@/lib/storage";

export default function Gate() {
  const [target, setTarget] = useState<"onboarding" | "home" | null>(null);

  useEffect(() => {
    getOnboardingCompleted().then((done) =>
      setTarget(done ? "home" : "onboarding"),
    );
  }, []);

  if (!target) return <View className="flex-1 bg-canvas" />;

  if (target === "onboarding") return <Redirect href="/(onboarding)/welcome" />;
  return <Redirect href="/home" />;
}
