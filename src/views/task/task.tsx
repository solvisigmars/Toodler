import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TaskScreen() {
  const { id } = useLocalSearchParams();
  const listId = Number(id);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        Tasks for List {listId}
      </Text>
    </View>
  );
}
