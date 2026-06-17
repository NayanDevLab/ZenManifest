import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Aurora } from "@/components/layout/Aurora";
import { ScreenShell } from "@/components/layout/ScreenShell";
import {
  ChecklistRow,
  DangerButton,
  Fab,
  FilterPill,
  GlassCard,
  Icon,
  IconButton,
  MoodChip,
  Pill,
  PhotoSlot,
  PrimaryButton,
  PrimaryPillButton,
  SecondaryButton,
  SliderControl,
  StatTile,
  TextWell,
  VibrationGauge,
} from "@/components/ui";
import { colors } from "@/theme/tokens";

const RITUALS = [
  { label: "Morning intention", done: true, icon: "sparkle" as const },
  { label: "FTBA entry", done: true, icon: "heart" as const },
  { label: "Visualization · 5 min", done: false, icon: "eye" as const },
  { label: "Gratitude · 3 entries", done: false, icon: "star" as const },
  { label: "Evening release", done: false, icon: "moon" as const },
];

const PRACTICES = [
  { title: "Morning manifestation", meta: "8 min · guided", gradient: ["#f0abfc", "#818cf8"] as const },
  { title: "Wealth frequency", meta: "21 min · 528 Hz", gradient: ["#fcd34d", "#f0abfc"] as const },
  { title: "Let-go & release", meta: "12 min · breathwork", gradient: ["#a78bfa", "#4c1d95"] as const },
];

const FILTERS = ["All", "Wealth", "Health", "Love", "Career"];
const MOODS = [
  { emoji: "✨", label: "Aligned" },
  { emoji: "🙏", label: "Grateful" },
  { emoji: "🌙", label: "Calm" },
  { emoji: "🔥", label: "Driven" },
];

export default function HomeScreen() {
  const [rituals, setRituals] = useState(RITUALS);
  const [filter, setFilter] = useState("All");
  const [mood, setMood] = useState("Aligned");
  const [confidence, setConfidence] = useState(72);

  const doneCount = rituals.filter((r) => r.done).length;

  const toggleRitual = (label: string) => {
    setRituals((prev) => prev.map((r) => (r.label === label ? { ...r, done: !r.done } : r)));
  };

  return (
    <ScreenShell
      auroras={
        <>
          <Aurora width={360} height={320} color="#f0abfc" opacity={0.4} style={{ right: -120, top: -60 }} />
          <Aurora width={300} height={300} color="#a78bfa" opacity={0.35} style={{ left: -100, top: 280 }} />
        </>
      }
      floating={<Fab style={{ position: "absolute", right: 22, bottom: 100 }} />}
    >
      {/* Greeting */}
      <View className="mt-2 flex-row items-start justify-between">
        <View>
          <Text className="mb-1 font-mono text-[12px] uppercase tracking-wider text-white/55">
            Thu, 8 May
          </Text>
          <Text className="font-serif text-[30px] leading-[34px] text-white">
            Good morning,{"\n"}
            <Text className="font-serif-italic text-pink">Aanya.</Text>
          </Text>
        </View>
        <View>
          <IconButton name="bell" />
          <View
            className="absolute right-[3px] top-[3px] h-[7px] w-[7px] rounded-full bg-gold"
            style={{ shadowColor: colors.gold, shadowOpacity: 0.8, shadowRadius: 6 }}
          />
        </View>
      </View>

      {/* Affirmation banner */}
      <View
        className="mt-[18px] flex-row items-center gap-3 rounded-tile border border-pink/20 px-4 py-[14px]"
        style={{ backgroundColor: "rgba(240,171,252,0.10)" }}
      >
        <Icon name="sparkle" size={16} color={colors.pink} />
        <Text className="flex-1 font-serif-italic text-[13px] leading-[18px] text-white/85">
          "I am a gentle magnet for what is meant for me."
        </Text>
      </View>

      {/* Vibration card */}
      <GlassCard style={{ marginTop: 14 }}>
        <View className="flex-row items-center gap-4">
          <VibrationGauge value={78} size={104} />
          <View className="flex-1">
            <Text className="font-mono text-[11px] uppercase tracking-wider text-white/55">
              Today's frequency
            </Text>
            <Text className="mt-1 font-serif text-[22px] leading-[24px] text-white">
              Aligned & rising
            </Text>
            <Text className="mt-1.5 text-[12px] leading-[17px] text-white/55">
              +12 since yesterday. Keep the rhythm.
            </Text>
          </View>
        </View>
      </GlassCard>

      {/* Stat row */}
      <View className="mt-3 flex-row gap-2">
        <StatTile value="4" label="Goals active" icon="target" color={colors.pink} />
        <StatTile value="12" label="FTBA streak" icon="flame" color={colors.gold} />
        <StatTile value="23" label="Manifested" icon="star" color={colors.violet} />
      </View>

      {/* Ritual checklist */}
      <View className="mt-[22px] flex-row items-baseline justify-between">
        <Text className="font-serif text-[19px] text-white">Today's ritual</Text>
        <Text className="font-mono text-[11px] text-pink/85">
          {doneCount} of {rituals.length}
        </Text>
      </View>
      <View className="mt-[10px] gap-[7px]">
        {rituals.map((r) => (
          <ChecklistRow
            key={r.label}
            label={r.label}
            done={r.done}
            icon={r.icon}
            onToggle={() => toggleRitual(r.label)}
          />
        ))}
      </View>

      {/* Practice carousel */}
      <Text className="mb-[10px] mt-[22px] font-serif text-[19px] text-white">
        Continue the practice
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mr-[22px]">
        <View className="flex-row gap-[10px] pr-[22px]">
          {PRACTICES.map((p) => (
            <View
              key={p.title}
              className="h-[168px] w-[158px] justify-between rounded-card p-[14px]"
              style={{ backgroundColor: p.gradient[0] }}
            >
              <View className="h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/20">
                <Icon name="play" size={14} color="#fff" />
              </View>
              <View>
                <Text className="font-serif text-[16px] leading-[19px] text-white">{p.title}</Text>
                <Text className="mt-1 font-mono text-[10.5px] tracking-wider text-white/85">
                  {p.meta}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Design system showcase */}
      <Text className="mb-[10px] mt-[26px] font-serif text-[19px] text-white">Design system</Text>

      <View className="mb-3 flex-row flex-wrap gap-2">
        <Pill accent={colors.pink}>Manifesting</Pill>
        <Pill accent={colors.gold}>Wealth</Pill>
        <Pill>Default</Pill>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mr-[22px] mb-3">
        <View className="flex-row gap-2 pr-[22px]">
          {FILTERS.map((f) => (
            <FilterPill key={f} label={f} active={f === filter} onPress={() => setFilter(f)} />
          ))}
        </View>
      </ScrollView>

      <View className="mb-3 flex-row flex-wrap gap-2">
        {MOODS.map((m) => (
          <MoodChip
            key={m.label}
            emoji={m.emoji}
            label={m.label}
            active={m.label === mood}
            onPress={() => setMood(m.label)}
          />
        ))}
      </View>

      <SliderControl label="Confidence" value={confidence} onChange={setConfidence} />

      <TextWell placeholder="Write a few words..." style={{ minHeight: 64 }} />

      <View className="mt-3">
        <PhotoSlot label="Vision photo" height={100} />
      </View>

      <View className="mt-3 gap-2">
        <PrimaryButton label="Seal today's FTBA" />
        <View className="flex-row gap-2">
          <PrimaryPillButton label="Quick add" />
          <SecondaryButton label="Edit entry" />
        </View>
        <DangerButton label="Delete entry" />
      </View>
    </ScreenShell>
  );
}
