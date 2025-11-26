import { Stack } from 'expo-router';
import TasksScreen from '@/src/views/task/task';

export default function TaskLayout() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Tasks',   
        }}
      />
      <TasksScreen />
    </>
  );
}
