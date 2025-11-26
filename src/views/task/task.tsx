import { getListById } from '@/src/services/list-service';
import { addTask, deleteTask, getTasksForList } from '@/src/services/task-service';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './style';

export default function TasksScreen() {
  const { id } = useLocalSearchParams();
  const listId = Number(id);

  const list = getListById(listId);

  const [modalVisible, setModalVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState(getTasksForList(listId));

  function handleCreateTask() {
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: '',
      isFinished: false,
      listId: listId,
    };

    addTask(newTask);
    setTasks(getTasksForList(listId));
    setTaskName('');
    setModalVisible(false);
  }

  function handleDeleteTask(id: number) {
    deleteTask(id);
    setTasks(getTasksForList(listId));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{list?.name}</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addButtonText}>+ Add Task</Text>
          </TouchableOpacity>
        }
        renderItem={({ item }) => (
          <View style={styles.taskWrapper}>
            <View style={styles.taskItem}>

              {/* Delete button */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteTask(item.id)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>

              {/* Task title */}
              <Text style={styles.taskTitle}>{item.name}</Text>
            </View>
          </View>
        )}
      />

      {/* Modal */}
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>Create New Task</Text>

            <TextInput
              placeholder='Task Name'
              value={taskName}
              onChangeText={setTaskName}
              style={styles.modalInput}
              placeholderTextColor='#999'
            />

            <View style={styles.modalButtonRow}>
              <TouchableOpacity 
                style={styles.modalExitButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalExitText}>Exit</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.modalCreateButton}
                onPress={handleCreateTask}
              >
                <Text style={styles.modalCreateText}>Create</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
}
