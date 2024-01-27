import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Start from './screens/Start'
import Game from "./screens/Game";
 
const App = () => {
  const [canGameStart, setGameStart] = useState(false);
  const [hasUserWon, setHasUserWon] = useState(false);

  const [userName, setUserName] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [attempts, setAttempts] = useState(3);

  const [modalVisible, setModalVisible] = useState(true);

  const setGameStartState = (state) => {
    setGameStart(state);
  }

  const handleUserWin = (win) => {
    setHasUserWon(win);
  }

  const handleUserName = (name) => {
    setUserName(name);
  }

  const handleUserGuess = (guess) => {
    setUserGuess(guess);
  }

  const handleAttempts = (attempt) => {
    setAttempts(attempt);
  }

  const handleTryAgain = () => {
    setGameStart(false);
  }

  const onGiveUp = () => {
    setModalVisible(false);
    // show final
  }





  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {canGameStart && !hasUserWon ? (
        <Game
          userName = {userName} 
          userGuess = {userGuess}
          attempts = {attempts}
          onTryAgain={handleTryAgain}
          onGiveUp={onGiveUp}
          hasUserWon={hasUserWon}
          onUserWin={handleUserWin}
          modalVisible={modalVisible}
        />
      ) : (
        <Start
          userName = {userName}
          userGuess = {userGuess}
          validateGameStart = {setGameStartState}
          userNameHandler = {handleUserName}
          userGuessHandler = {handleUserGuess}
          attempts = {attempts}
          attemptsHandler = {handleAttempts} />
      )}

      <Text>Name is {userName}</Text>
      <Text>Guess is {userGuess}</Text>
      <Text>Attempts left {attempts}</Text>
      <Text>Modal is {modalVisible ? 'visible' : 'hidden'}</Text>
      <Text>Has user won? {hasUserWon ? 'Yes' : 'No'}</Text>
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
