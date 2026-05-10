import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BodyText } from '../../components/typography/BodyText';
import { DisplayText } from '../../components/typography/DisplayText';
import { Heading } from '../../components/typography/Heading';
import { COLORS } from '../../constants/theme';
import { storage } from '../../lib/storage';

// Fixed star positions — deterministic, no Math.random()
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

// Satellite dots orbiting the orb
const SATELLITES = [
  { angle: -50, distance: 110, size: 10, color: COLORS.warning },
  { angle: 30, distance: 120, size: 8, color: COLORS.secondary.DEFAULT },
  { angle: 160, distance: 100, size: 6, color: COLORS.primary.light },
] as const;

function toRadians(deg: number) {
  return (deg * Math.PI) / 180;
}

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(async () => {
      await storage.getOnboardingDone().then((done) => {
        if (done) {
          router.replace('/(tabs)' as never);
        } else {
          router.replace('/(auth)/onboarding' as never);
        }
      });
    }, 2800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Starfield */}
      <Animated.View entering={FadeIn.duration(1000)} style={StyleSheet.absoluteFill}>
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

      {/* Orb + rings area */}
      <Animated.View entering={FadeIn.delay(300).duration(1000)} style={styles.orbContainer}>
        {/* Outer ring */}
        <View style={styles.ringOuter} />

        {/* Middle ring */}
        <View style={styles.ringMiddle} />

        {/* Satellite dots */}
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

        {/* Inner glowing orb */}
        <View style={styles.orbGlow} />
        <View style={styles.orb} />
      </Animated.View>

      {/* Text content */}
      <Animated.View entering={FadeInUp.delay(700).duration(800)} style={styles.textContainer}>
        <BodyText size="xs" className="mb-2 uppercase tracking-widest text-text-muted">
          Welcome to Manifest
        </BodyText>

        <Heading size="xl" className="leading-tight">
          Your inner world,
        </Heading>

        <DisplayText size="lg" accent className="mt-1">
          made visible.
        </DisplayText>

        <BodyText size="sm" secondary className="mt-4 px-4 text-center leading-relaxed">
          Goals. Feelings. Beliefs. Inspired action.{'\n'}One sacred space to align it all.
        </BodyText>
      </Animated.View>

      {/* Bottom pagination dots */}
      <Animated.View entering={FadeIn.delay(900).duration(600)} style={styles.dots}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  orbContainer: {
    width: 280,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },
  ringOuter: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 1,
    borderColor: `${COLORS.primary.DEFAULT}30`,
  },
  ringMiddle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: `${COLORS.primary.DEFAULT}50`,
    borderStyle: 'dashed',
  },
  satellite: {
    position: 'absolute',
  },
  orbGlow: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: COLORS.primary.DEFAULT,
    opacity: 0.15,
    // Glow effect via shadow
    shadowColor: COLORS.primary.DEFAULT,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 20,
  },
  orb: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.primary.light,
    shadowColor: COLORS.primary.lighter,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 24,
    elevation: 16,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 40,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: `${COLORS.primary.DEFAULT}40`,
  },
  dotActive: {
    width: 20,
    backgroundColor: COLORS.secondary.DEFAULT,
    borderRadius: 3,
  },
});
