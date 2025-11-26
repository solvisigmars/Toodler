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
import { useLocalSearchParams } from 'expo-router';
import { 
  getTasksForList,
  addTask,
  deleteTask,
  toggleTaskFinished,
  moveTask
} from '@/src/services/task-service';
import { getListById, getListsForBoard } from '@/src/services/list-service';
import styles from './style';

export default function TasksScreen() {
  const { id } = useLocalSearchParams();
  const listId = Number(id);

  const list = getListById(listId);

  const listsInBoard = getListsForBoard(list?.boardId || -1);

  const tasksInitial = getTasksForList(listId);

  const [tasks, setTasks] = useState(tasksInitial);
  const [modalVisible, setModalVisible] = useState(false);
  const [moveModalVisible, setMoveModalVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');



  function handleCreateTask() {
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      isFinished: false,
      listId: listId,
    };

    addTask(newTask);
    setTasks(getTasksForList(listId));

    setTaskName('');
    setTaskDescription('');
    setModalVisible(false);
  }

  function handleDeleteTask(id: number) {
    deleteTask(id);
    setTasks(getTasksForList(listId));
  }

  function handleToggle(id: number) {
    toggleTaskFinished(id);
    setTasks(getTasksForList(listId));
  }

  function openMoveModal(taskId: number) {
    setSelectedTaskId(taskId);
    setMoveModalVisible(true);
  }

  function handleMoveTask(newListId: number) {
    if (!selectedTaskId) return;

    moveTask(selectedTaskId, newListId);
    setTasks(getTasksForList(listId));
    setMoveModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{list?.name}!</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>+ Add Task</Text>
          </TouchableOpacity>
        }
        renderItem={({ item }) => (
          <View style={styles.taskWrapper}>
            <View style={styles.taskItem}>

              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => handleDeleteTask(item.id)}
              >
                <Text style={styles.buttonTextDelete}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonMove}
                onPress={() => openMoveModal(item.id)}
              >
                <Text style={styles.buttonTextMove}>Move</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => handleToggle(item.id)}
              >
                <Text style={styles.toggleButtonText}>
                  {item.isFinished ? '✓' : '✕'}
                </Text>
              </TouchableOpacity>

              <Text style={[styles.taskTitle, item.isFinished && styles.finishedTaskText]}>
                {item.name}
              </Text>

              <Text style={styles.Description}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Task</Text>

            <TextInput
              placeholder="Task name"
              style={styles.modalInput}
              value={taskName}
              onChangeText={setTaskName}
            />

            <TextInput
              placeholder="Description"
              style={styles.modalInput}
              value={taskDescription}
              onChangeText={setTaskDescription}
            />

            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                style={styles.modalButtonExit}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalExitText}>Exit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButtonCreate}
                onPress={handleCreateTask}
              >
                <Text style={styles.modalCreateText}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={moveModalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Move Task To:</Text>

            {listsInBoard
              .filter(l => l.id !== listId)
              .map(list => (
                <TouchableOpacity
                  key={list.id}
                  style={styles.moveOption}
                  onPress={() => handleMoveTask(list.id)}
                >
                  <Text style={styles.moveOptionText}>{list.name}</Text>
                </TouchableOpacity>
              ))}

            <TouchableOpacity
              style={[styles.modalButtonExit, { marginTop: 15 }]}
              onPress={() => setMoveModalVisible(false)}
            >
              <Text style={styles.modalExitText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}
