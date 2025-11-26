import { red } from '@/src/styles/color';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',      
    alignSelf: 'center',
  },

  taskWrapper: {
    marginBottom: 20,
  },

  taskItem: {
    backgroundColor: "#ffffff",   
    padding: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: "#ddd",          
  },

  taskTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  addButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  addButtonText: {
    color: "white",
    fontSize: 18,
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },

  modalBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },

  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },

  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  modalExitButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    width: "45%",
  },

  modalExitText: {
    textAlign: "center",
    fontWeight: "bold",
  },

  modalCreateButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    width: "45%",
  },

  modalCreateText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  deleteButton: {
    width: 50,
    height: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red,   // ← use same color variable
    position: 'absolute',
    top: 10,
    left: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  deleteButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
  },
});
