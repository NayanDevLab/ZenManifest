import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";
import { Aurora } from "@/components/layout/Aurora";
import { Icon } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export default function FeatureVisionScreen() {
  const router = useRouter();

  return (
    <OnboardingShell
      auroras={
        <>
          <Aurora width={360} height={360} color="#f9a8d4" opacity={0.4} style={{ right: -100, top: -60 }} />
          <Aurora width={300} height={300} color="#818cf8" opacity={0.35} style={{ left: -90, bottom: 60 }} />
        </>
      }
      starDensity={40}
      onSkip={() => router.push("/(onboarding)/language")}
      onCta={() => router.push("/(onboarding)/feature-offline")}
      dots={{ total: 3, active: 1 }}
    >
      {/* Vision grid preview */}
      <View className="flex-1 items-center justify-center">
        <View
          className="flex-row gap-[10px]"
          style={{ maxWidth: 260, transform: [{ rotate: "-3deg" }] }}
        >
          {/* Left column: tall tile */}
          <View className="flex-1 gap-[10px]">
            <PhotoSlot label="dream home" height={128} />
          </View>

          {/* Right column: two small + one gradient tile */}
          <View className="flex-1 gap-[10px]">
            <View className="flex-row gap-[10px]">
              <View className="flex-1">
                <PhotoSlot label="travel" height={58} />
              </View>
              <View className="flex-1">
                <PhotoSlot label="calm" height={58} />
              </View>
            </View>
            <View className="flex-row gap-[10px]">
              <View className="flex-1">
                <PhotoSlot label="studio" height={58} />
              </View>
              <View className="flex-1">
                <LinearGradient
                  colors={["#f0abfc", "#818cf8"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{ height: 58, borderRadius: 16, padding: 13 }}
                >
                  <Icon name="sparkle" size={16} color="#fff" />
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Text */}
      <View>
        <Text className="mb-[10px] font-mono text-[11px] uppercase tracking-[2px] text-pink/80">
          Vision board
        </Text>
        <Text className="font-serif text-[33px] leading-[36px] text-white" style={{ letterSpacing: -0.4 }}>
          See your future,{"\n"}
          <Text className="font-serif-italic text-pink">then live it.</Text>
        </Text>
        <Text className="mb-2 mt-3 text-[14px] leading-[21px] text-white/60">
          Collage the life you're calling in, then step into the Visualization Room to feel it as already real.
        </Text>
      </View>
    </OnboardingShell>
  );
}
