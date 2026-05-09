import { Modal, ScrollView, Text, View } from 'react-native';

import { Button } from '../ui/Button';
import { Divider } from '../ui/Divider';

export interface TutorialExample {
  label: string;
  items: string[];
}

export interface TutorialContent {
  title: string;
  definition: string;
  positive: TutorialExample;
  negative: TutorialExample;
  positiveActionLabel?: string;
  practiceLabel?: string;
}

interface TutorialModalProps {
  visible: boolean;
  content: TutorialContent;
  onClose: () => void;
  onUsePositiveTemplate?: () => void;
  onPracticeNow?: () => void;
}

export function TutorialModal({
  visible,
  content,
  onClose,
  onUsePositiveTemplate,
  onPracticeNow,
}: TutorialModalProps) {
  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <View className="flex-1 bg-background-secondary">
        {/* Handle bar */}
        <View className="items-center pt-3 pb-1">
          <View className="h-1 w-10 rounded-full bg-border" />
        </View>

        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="mt-4 mb-6">
            <Text className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              How to use
            </Text>
            <Text className="mt-1 text-2xl font-bold text-text-primary">{content.title}</Text>
            <Text className="mt-2 text-sm text-text-secondary">{content.definition}</Text>
          </View>

          {/* Positive example */}
          <View className="mb-4 rounded-2xl border border-success/30 bg-success/10 p-4">
            <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-success">
              ✅ {content.positive.label}
            </Text>
            {content.positive.items.map((item) => (
              <Text key={item} className="mb-1 text-sm text-text-primary">
                {item}
              </Text>
            ))}
          </View>

          {/* Negative example */}
          <View className="mb-6 rounded-2xl border border-error/30 bg-error/10 p-4">
            <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-error">
              ❌ {content.negative.label}
            </Text>
            {content.negative.items.map((item) => (
              <Text key={item} className="mb-1 text-sm text-text-primary">
                {item}
              </Text>
            ))}
          </View>

          <Divider className="mb-6" />

          {/* Actions */}
          {onUsePositiveTemplate && (
            <Button
              label={content.positiveActionLabel ?? 'Use positive as template'}
              onPress={() => {
                onUsePositiveTemplate();
                onClose();
              }}
              variant="secondary"
              className="mb-3"
            />
          )}
          {onPracticeNow && (
            <Button
              label={content.practiceLabel ?? 'Practice now'}
              onPress={() => {
                onPracticeNow();
                onClose();
              }}
              variant="secondary"
              className="mb-3"
            />
          )}
          <Button label="Got it" onPress={onClose} variant="primary" className="mb-8" />
        </ScrollView>
      </View>
    </Modal>
  );
}
