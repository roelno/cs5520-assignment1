import { StatusBar } from "expo-status-bar";
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Start from './screens/Start'
 
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar style="auto" />
      <Start />
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
