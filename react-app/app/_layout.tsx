import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 items-center justify-center bg-orange-200">
      <Slot />
    </View>
  );
}
