import { Text } from "react-native";
import { ScreenShell } from "@/components/layout/ScreenShell";
import { GlassCard, Icon, ScreenHeader } from "@/components/ui";
import { colors } from "@/theme/tokens";

export default function VisionScreen() {
  return (
    <ScreenShell>
      <ScreenHeader title="Vision" kicker="Vision board" />
      <GlassCard style={{ marginTop: 18 }}>
        <Icon name="vision" size={20} color={colors.sky} />
        <Text className="mt-3 font-serif text-[18px] text-white">Coming in Phase 6</Text>
        <Text className="mt-1.5 text-[13px] leading-[19px] text-white/55">
          Your vision board and visualization room will live here.
        </Text>
      </GlassCard>
    </ScreenShell>
  );
}
