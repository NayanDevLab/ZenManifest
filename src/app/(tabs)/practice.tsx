import { Text } from "react-native";
import { ScreenShell } from "@/components/layout/ScreenShell";
import { GlassCard, Icon, ScreenHeader } from "@/components/ui";
import { colors } from "@/theme/tokens";

export default function PracticeScreen() {
  return (
    <ScreenShell>
      <ScreenHeader title="Practice" kicker="Techniques & sessions" />
      <GlassCard style={{ marginTop: 18 }}>
        <Icon name="practice" size={20} color={colors.violet} />
        <Text className="mt-3 font-serif text-[18px] text-white">Coming in later phases</Text>
        <Text className="mt-1.5 text-[13px] leading-[19px] text-white/55">
          Guided practices and manifestation techniques (55x5, 369, Scripting, Pillow, Let-Go,
          Water) will appear here.
        </Text>
      </GlassCard>
    </ScreenShell>
  );
}
