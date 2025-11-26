import { useState } from "react";
import { useRouter } from "expo-router";
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Modal, 
  TextInput 
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getListsForBoard, addList, deleteList } from "@/src/services/list-service";
import styles from "./style";

export default function ListsScreen() {
  const { id } = useLocalSearchParams();
  const boardId = Number(id);
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState("");
  const [listColor, setListColor] = useState("");
  const [lists, setLists] = useState(getListsForBoard(boardId));
  const router = useRouter();
  
  function handleCreateList() {
    if (!listName.trim()) return;

    const newList = {
      id: Date.now(),
      name: listName,
      color: listColor || "#cccccc",
      boardId,
    };

    addList(newList);

    // 👇 Refresh state so UI updates
    setLists(getListsForBoard(boardId));

    // Reset fields
    setListName("");
    setListColor("");
    setModalVisible(false);
  }

  function handleDeleteList(id: number) {
    deleteList(id);

    // 👇 Refresh state so UI updates
    setLists(getListsForBoard(boardId));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lists for Board {boardId}</Text>

      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/list/${item.id}`)}
            style={[styles.listItem, { backgroundColor: item.color }]}
          >
            <Text style={styles.listTitle}>{item.name}</Text>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={() => handleDeleteList(item.id)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />


      {/* Add list button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add List</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Create New List</Text>

            <TextInput
              placeholder="List Name"
              value={listName}
              onChangeText={setListName}
              style={styles.modalInput}
            />

            <TextInput
              placeholder="Color (hex code)"
              value={listColor}
              onChangeText={setListColor}
              style={styles.modalInput}
            />

            <TouchableOpacity 
              style={styles.modalCreateButton} 
              onPress={handleCreateList}
            >
              <Text style={styles.modalButtonText}>Create</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.modalCancelButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
}
