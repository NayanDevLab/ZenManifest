import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { Aurora } from "@/components/layout/Aurora";
import { Icon } from "@/components/ui/Icon";
import { VibrationGauge } from "@/components/ui/VibrationGauge";
import { colors } from "@/theme/tokens";

const PREVIEW_RITUALS = [
  { label: "Morning intention", done: true, icon: "sparkle" as const },
  { label: "FTBA entry", done: true, icon: "heart" as const },
  { label: "Evening release", done: false, icon: "moon" as const },
];

export default function FeatureDailyScreen() {
  const router = useRouter();

  return (
    <OnboardingShell
      auroras={
        <>
          <Aurora width={360} height={360} color="#c084fc" opacity={0.45} style={{ left: -90, top: -60 }} />
          <Aurora width={300} height={300} color="#f0abfc" opacity={0.35} style={{ right: -100, top: 240 }} />
        </>
      }
      starDensity={45}
      onSkip={() => router.push("/(onboarding)/language")}
      onCta={() => router.push("/(onboarding)/feature-vision")}
      dots={{ total: 3, active: 0 }}
    >
      {/* Visual preview */}
      <View className="flex-1 items-center justify-center gap-[22px]">
        <VibrationGauge value={78} size={148} />
        <View className="w-full max-w-[260px] gap-2">
          {PREVIEW_RITUALS.map((r) => (
            <View
              key={r.label}
              className="flex-row items-center gap-[11px] rounded-[13px] px-[13px] py-[10px]"
              style={{
                backgroundColor: r.done ? "rgba(240,171,252,0.08)" : "rgba(255,255,255,0.04)",
                borderWidth: 1,
                borderColor: r.done ? "rgba(240,171,252,0.18)" : "rgba(255,255,255,0.07)",
              }}
            >
              <View
                className="h-5 w-5 items-center justify-center rounded-[7px]"
                style={
                  r.done
                    ? undefined
                    : { borderWidth: 1.4, borderColor: "rgba(255,255,255,0.25)" }
                }
              >
                {r.done && (
                  <LinearGradient
                    colors={["#f0abfc", "#c4b5fd"]}
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderRadius: 7 }}
                  />
                )}
                {r.done && <Icon name="check" size={11} color={colors.onBright} strokeWidth={2.6} />}
              </View>
              <Text
                className="flex-1 text-[12.5px]"
                style={{
                  color: r.done ? "rgba(255,255,255,0.55)" : "#fff",
                  textDecorationLine: r.done ? "line-through" : "none",
                }}
              >
                {r.label}
              </Text>
              <Icon name={r.icon} size={13} color={r.done ? "rgba(240,171,252,0.6)" : "rgba(255,255,255,0.4)"} />
            </View>
          ))}
        </View>
      </View>

      {/* Text */}
      <View>
        <Text className="mb-[10px] font-mono text-[11px] uppercase tracking-[2px] text-pink/80">
          Daily ritual
        </Text>
        <Text className="font-serif text-[33px] leading-[36px] text-white" style={{ letterSpacing: -0.4 }}>
          Tune your{"\n"}
          <Text className="font-serif-italic text-pink">frequency daily.</Text>
        </Text>
        <Text className="mb-2 mt-3 text-[14px] leading-[21px] text-white/60">
          Check your vibration, move through Feel · Think · Believe · Act, and keep your streak alive — one gentle rhythm each day.
        </Text>
      </View>
    </OnboardingShell>
  );
}
