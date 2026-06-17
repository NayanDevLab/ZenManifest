import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { BlurView } from "expo-blur";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { Aurora } from "@/components/layout/Aurora";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { colors } from "@/theme/tokens";

const TECHNIQUES = ["55×5", "369", "Scripting", "Pillow", "Let-Go", "Water"];

export default function FeatureOfflineScreen() {
  const router = useRouter();

  return (
    <OnboardingShell
      auroras={
        <Aurora width={380} height={380} color="#a78bfa" opacity={0.42} style={{ left: -80, bottom: -100 }} />
      }
      starDensity={38}
      onSkip={() => router.push("/(onboarding)/language")}
      onCta={() => router.push("/(onboarding)/language")}
      ctaLabel="Get started"
      dots={{ total: 3, active: 2 }}
    >
      <View className="flex-1 items-center justify-center">
        {/* Glass lock icon with pink aura */}
        <View className="mb-[30px] items-center justify-center">
          <View
            style={{
              position: "absolute",
              top: -28,
              left: -28,
              right: -28,
              bottom: -28,
              borderRadius: 999,
              backgroundColor: "rgba(240,171,252,0.15)",
            }}
          />
          <View
            className="h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-[28px] border border-white/20"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <BlurView
              intensity={20}
              tint="dark"
              style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
            />
            <Icon name="lock" size={38} color={colors.pink} strokeWidth={1.4} />
          </View>
        </View>

        {/* Technique pills */}
        <View className="flex-row flex-wrap justify-center gap-[7px]" style={{ maxWidth: 270 }}>
          {TECHNIQUES.map((t) => (
            <View
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-[6px]"
            >
              <Text className="font-mono text-[11.5px] text-white/75">{t}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Text */}
      <View>
        <Text className="mb-[10px] font-mono text-[11px] uppercase tracking-[2px] text-pink/80">
          Sacred & offline
        </Text>
        <Text className="font-serif text-[33px] leading-[36px] text-white" style={{ letterSpacing: -0.4 }}>
          Ancient techniques,{"\n"}
          <Text className="font-serif-italic text-pink">kept private.</Text>
        </Text>
        <Text className="mb-[18px] mt-3 text-[14px] leading-[21px] text-white/60">
          Practice timeless rituals at your own pace. No account, no internet — every word stays on this device, always.
        </Text>
        <View className="flex-row flex-wrap gap-2">
          <Pill accent={colors.pink}>100% offline</Pill>
          <Pill accent={colors.violet}>on-device only</Pill>
          <Pill accent={colors.gold}>no sign-up</Pill>
        </View>
      </View>
    </OnboardingShell>
  );
}
