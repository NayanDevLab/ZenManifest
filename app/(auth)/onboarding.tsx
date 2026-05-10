import { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewToken,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { BodyText } from '../../components/typography/BodyText';
import { DisplayText } from '../../components/typography/DisplayText';
import { Heading } from '../../components/typography/Heading';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { StarField } from '../../components/onboarding/StarField';
import { OrbIllustration } from '../../components/onboarding/OrbIllustration';
import { OnboardingDots } from '../../components/onboarding/OnboardingDots';
import { FTBAStepCard } from '../../components/onboarding/FTBAStepCard';
import { COLORS } from '../../constants/theme';
import { storage } from '../../lib/storage';

const TOTAL_SLIDES = 3;

const FTBA_STEPS = [
  {
    letter: 'F',
    title: 'Feel',
    description: 'Land in your body. Honour the mood.',
    color: '#6d28d9',
  },
  {
    letter: 'T',
    title: 'Think',
    description: 'Listen to a thought that supports you.',
    color: '#5b21b6',
  },
  {
    letter: 'B',
    title: 'Believe',
    description: 'Choose the truth you want to live in.',
    color: '#4c1d95',
  },
  {
    letter: 'A',
    title: 'Act',
    description: 'One small, inspired step today.',
    color: '#92400e',
  },
] as const;

// ─── Slide 1: Welcome ────────────────────────────────────────────────────────

function SlideWelcome({ width, height }: { width: number; height: number }) {
  return (
    <View style={[styles.slide, { width, height }]}>
      <View style={styles.orbArea}>
        <OrbIllustration />
      </View>

      <Animated.View entering={FadeInUp.delay(600).duration(700)} style={styles.textBlock}>
        <BodyText size="xs" muted className="uppercase tracking-widest mb-2">
          WELCOME TO MANIFEST
        </BodyText>
        <Heading size="xl">Your inner world,</Heading>
        <DisplayText size="lg" accent>
          made visible.
        </DisplayText>
        <BodyText size="sm" secondary className="mt-3 leading-relaxed">
          Goals. Feelings. Beliefs. Inspired action.{'\n'}One sacred space to align it all.
        </BodyText>
      </Animated.View>
    </View>
  );
}

// ─── Slide 2: The FTBA Loop ───────────────────────────────────────────────────

function SlideLoop({ width, height }: { width: number; height: number }) {
  return (
    <View style={[styles.slide, styles.slideTop, { width, height }]}>
      <Animated.View entering={FadeInUp.delay(200).duration(700)} style={styles.loopHeader}>
        <BodyText size="xs" muted className="uppercase tracking-widest mb-2">
          THE PRACTICE
        </BodyText>
        <Heading size="xl">Four steps,</Heading>
        <DisplayText size="lg" accent>
          one rhythm.
        </DisplayText>
        <BodyText size="sm" secondary className="mt-3 leading-relaxed">
          FTBA is your daily compass — a gentle loop that turns intention into movement.
        </BodyText>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(420).duration(700)} style={styles.stepList}>
        {FTBA_STEPS.map((step) => (
          <FTBAStepCard
            key={step.letter}
            letter={step.letter}
            title={step.title}
            description={step.description}
            letterColor={step.color}
          />
        ))}
      </Animated.View>
    </View>
  );
}

// ─── Slide 3: Privacy ────────────────────────────────────────────────────────

function SlidePrivacy({ width, height }: { width: number; height: number }) {
  return (
    <View style={[styles.slide, { width, height }]}>
      <View style={styles.lockArea}>
        <View style={styles.lockContainer}>
          <Ionicons name="lock-closed" size={48} color={COLORS.primary.light} />
        </View>
      </View>

      <Animated.View entering={FadeInUp.delay(400).duration(700)} style={styles.privacyText}>
        <Heading size="xl" className="text-center">
          {'Sacred &'}
        </Heading>
        <DisplayText size="lg" accent className="text-center">
          private.
        </DisplayText>
        <BodyText size="sm" secondary className="mt-3 text-center leading-relaxed">
          Your journal stays on your device. Backup{'\n'}to the cloud only when you choose.
        </BodyText>
        <View style={styles.badgeRow}>
          <Badge label="offline first" color="muted" />
          <Badge label="end-to-end" color="muted" />
          <Badge label="biometric lock" color="warning" />
        </View>
      </Animated.View>
    </View>
  );
}

