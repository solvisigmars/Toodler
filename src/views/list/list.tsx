import { getBoardById } from '@/src/services/board-service';
import { addList, deleteList, getListsForBoard, updateList } from '@/src/services/list-service';
import { useLocalSearchParams, useRouter } from 'expo-router';
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

export default function ListsScreen() {
  const { id } = useLocalSearchParams();
  const boardId = Number(id);
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState('');
  const [listColor, setListColor] = useState('');
  const [lists, setLists] = useState(getListsForBoard(boardId));
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingListId, setEditingListId] = useState<number | null>(null);
  const router = useRouter();
  const board = getBoardById(boardId);


  
  function handleCreateList() {
    if (!listName.trim()) return;

    const newList = {
      id: Date.now(),
      name: listName,
      color: listColor || '#cccccc',
      boardId,
    };

    addList(newList);
    setLists(getListsForBoard(boardId));
    setListName('');
    setListColor('');
    setModalVisible(false);
  }

  function handleDeleteList(id: number) {
    deleteList(id);
    setLists(getListsForBoard(boardId));
  }

  function openEditModal(list: any) {
    setEditingListId(list.id);
    setListName(list.name);
    setListColor(list.color);
    setEditModalVisible(true);
  }

  function handleEditList(){
    if (editingListId === null) return;

    updateList(editingListId, {
      name: listName,
      color: listColor || '#cccccc',
    });

    setEditModalVisible(false);
    setLists(getListsForBoard(boardId));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{board?.name}!</Text>

      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <TouchableOpacity
            onPress={() => {
              setListName('');
              setListColor('');
              setModalVisible(true)
            }}

            style={styles.button}
          >
            <Text style={styles.buttonText}>+ Add List</Text>
          </TouchableOpacity>
        }
        renderItem={({ item }) => (
          <View style={styles.listWrapper}>
            <TouchableOpacity
              onPress={() => router.push(`/list/${item.id}`)}
              style={[styles.listItem, { backgroundColor: item.color }]}
            >
              
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => handleDeleteList(item.id)}
              >
                <Text style={styles.buttonTextDelete}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() => openEditModal(item)}
              >
                <Text style={styles.buttonTextDelete}>Edit</Text>
              </TouchableOpacity>

              <Text style={styles.listTitle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>Create New List</Text>

            <TextInput
              placeholder="List Name"
              value={listName}
              onChangeText={setListName}
              style={styles.modalInput}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder="Color (hex code)"
              value={listColor}
              onChangeText={setListColor}
              style={styles.modalInput}
              placeholderTextColor="#999"
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
                onPress={handleCreateList}
              >
                <Text style={styles.modalCreateText}>Create</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

      <Modal visible={editModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>Edit List</Text>

            <TextInput
              placeholder="List Name"
              value={listName}
              onChangeText={setListName}
              style={styles.modalInput}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder="Color (hex code)"
              value={listColor}
              onChangeText={setListColor}
              style={styles.modalInput}
              placeholderTextColor="#999"
            />

            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                style={styles.modalButtonExit}
                onPress={() => setEditModalVisible(false)}
              >
                <Text style={styles.modalExitText}>Exit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalButtonCreate}
                onPress={handleEditList}
              >
                <Text style={styles.modalCreateText}>Confirm</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
}
