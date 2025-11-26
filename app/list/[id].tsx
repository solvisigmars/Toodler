import { View } from "react-native";
import TasksScreen from "@/src/views/list/task/task";

export default function List() {
  return (
    <View style={{ flex: 1 }}>
      <TasksScreen />
    </View>
  );
}
