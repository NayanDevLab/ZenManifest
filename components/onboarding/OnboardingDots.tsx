import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/theme';

interface OnboardingDotsProps {
  total: number;
  current: number;
}

export function OnboardingDots({ total, current }: OnboardingDotsProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, i) => (
        <View key={i} style={[styles.dot, i === current ? styles.active : styles.inactive]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  active: {
    width: 20,
    backgroundColor: COLORS.secondary.DEFAULT,
  },
  inactive: {
    width: 6,
    backgroundColor: `${COLORS.primary.DEFAULT}40`,
  },
});
