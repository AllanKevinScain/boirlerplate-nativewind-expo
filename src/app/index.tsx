import { Button, Header } from "@/components";
import { router } from "expo-router";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 p-8">
      <Header title="Home" subtitle="dos guri" />
      <Button title="Profile" onPress={() => router.navigate("/profile")} />
    </View>
  );
}
