import { addBoard, deleteBoard, getBoards, updateBoard } from '@/src/services/board-service';
import { Board } from '@/src/types/Board';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';

export function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingBoardId, setEditingBoardId] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  const boards = getBoards();

  function handleCreateBoard() {
    if (!name.trim()) return;

    const newBoard = {
      id: Date.now(),
      name,
      description,
      thumbnailPhoto: photo,
    };

    addBoard(newBoard);

    // Reset
    setName('');
    setDescription('');
    setPhoto('');
    setModalVisible(false);
  }

  function openEditModal(board: Board) {
    setEditingBoardId(board.id);
    setName(board.name);
    setDescription(board.description ?? '');
    setPhoto(board.thumbnailPhoto);
    setEditModalVisible(true);
  }

  function handleDeleteBoard(id: number) {
    deleteBoard(id);
    setRefresh(!refresh);
  }

  function handleEditBoard() {
    if (editingBoardId === null) return;

    updateBoard(editingBoardId, {
      name,
      description,
      thumbnailPhoto: photo,
    });

    setEditModalVisible(false);
    setRefresh(r => !r);
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ padding: 20 }}
      >
        <Text style={styles.title}>Your Boards</Text>
        {boards.map((board: Board) => (
          <View key={board.id} style={styles.board}>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={() => handleDeleteBoard(board.id)}
                style={styles.buttonDelete}
                accessibilityLabel='Delete Board'
                accessibilityRole='button'
              >
                <Text style={styles.buttonTextDelete}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => openEditModal(board)}
                style={styles.buttonEdit}
                accessibilityLabel='Edit board'
                accessibilityRole='button'
              >
                <Text style={styles.buttonTextEdit}>Edit</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.board}
              onPress={() => router.push(`/board/${board.id}`)}
            >
              <Image
                source={{ uri: board.thumbnailPhoto }}
                style={styles.image}
              />
              <Text style={styles.title}>{board.name}</Text>
              <Text style={styles.description}>{board.description}</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          onPress={() => {
            setName('');
            setDescription('');
            setPhoto('');
            setModalVisible(true);
          }}
          style={styles.button}
          accessibilityLabel='Create a new board'
          accessibilityRole='button'
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={editModalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Board</Text>
            <TextInput
              style={styles.modalInput}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.modalInput}
              value={description}
              onChangeText={setDescription}
            />
            <TextInput
              style={styles.modalInput}
              value={photo}
              onChangeText={setPhoto}
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={() => setEditModalVisible(false)}
                style={styles.modalButtonExit}
                accessibilityLabel='Exit board'
                accessibilityRole='button'
              >
                <Text style={styles.modalButtonText}>Exit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleEditBoard}
                style={styles.modalButtonCreate}
                accessibilityLabel='Edit board'
                accessibilityRole='button'
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Board</Text>
            <TextInput
              style={styles.modalInput}
              placeholder='Board Name'
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.modalInput}
              placeholder='Description'
              value={description}
              onChangeText={setDescription}
            />
            <TextInput
              style={styles.modalInput}
              placeholder='Image URL'
              value={photo}
              onChangeText={setPhoto}
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalButtonExit}
                accessibilityLabel='Exit window'
                accessibilityRole='button'
              >
                <Text style={styles.modalButtonText}>Exit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleCreateBoard}
                style={styles.modalButtonCreate}
                accessibilityLabel='Create board'
                accessibilityRole='button'
              >
                <Text style={styles.modalButtonText}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
