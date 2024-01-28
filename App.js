import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import Start from './screens/Start'
import Game from "./screens/Game";
import Final from "./screens/Final";
import colors from "./helper/Colors";
 
const App = () => {
  const [canGameStart, setGameStart] = useState(false);
  const [hasUserWon, setHasUserWon] = useState(false);
  const [isGameFinished, setGameFinished] = useState(false);
  
  const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1020;
  const [answer, setAnswer] = useState(generateRandomNumber());

  const [userName, setUserName] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [attempts, setAttempts] = useState(3);

  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (userGuess == answer) {
      setHasUserWon(true);
    }
}, [userGuess, answer, hasUserWon]);


  const setGameStartState = (state) => {
    setGameStart(state);
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
    setGameFinished(true);
    setAttempts(0);
  }

  const startAgain = () => {
    setGameFinished(false);
    setGameStart(false);
    setModalVisible(true);
    setUserName('');
    setUserGuess('');
    setAttempts(3);
    setHasUserWon(false); 
    setAnswer(generateRandomNumber()); 
  }

  const onCongrats = () => {
    setGameFinished(true);
    setAttempts(0);
  }




  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {canGameStart && !isGameFinished ? (
        <Game
          userName = {userName} 
          userGuess = {userGuess}
          answer = {answer}
          attempts = {attempts}
          onTryAgain={handleTryAgain}
          onGiveUp={onGiveUp}
          onCongrats = {onCongrats}
          hasUserWon={hasUserWon}
          modalVisible={modalVisible}
        />
      ) : !canGameStart ? (
        <Start
          userName = {userName}
          userGuess = {userGuess}
          validateGameStart = {setGameStartState}
          userNameHandler = {handleUserName}
          userGuessHandler = {handleUserGuess}
          hasUserWon = {hasUserWon}
          attempts = {attempts}
          attemptsHandler = {handleAttempts} 
          />
      ): (
        <Final 
          hasUserWon = {hasUserWon}
          onStartAgain = {startAgain}
          answer = {answer}/>
      )} 
        
      

      {/* <Text>Name is {userName}</Text>
      <Text>Guess is {userGuess}, Answer is {answer}</Text>
      <Text>Attempts left {attempts}</Text>
      <Text>Modal is {modalVisible ? 'visible' : 'hidden'}</Text>
      <Text>Has user won? {hasUserWon ? 'Won' : 'No'}</Text>
      <Text>Is game finished? {isGameFinished ? 'Yes' : 'No'}</Text>
      <Text >{canGameStart ? 'Game Started!!' : 'Game Not Started'}</Text> */}
    </SafeAreaView>
  )
}


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
});
