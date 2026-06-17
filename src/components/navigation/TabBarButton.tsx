import { forwardRef } from "react";
import { Pressable, Text, type View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import type { TabTriggerSlotProps } from "expo-router/ui";
import { Icon, type IconName } from "@/components/ui/Icon";
import { colors } from "@/theme/tokens";

interface TabBarButtonProps extends TabTriggerSlotProps {
  label: string;
  icon: IconName;
}

export const TabBarButton = forwardRef<View, TabBarButtonProps>(
  ({ label, icon, isFocused, style, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        style={style}
        className="flex-1 items-center justify-center gap-1"
      >
        {isFocused && (
          <LinearGradient
            colors={["#f0abfc", "#c4b5fd"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              position: "absolute",
              top: 10,
              width: 24,
              height: 3,
              borderRadius: 2,
              shadowColor: colors.pink,
              shadowOpacity: 0.6,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 0 },
            }}
          />
        )}
        <Icon name={icon} size={22} color={isFocused ? colors.pink : "rgba(255,255,255,0.45)"} />
        <Text
          className="font-sans-medium text-[10px]"
          style={{ color: isFocused ? colors.pink : "rgba(255,255,255,0.45)", letterSpacing: 0.2 }}
        >
          {label}
        </Text>
      </Pressable>
    );
  },
);

TabBarButton.displayName = "TabBarButton";
