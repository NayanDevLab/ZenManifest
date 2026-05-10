import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const STARS = [
  { top: '6%', left: '12%', size: 2, opacity: 0.5 },
  { top: '8%', left: '78%', size: 3, opacity: 0.7 },
  { top: '14%', left: '42%', size: 1.5, opacity: 0.4 },
  { top: '18%', left: '22%', size: 2.5, opacity: 0.6 },
  { top: '22%', left: '88%', size: 2, opacity: 0.5 },
  { top: '28%', left: '60%', size: 1.5, opacity: 0.35 },
  { top: '32%', left: '5%', size: 3, opacity: 0.65 },
  { top: '38%', left: '93%', size: 2, opacity: 0.5 },
  { top: '44%', left: '32%', size: 1.5, opacity: 0.3 },
  { top: '50%', left: '70%', size: 2, opacity: 0.5 },
  { top: '58%', left: '18%', size: 2.5, opacity: 0.55 },
  { top: '64%', left: '82%', size: 1.5, opacity: 0.4 },
  { top: '70%', left: '48%', size: 2, opacity: 0.5 },
  { top: '76%', left: '72%', size: 3, opacity: 0.65 },
  { top: '82%', left: '28%', size: 1.5, opacity: 0.35 },
  { top: '88%', left: '58%', size: 2, opacity: 0.5 },
  { top: '92%', left: '8%', size: 2.5, opacity: 0.55 },
  { top: '4%', left: '55%', size: 2, opacity: 0.45 },
  { top: '46%', left: '4%', size: 1.5, opacity: 0.35 },
  { top: '54%', left: '96%', size: 2, opacity: 0.5 },
] as const;

export function StarField() {
  return (
    <Animated.View
      entering={FadeIn.duration(1000)}
      style={StyleSheet.absoluteFill}
      pointerEvents="none"
    >
      {STARS.map((star) => (
        <View
          key={`${star.top}-${star.left}`}
          style={[
            styles.star,
            {
              top: star.top as `${number}%`,
              left: star.left as `${number}%`,
              width: star.size,
              height: star.size,
              borderRadius: star.size / 2,
              opacity: star.opacity,
            },
          ]}
        />
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
});
