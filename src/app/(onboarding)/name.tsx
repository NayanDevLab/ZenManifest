import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Starfield } from "@/components/layout/Starfield";
import { Aurora } from "@/components/layout/Aurora";
import { Icon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { setOnboardingCompleted, setUserName } from "@/lib/storage";
import { colors, shadows } from "@/theme/tokens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NameScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 600);
    return () => clearTimeout(t);
  }, []);

  const handleDone = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    await setUserName(trimmed);
    await setOnboardingCompleted(true);
    router.replace("/home");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0c0816" }}>
      <Starfield density={30} opacity={0.4} />
      <Aurora width={340} height={320} color="#f0abfc" opacity={0.35} style={{ right: -100, top: -60 }} />

      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back */}
          <View style={{ paddingHorizontal: 28, paddingTop: 16 }}>
            <IconButton name="arrowLeft" onPress={() => router.back()} />
          </View>

          {/* Content */}
          <View style={{ flex: 1, paddingHorizontal: 28, paddingTop: 26 }}>
            <Text className="mb-[10px] font-mono text-[11px] uppercase tracking-[2px] text-pink/80">
              Last step
            </Text>
            <Text
              className="font-serif text-[34px] leading-[37px] text-white"
              style={{ letterSpacing: -0.4 }}
            >
              What shall we{"\n"}
              <Text className="font-serif-italic text-pink">call you?</Text>
            </Text>
            <Text className="mt-3 text-[13.5px] leading-[20px] text-white/60">
              We'll weave your name into affirmations and morning greetings. Just for you.
            </Text>

            {/* Name input */}
            <View style={{ marginTop: 28 }}>
              <Text className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/45">
                Your name
              </Text>
              <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 18,
                    paddingHorizontal: 18,
                    paddingVertical: 16,
                    backgroundColor: "rgba(0,0,0,0.22)",
                    borderWidth: 1,
                    borderColor: isFocused
                      ? "rgba(240,171,252,0.4)"
                      : "rgba(255,255,255,0.08)",
                  }}
                >
                  <TextInput
                    ref={inputRef}
                    value={name}
                    onChangeText={setName}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="e.g. Aanya"
                    placeholderTextColor={colors.inkSoft}
                    returnKeyType="done"
                    onSubmitEditing={handleDone}
                    style={{ flex: 1, fontSize: 22, color: "#f6f1ff", lineHeight: 28 }}
                  />
                </View>
              </TouchableOpacity>

              <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", gap: 6 }}>
                <Icon name="lock" size={11} color="rgba(255,255,255,0.45)" />
                <Text className="font-mono text-[10.5px] tracking-[0.3px] text-white/45">
                  Stored only on this device — no account needed.
                </Text>
              </View>
            </View>
          </View>

          {/* Enter my space button */}
          <View style={{ paddingHorizontal: 28, paddingBottom: 24, paddingTop: 32 }}>
            <TouchableOpacity
              onPress={handleDone}
              disabled={!name.trim()}
              activeOpacity={0.88}
              style={[shadows.glow, { opacity: !name.trim() ? 0.45 : 1 }]}
            >
              <LinearGradient
                colors={["#f0abfc", "#a78bfa"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ height: 52, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, borderRadius: 18 }}
              >
                <Text className="font-sans-semibold text-[15px] text-on-bright">
                  Enter my space
                </Text>
                <Icon name="arrow" size={16} color={colors.onBright} strokeWidth={2} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
