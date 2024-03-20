import { BackButton } from "@/components";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 p-8 gap-6">
      <BackButton />
      <Text className="text-white font-regular text-lg">
        Ainda bem que veio até aqui, agora volte
      </Text>
    </View>
  );
}
