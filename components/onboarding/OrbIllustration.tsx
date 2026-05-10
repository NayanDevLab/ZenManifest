import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { COLORS } from '../../constants/theme';

const SATELLITES = [
  { angle: -50, distance: 110, size: 10, color: COLORS.warning },
  { angle: 30, distance: 120, size: 8, color: COLORS.secondary.DEFAULT },
  { angle: 160, distance: 100, size: 6, color: COLORS.primary.light },
] as const;

function toRadians(deg: number) {
  return (deg * Math.PI) / 180;
}

export function OrbIllustration() {
  return (
    <Animated.View entering={FadeIn.delay(300).duration(1000)} style={styles.container}>
      <View style={styles.ringOuter} />
      <View style={styles.ringMiddle} />

      {SATELLITES.map((sat) => {
        const rad = toRadians(sat.angle);
        const x = Math.cos(rad) * sat.distance;
        const y = Math.sin(rad) * sat.distance;
        return (
          <View
            key={sat.angle}
            style={[
              styles.satellite,
              {
                width: sat.size,
                height: sat.size,
                borderRadius: sat.size / 2,
                backgroundColor: sat.color,
                transform: [{ translateX: x }, { translateY: y }],
              },
            ]}
          />
        );
      })}

      <View style={styles.orbGlow} />
      <View style={styles.orb} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringOuter: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: `${COLORS.primary.DEFAULT}30`,
  },
  ringMiddle: {
    position: 'absolute',
    width: 185,
    height: 185,
    borderRadius: 93,
    borderWidth: 1,
    borderColor: `${COLORS.primary.DEFAULT}50`,
    borderStyle: 'dashed',
  },
  satellite: {
    position: 'absolute',
  },
  orbGlow: {
    position: 'absolute',
    width: 145,
    height: 145,
    borderRadius: 73,
    backgroundColor: COLORS.primary.DEFAULT,
    opacity: 0.15,
    shadowColor: COLORS.primary.DEFAULT,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 20,
  },
  orb: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.primary.light,
    shadowColor: COLORS.primary.lighter,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 24,
    elevation: 16,
  },
});