// ─── Main Screen ─────────────────────────────────────────────────────────────

export default function OnboardingScreen() {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  const listRef = useRef<FlatList<number>>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  // Initialise with ~70% of screen so items have a size on first render
  const [slideHeight, setSlideHeight] = useState(Math.floor(height * 0.72));

  const finishOnboarding = useCallback(async () => {
    await storage.setOnboardingDone(true);
    router.replace('/(tabs)' as never);
  }, [router]);

  const advance = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      listRef.current?.scrollToIndex({ index: currentSlide + 1, animated: true });
    } else {
      finishOnboarding();
    }
  }, [currentSlide, finishOnboarding]);

  // Stable refs — FlatList requires these not to change between renders
  const onViewableItemsChangedRef = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]?.index != null) {
        setCurrentSlide(viewableItems[0].index);
      }
    },
  );
  const viewabilityConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <SafeAreaView style={styles.container}>
      <StarField />

      {/* Skip — top right, always visible */}
      <TouchableOpacity style={styles.skip} onPress={finishOnboarding} activeOpacity={0.7}>
        <BodyText size="sm" secondary>
          Skip
        </BodyText>
      </TouchableOpacity>

      {/* Slide area — measured so items get exact height */}
      <View
        style={styles.slideArea}
        onLayout={(e) => setSlideHeight(e.nativeEvent.layout.height)}
      >
        <FlatList
          ref={listRef}
          data={[0, 1, 2]}
          keyExtractor={(item) => String(item)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChangedRef.current}
          viewabilityConfig={viewabilityConfigRef.current}
          getItemLayout={(_, index) => ({ length: width, offset: width * index, index })}
          renderItem={({ item }) => {
            if (item === 0) return <SlideWelcome width={width} height={slideHeight} />;
            if (item === 1) return <SlideLoop width={width} height={slideHeight} />;
            return <SlidePrivacy width={width} height={slideHeight} />;
          }}
        />
      </View>

      {/* Sticky footer — dots + CTA(s) */}
      <View style={styles.footer}>
        <OnboardingDots total={TOTAL_SLIDES} current={currentSlide} />

        {currentSlide < TOTAL_SLIDES - 1 ? (
          <Button label={currentSlide === 0 ? 'Begin  →' : 'Continue  →'} onPress={advance} />
        ) : (
          <View style={styles.lastButtons}>
            <Button label="Create my space" onPress={finishOnboarding} />
            <Button label="Continue as guest" onPress={finishOnboarding} variant="ghost" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.DEFAULT,
  },
  skip: {
    position: 'absolute',
    top: 56,
    right: 24,
    zIndex: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  slideArea: {
    flex: 1,
  },
  slide: {
    paddingHorizontal: 28,
    justifyContent: 'center',
  },
  slideTop: {
    justifyContent: 'flex-start',
    paddingTop: 48,
  },
  orbArea: {
    alignItems: 'center',
    marginBottom: 28,
  },
  textBlock: {
    gap: 4,
  },
  loopHeader: {
    marginBottom: 20,
  },
  stepList: {
    gap: 10,
  },
  lockArea: {
    alignItems: 'center',
    marginBottom: 28,
  },
  lockContainer: {
    width: 112,
    height: 112,
    borderRadius: 28,
    backgroundColor: `${COLORS.surface.elevated}CC`,
    borderWidth: 1,
    borderColor: `${COLORS.primary.DEFAULT}30`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  privacyText: {
    alignItems: 'center',
    gap: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 12,
    paddingTop: 12,
    gap: 14,
  },
  lastButtons: {
    gap: 10,
  },
});
