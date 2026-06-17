import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { Aurora } from "@/components/layout/Aurora";
import { setLanguage } from "@/lib/storage";
import { colors } from "@/theme/tokens";

const LANGUAGES = [
  {
    id: "en",
    script: "Aa",
    name: "English",
    native: "English",
  },
  {
    id: "hi",
    script: "अ",
    name: "Hindi",
    native: "हिंदी",
  },
  {
    id: "gu",
    script: "અ",
    name: "Gujarati",
    native: "ગુજરાતી",
  },
];

export default function LanguageScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState("en");

  const handleContinue = async () => {
    await setLanguage(selected);
    router.push("/(onboarding)/name");
  };

  return (
    <OnboardingShell
      auroras={
        <>
          <Aurora width={340} height={320} color="#f0abfc" opacity={0.35} style={{ right: -80, top: -40 }} />
          <Aurora width={280} height={280} color="#818cf8" opacity={0.3} style={{ left: -80, bottom: 80 }} />
        </>
      }
      starDensity={35}
      onCta={handleContinue}
      ctaLabel="Continue"
    >
      {/* Heading */}
      <View className="mt-6">
        <Text className="mb-[10px] font-mono text-[11px] uppercase tracking-[2px] text-pink/80">
          Your language
        </Text>
        <Text className="font-serif text-[34px] leading-[37px] text-white" style={{ letterSpacing: -0.4 }}>
          Choose how you{"\n"}
          <Text className="font-serif-italic text-pink">speak your truth.</Text>
        </Text>
        <Text className="mt-3 text-[13.5px] leading-[20px] text-white/60">
          All affirmations, prompts, and greetings will appear in your chosen language.
        </Text>
      </View>

      {/* Language cards */}
      <View className="mt-8 gap-3">
        {LANGUAGES.map((lang) => {
          const isActive = selected === lang.id;
          return (
            <Pressable
              key={lang.id}
              onPress={() => setSelected(lang.id)}
              style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
            >
              <View
                className="overflow-hidden rounded-card"
                style={{
                  borderWidth: isActive ? 1.5 : 1,
                  borderColor: isActive ? colors.pink : "rgba(255,255,255,0.1)",
                }}
              >
                {isActive && (
                  <LinearGradient
                    colors={["rgba(240,171,252,0.14)", "rgba(167,139,250,0.06)"]}
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                  />
                )}
                <View className="flex-row items-center gap-4 px-5 py-4">
                  {/* Script badge */}
                  <View
                    className="h-[50px] w-[50px] items-center justify-center rounded-[14px]"
                    style={{
                      backgroundColor: isActive
                        ? "rgba(240,171,252,0.18)"
                        : "rgba(255,255,255,0.06)",
                      borderWidth: 1,
                      borderColor: isActive ? "rgba(240,171,252,0.35)" : "rgba(255,255,255,0.08)",
                    }}
                  >
                    <Text
                      className="font-serif"
                      style={{
                        fontSize: 22,
                        color: isActive ? colors.pink : colors.inkDim,
                        lineHeight: 26,
                      }}
                    >
                      {lang.script}
                    </Text>
                  </View>

                  {/* Labels */}
                  <View className="flex-1">
                    <Text className="font-sans-semibold text-[15px] text-white">{lang.name}</Text>
                    <Text
                      className="mt-0.5 font-sans text-[13px]"
                      style={{ color: isActive ? colors.lilac : colors.inkSoft }}
                    >
                      {lang.native}
                    </Text>
                  </View>

                  {/* Check */}
                  {isActive && (
                    <View
                      className="h-6 w-6 items-center justify-center rounded-full"
                      style={{ backgroundColor: colors.pink }}
                    >
                      <Text className="text-[12px] font-bold text-on-bright">✓</Text>
                    </View>
                  )}
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>
    </OnboardingShell>
  );
}
