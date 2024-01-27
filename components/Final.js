import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'

const Final = () => {
    const headerText = 'Game is Over';
  return (
    <View>
      <Header headerText={headerText}/>
    </View>
  )
}

export default Final

const styles = StyleSheet.create({})