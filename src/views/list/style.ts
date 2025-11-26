import { background, blue, lightGray, red, darkGray } from '@/src/styles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: background,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: darkGray,
  },

  listWrapper: {
    marginBottom: 20,
  },

  listItem: {
    padding: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  listTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: darkGray,
  },

  button: {
    backgroundColor: blue,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },

  buttonDelete: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 50,
    height: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: red,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  buttonTextDelete: {
    color: "black",
    fontSize: 14,
  },

  // 🚀 Modal styling (matches friend’s naming)
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: background,
    padding: 20,
  },

  modalBox: {
    width: "100%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },

  modalInput: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 12,
  },

  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },

  modalButtonExit: {
    width: "40%",
    height: 40,
    borderRadius: 25,
    backgroundColor: lightGray,
    justifyContent: "center",
    alignItems: "center",
  },

  modalExitText: {
    color: darkGray,
    fontSize: 16,
    fontWeight: "600",
  },

  modalButtonCreate: {
    width: "40%",
    height: 40,
    borderRadius: 25,
    backgroundColor: blue,
    justifyContent: "center",
    alignItems: "center",
  },

  modalCreateText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
