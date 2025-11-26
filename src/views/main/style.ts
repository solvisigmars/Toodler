import { background, blue, boards, darkGray, lightGray, red } from '@/src/styles/color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: darkGray
  },
  board: {
    backgroundColor: boards,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },
  description: {
    fontSize: 15,
    fontWeight: 'normal',
    marginBottom: 10,
    textAlign: 'left',
    color: darkGray
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: blue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: darkGray,
    fontSize: 25,
    fontWeight: 'bold'
  },
  buttonTextDelete:{
    color: 'black',
    fontSize: 14
  },
  buttonDelete:{
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
  buttonEdit:{
    width: 50,
    height: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightGray,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonTextEdit:{
    color: darkGray,
    fontWeight: 'bold',
    fontSize: 14
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width:'80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black'
  },
  modalInput: {
    backgroundColor: background,
    padding: 20,
    borderRadius: 8,
    marginBottom: 10
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    gap: 120
  },
  modalButtonCreate: {
    backgroundColor: blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    minWidth: 100,
    alignItems: 'center',
    flex: 1
  },
  modalButtonExit:{
    backgroundColor: lightGray,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 18,
    minWidth: 100,
    alignItems: 'center',
    flex: 1
  },
  modalButtonText:{
    color: darkGray,
    fontSize: 15
  }
})
