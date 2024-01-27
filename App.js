import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Start from './screens/Start'
 
const App = () => {
  const [canGameStart, setGameStart] = useState(false);
  const setGameStartState = (state) => {
    setGameStart(state);
  }


  return (
    <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
      <Start validateGameStart = {setGameStartState}/>
      <Text>{canGameStart ? 'Game Started' : 'Game Not Started'}</Text>
    </SafeAreaView>
  )
}


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mistyrose',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
