import { Text } from "react-native";
import { ScreenShell } from "@/components/layout/ScreenShell";
import { GlassCard, Icon, ScreenHeader } from "@/components/ui";
import { colors } from "@/theme/tokens";

export default function ProfileScreen() {
  return (
    <ScreenShell>
      <ScreenHeader title="Profile" kicker="You & settings" />
      <GlassCard style={{ marginTop: 18 }}>
        <Icon name="profile" size={20} color={colors.lilac} />
        <Text className="mt-3 font-serif text-[18px] text-white">Coming in Phase 20</Text>
        <Text className="mt-1.5 text-[13px] leading-[19px] text-white/55">
          Profile, settings, export/import, and the menu to all other screens will live here.
        </Text>
      </GlassCard>
    </ScreenShell>
  );
}
