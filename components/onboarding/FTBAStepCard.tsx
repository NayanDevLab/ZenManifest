import { StyleSheet, View } from 'react-native';

import { BodyText } from '../typography/BodyText';
import { Heading } from '../typography/Heading';
import { COLORS } from '../../constants/theme';

interface FTBAStepCardProps {
  letter: string;
  title: string;
  description: string;
  letterColor: string;
}

export function FTBAStepCard({ letter, title, description, letterColor }: FTBAStepCardProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.badge, { backgroundColor: letterColor }]}>
        <Heading size="sm">{letter}</Heading>
      </View>
      <View style={styles.text}>
        <Heading size="sm">{title}</Heading>
        <BodyText size="sm" secondary>
          {description}
        </BodyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: COLORS.surface.DEFAULT,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: `${COLORS.primary.DEFAULT}25`,
  },
  badge: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    gap: 2,
  },
});
