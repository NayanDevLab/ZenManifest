import { useMemo } from "react";
import { View } from "react-native";

interface StarfieldProps {
  density?: number;
  opacity?: number;
}

export function Starfield({ density = 30, opacity = 0.6 }: StarfieldProps) {
  const stars = useMemo(() => {
    const seed = density * 17;
    const rand = (n: number) => {
      const x = Math.sin(seed + n) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: density }, (_, i) => ({
      x: rand(i * 3) * 100,
      y: rand(i * 3 + 1) * 100,
      size: rand(i * 3 + 2) * 1.6 + 0.3,
      starOpacity: rand(i * 3 + 7) * 0.8 + 0.2,
    }));
  }, [density]);

  return (
    <View
      pointerEvents="none"
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity }}
    >
      {stars.map((star, i) => (
        <View
          key={i}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            borderRadius: star.size / 2,
            backgroundColor: "white",
            opacity: star.starOpacity,
          }}
        />
      ))}
    </View>
  );
}
