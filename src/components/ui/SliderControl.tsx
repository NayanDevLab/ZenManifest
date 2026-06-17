import { useRef, useState } from "react";
import { PanResponder, Text, View, type LayoutChangeEvent } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/tokens";

interface SliderControlProps {
  value: number;
  onChange?: (value: number) => void;
  gradientColors?: readonly [string, string];
  label?: string;
}

export function SliderControl({
  value,
  onChange,
  gradientColors = [colors.rose, colors.gold],
  label,
}: SliderControlProps) {
  const [trackWidth, setTrackWidth] = useState(0);
  const valueRef = useRef(value);
  valueRef.current = value;
  const startValueRef = useRef(value);

  const onLayout = (e: LayoutChangeEvent) => setTrackWidth(e.nativeEvent.layout.width);

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        startValueRef.current = valueRef.current;
      },
      onPanResponderMove: (_evt, gesture) => {
        if (!trackWidth || !onChange) return;
        const startPx = (startValueRef.current / 100) * trackWidth;
        const nextPx = Math.max(0, Math.min(trackWidth, startPx + gesture.dx));
        onChange(Math.round((nextPx / trackWidth) * 100));
      },
    }),
  ).current;

  const pct = Math.max(0, Math.min(100, value));

  return (
    <View className="my-4">
      {label && (
        <Text className="mb-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          {label}
        </Text>
      )}
      <View
        onLayout={onLayout}
        {...pan.panHandlers}
        className="h-[5px] justify-center rounded-[3px] bg-white/[0.08]"
      >
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: `${pct}%`, height: 5, borderRadius: 3 }}
        />
        <View
          className="absolute h-[13px] w-[13px] rounded-full border-2 bg-white"
          style={{
            left: `${pct}%`,
            top: "50%",
            marginLeft: -6.5,
            marginTop: -6.5,
            borderColor: gradientColors[1],
          }}
        />
      </View>
    </View>
  );
}
