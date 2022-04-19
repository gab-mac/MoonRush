import React, { useState, Dispatch, SetStateAction } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { styles } from './styles';

type Props = {
    modalVisible: boolean,
    setModalVisible: Dispatch<SetStateAction<boolean>>
}

const AddRecordModal = ({modalVisible, setModalVisible}: Props) => {
  const [value, setValue] = useState('')

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.textStyle}>Add a new record</Text>
            <TextInput value={value} onChangeText={setValue} keyboardType='numeric' style={modalStyles.input}></TextInput>
            <TextInput value={value} onChangeText={setValue} keyboardType='numeric' style={modalStyles.input}></TextInput>
            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalStyles.textStyle}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: styles.color.secondary,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: styles.color.secondary,
  },
  buttonClose: {
    backgroundColor: styles.color.primaryVariant,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderColor: styles.color.primaryVariant,
    color: 'white'
  }
});

export default AddRecordModal;