import { Stack } from 'expo-router';
import ListScreen from '@/src/views/list/list';

export default function ListLayout() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Lists',   
        }}
      />
      <ListScreen />
    </>
  );
}

