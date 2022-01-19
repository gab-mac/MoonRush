import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/navBar';

const App = () => {
  return (
    <>
      <View style={styles.background}>
        <Text>Hello, world!</Text>
      </View>
      <NavBar />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
})

export default App;