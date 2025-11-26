import { StyleSheet } from 'react-native';
import { red, blue, lightGray, background, darkGray } from '@/src/styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: darkGray,
  },

  taskWrapper: {
    marginBottom: 20,
  },

  taskItem: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },

  taskTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: darkGray,
  },

  finishedTaskText: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },

  Description: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
    color: darkGray,
  },

  // DELETE BUTTON (same style as board delete!)
  buttonDelete: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 50,
    height: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  buttonTextDelete: {
    color: 'black',
    fontSize: 14,
  },

  // MOVE BUTTON
  buttonMove: {
    position: 'absolute',
    top: 10,
    right: 70,
    backgroundColor: blue,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },

  buttonTextMove: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },

  // TOGGLE ✓ / X
  toggleButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: lightGray,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  toggleButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkGray,
  },

  // ADD TASK
  button: {
    backgroundColor: blue,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  // MODAL
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: background,
    padding: 20,
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '85%',
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: darkGray,
  },

  modalInput: {
    borderWidth: 1,
    borderColor: lightGray,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },

  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  modalButtonExit: {
    width: '40%',
    height: 40,
    borderRadius: 25,
    backgroundColor: lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalExitText: {
    color: darkGray,
    fontWeight: 'bold',
  },

  modalButtonCreate: {
    width: '40%',
    height: 40,
    borderRadius: 25,
    backgroundColor: blue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCreateText: {
    color: 'white',
    fontWeight: 'bold',
  },

  // Move list options
  moveOption: {
    padding: 12,
    backgroundColor: lightGray,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },

  moveOptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: darkGray,
  },
});
