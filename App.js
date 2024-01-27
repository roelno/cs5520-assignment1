import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Start from './screens/Start'
import Game from "./screens/Game";
 
const App = () => {
  const [canGameStart, setGameStart] = useState(false);
  const [userName, setUserName] = useState('');
  const [userGuess, setUserGuess] = useState('');

  const setGameStartState = (state) => {
    setGameStart(state);
  }

  const handleUserName = (name) => {
    setUserName(name);
  }

  const handleUserGuess = (guess) => {
    setUserGuess(guess);
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {canGameStart ? (
        <Game userName = {userName} userGuess = {userGuess}/>
      ) : (
        <Start 
          validateGameStart={setGameStartState}
          userNameHandler = {handleUserName}
          userGuessHandler = {handleUserGuess}
        />
      )}

      
      <Text>{canGameStart ? 'Game Started!!' : 'Game Not Started'}</Text>
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
