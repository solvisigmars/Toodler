import { addBoard, deleteBoard, getBoards } from '@/src/services/board-service';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './style';


export function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  const boards = getBoards();

  function handleCreateBoard() {
    if (!name.trim()) return;

    const newBoard = {
      id: boards.length + 1,
      name,
      description,
      thumbnailPhoto: photo,
    };

    addBoard(newBoard);

    //Reset
    setName('');
    setDescription('');
    setPhoto('');
    setModalVisible(false);
  }

  function handleDeleteBoard(id: number){
    deleteBoard(id);
    setRefresh(!refresh);
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ padding: 20 }}
      >
        <Text style={styles.title}> Your Boards</Text>
        {boards.map((board) => (
          <View key={board.id} style={styles.board}>
            <TouchableOpacity 
              onPress={() => handleDeleteBoard(board.id)}
              style= {styles.buttonDelete}
              accessibilityLabel='Delete Board'
              accessibilityRole='button'
            >
              <Text style = {styles.buttonTextDelete}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              key={board.id}
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
          onPress={() => setModalVisible(true)}
          style={styles.button}
          accessibilityLabel="Create a new board"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        visible = {modalVisible}
        animationType='slide'
        transparent = {true}
      >
        <View style= {styles.modalBackground}>
          <View style = {styles.modalContent}>
            <Text style = {styles.modalTitle}>
              Create New Board
            </Text>
            <TextInput
              style = {styles.modalInput}
              placeholder='Board Name'
              value = {name}
              onChangeText={setName}
            />
            <TextInput
              style = {styles.modalInput}
              placeholder='Description'
              value = {description}
              onChangeText={setDescription}
            />
            <TextInput
              style = {styles.modalInput}
              placeholder='Image URL'
              value = {photo}
              onChangeText={setPhoto}
            />
            <TouchableOpacity
              onPress={handleCreateBoard}
              style = {styles.modalButtonCreate}
              accessibilityLabel='Create new Board'
              accessibilityRole='button'
            >
              <Text style = {styles.modalButtonText}>Create</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style = {styles.modalButtonExit}
              accessibilityLabel='Create new Board'
              accessibilityRole='button'
            >
              <Text style = {styles.modalButtonText}>Exit</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </>
  );
}
