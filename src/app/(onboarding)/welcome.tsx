import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { Aurora } from "@/components/layout/Aurora";
import { colors } from "@/theme/tokens";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <OnboardingShell
      auroras={
        <>
          <Aurora width={380} height={380} color="#c084fc" opacity={0.5} style={{ left: -80, top: -80 }} />
          <Aurora width={320} height={320} color="#f0abfc" opacity={0.4} style={{ right: -100, top: 200 }} />
        </>
      }
      starDensity={50}
      onCta={() => router.push("/(onboarding)/feature-daily")}
      ctaLabel="Begin"
    >
      {/* Orbiting circles hero */}
      <View className="flex-1 items-center justify-center">
        <View style={{ width: 240, height: 240, position: "relative" }}>
          {/* Dashed orbital rings */}
          {[18, 36, 54].map((inset) => (
            <View
              key={inset}
              style={{
                position: "absolute",
                top: inset,
                left: inset,
                right: inset,
                bottom: inset,
                borderRadius: 999,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "rgba(240,171,252,0.25)",
              }}
            />
          ))}

          {/* Glowing core */}
          <LinearGradient
            colors={["#fff7ed", "#f0abfc", "#a78bfa"]}
            start={{ x: 0.4, y: 0.3 }}
            end={{ x: 1, y: 1 }}
            style={{
              position: "absolute",
              top: 70,
              left: 70,
              right: 70,
              bottom: 70,
              borderRadius: 999,
              shadowColor: colors.pink,
              shadowOpacity: 0.6,
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 0 },
              elevation: 12,
            }}
          />

          {/* Accent dots */}
          <View style={{ position: "absolute", top: 20, left: "50%", width: 12, height: 12, borderRadius: 6, backgroundColor: colors.gold, shadowColor: colors.gold, shadowOpacity: 0.9, shadowRadius: 8, elevation: 6 }} />
          <View style={{ position: "absolute", top: "50%", right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: colors.pink, shadowColor: colors.pink, shadowOpacity: 0.9, shadowRadius: 8, elevation: 6 }} />
          <View style={{ position: "absolute", bottom: 30, left: 30, width: 10, height: 10, borderRadius: 5, backgroundColor: colors.violet, shadowColor: colors.violet, shadowOpacity: 0.9, shadowRadius: 8, elevation: 6 }} />
        </View>
      </View>

      {/* Text */}
      <View>
        <Text className="mb-3 font-mono text-[11px] uppercase tracking-[2px] text-pink/80">
          Welcome to ZenManifest
        </Text>
        <Text className="font-serif text-[38px] leading-[40px] text-white" style={{ letterSpacing: -0.5 }}>
          Your inner world,{"\n"}
          <Text className="font-serif-italic text-pink">made visible.</Text>
        </Text>
        <Text className="mb-7 mt-[14px] text-[14.5px] leading-[22px] text-white/65">
          Goals. Feelings. Beliefs. Inspired action.{"\n"}One sacred space to align it all.
        </Text>
      </View>
    </OnboardingShell>
  );
}
