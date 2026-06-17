import { Text, View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { colors } from "@/theme/tokens";

interface VibrationGaugeProps {
  value?: number;
  size?: number;
  label?: string;
}

export function VibrationGauge({ value = 78, size = 120, label = "Vibration" }: VibrationGaugeProps) {
  const r = size / 2 - 8;
  const c = 2 * Math.PI * r;
  const arc = c * 0.75;
  const dash = (value / 100) * arc;

  return (
    <View style={{ width: size, height: size }}>
      <Svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: [{ rotate: "135deg" }] }}
      >
        <Defs>
          <LinearGradient id="gauge" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0%" stopColor={colors.gold} />
            <Stop offset="50%" stopColor={colors.pink} />
            <Stop offset="100%" stopColor={colors.violet} />
          </LinearGradient>
        </Defs>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={6}
          fill="none"
          strokeDasharray={`${arc} ${c}`}
          strokeLinecap="round"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#gauge)"
          strokeWidth={6}
          fill="none"
          strokeDasharray={`${dash} ${c}`}
          strokeLinecap="round"
        />
      </Svg>
      <View
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        className="items-center justify-center"
      >
        <Text className="font-serif text-white" style={{ fontSize: 36, lineHeight: 38 }}>
          {value}
        </Text>
        <Text
          className="font-mono uppercase text-ink-soft"
          style={{ fontSize: 9.5, letterSpacing: 1.4, marginTop: 4 }}
        >
          {label}
        </Text>
      </View>
    </View>
  );
}
