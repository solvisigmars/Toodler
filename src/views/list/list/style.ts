import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  listItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  deleteText: {
    color: "red",
    marginTop: 10,
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

  modalCreateButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },

  modalCancelButton: {
    padding: 10,
    marginTop: 10,
  },

  modalButtonText: {
    color: "white",
    textAlign: "center",
  },
});
