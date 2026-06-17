import { Text } from "react-native";
import { ScreenShell } from "@/components/layout/ScreenShell";
import { GlassCard, Icon, ScreenHeader } from "@/components/ui";
import { colors } from "@/theme/tokens";

export default function FtbaScreen() {
  return (
    <ScreenShell>
      <ScreenHeader title="FTBA" kicker="Feel · Think · Believe · Act" />
      <GlassCard style={{ marginTop: 18 }}>
        <Icon name="ftba" size={20} color={colors.pink} />
        <Text className="mt-3 font-serif text-[18px] text-white">Coming in Phase 3</Text>
        <Text className="mt-1.5 text-[13px] leading-[19px] text-white/55">
          Your daily Feel · Think · Believe · Act ritual will live here.
        </Text>
      </GlassCard>
    </ScreenShell>
  );
}
