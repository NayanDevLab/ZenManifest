import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View, type ViewStyle } from "react-native";
import type { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Starfield } from "@/components/layout/Starfield";
import { Icon } from "@/components/ui/Icon";
import { colors, shadows } from "@/theme/tokens";

interface OnboardingShellProps {
  children: ReactNode;
  auroras?: ReactNode;
  onSkip?: () => void;
  onCta: () => void;
  ctaLabel?: string;
  ctaLoading?: boolean;
  dots?: { total: number; active: number };
  contentStyle?: ViewStyle;
  starDensity?: number;
  centerContent?: boolean;
}

export function OnboardingShell({
  children,
  auroras,
  onSkip,
  onCta,
  ctaLabel = "Continue",
  ctaLoading,
  dots,
  contentStyle,
  starDensity = 40,
  centerContent = false,
}: OnboardingShellProps) {
  return (
    <View className="flex-1 bg-canvas">
      <Starfield density={starDensity} opacity={0.5} />
      {auroras}

      <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
        <View className="flex-1 px-7 pt-4">
          {/* Skip */}
          <View className="items-end">
            {onSkip ? (
              <Pressable onPress={onSkip} className="py-1.5 px-2">
                <Text className="text-[13px] text-white/55">Skip</Text>
              </Pressable>
            ) : (
              <View className="h-8" />
            )}
          </View>

          {/* Main content */}
          <View
            className={`flex-1 ${centerContent ? "items-center justify-center" : ""}`}
            style={contentStyle}
          >
            {children}
          </View>

          {/* Bottom: dots + CTA */}
          <View className="pb-[30px]">
            {dots && (
              <View className="mb-[22px] flex-row gap-1.5">
                {Array.from({ length: dots.total }).map((_, i) => (
                  <View
                    key={i}
                    style={{
                      width: i === dots.active ? 22 : 4,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor:
                        i === dots.active ? colors.pink : "rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </View>
            )}

            <Pressable onPress={onCta} disabled={ctaLoading} style={({ pressed }) => [shadows.glow, { opacity: pressed ? 0.88 : 1 }]}>
              <LinearGradient
                colors={["#ffffff", "#f5e6f7"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ height: 54, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, borderRadius: 18 }}
              >
                <Text
                  className="font-sans-semibold text-[15px]"
                  style={{ color: colors.onBright }}
                >
                  {ctaLabel}
                </Text>
                <Icon name="arrow" size={16} color={colors.onBright} strokeWidth={2} />
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
