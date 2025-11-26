import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  listWrapper: {
    marginBottom: 20,
  },

  listItem: {
    padding: 40,
    borderRadius: 15,
    justifyContent: 'center',   
    alignItems: 'center',        
    position: 'relative',
  },

  listTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  addButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  addButtonText: {
    color: 'white',
    fontSize: 18,
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },

  modalBox: {
    width: '100%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  modalInput: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 12,
  },

  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },

  modalExitButton: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 18,
  },

  modalExitText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },

  modalCreateButton: {
    backgroundColor: '#4b7bec',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 18,
  },

  modalCreateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },


  deleteButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#e74c3c',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    zIndex: 10,
  },

  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
