import { BlurView } from "expo-blur";
import type { Href } from "expo-router";
import { Tabs, TabList, TabSlot, TabTrigger } from "expo-router/ui";
import { View } from "react-native";
import { TabBarButton } from "@/components/navigation/TabBarButton";
import type { IconName } from "@/components/ui/Icon";

const TABS: { name: string; href: Href; label: string; icon: IconName }[] = [
  { name: "home", href: "/home", label: "Home", icon: "home" },
  { name: "ftba", href: "/ftba", label: "FTBA", icon: "ftba" },
  { name: "practice", href: "/practice", label: "Practice", icon: "practice" },
  { name: "vision", href: "/vision", label: "Vision", icon: "vision" },
  { name: "profile", href: "/profile", label: "Profile", icon: "profile" },
];

export default function TabLayout() {
  return (
    <Tabs style={{ flex: 1 }}>
      <TabSlot />

      <View className="absolute bottom-[22px] left-[14px] right-[14px] h-[70px] flex-row items-center justify-around overflow-hidden rounded-tabbar border border-white/[0.08]">
        <BlurView
          intensity={30}
          tint="dark"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
        {TABS.map((tab) => (
          <TabTrigger key={tab.name} name={tab.name} style={{ flex: 1, height: "100%" }}>
            <TabBarButton label={tab.label} icon={tab.icon} />
          </TabTrigger>
        ))}
      </View>

      <TabList style={{ display: "none" }}>
        {TABS.map((tab) => (
          <TabTrigger key={tab.name} name={tab.name} href={tab.href} />
        ))}
      </TabList>
    </Tabs>
  );
}
