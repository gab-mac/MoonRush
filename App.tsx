import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddRecordModal from './src/components/addRecordModal';
import NavBar from './src/components/bottomIconsContainer';
import { styles } from './src/components/styles';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={appStyles.background}>
        <Text>Hello, world!</Text>
        <Text>Data base sync confirmation here</Text>
      </View>
      <AddRecordModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <NavBar setModalVisible={setModalVisible} />
    </>
  );
}

const appStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styles.color.primary
  }
})

export default App;