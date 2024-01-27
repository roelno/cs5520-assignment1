import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({headerText}) => {
  return (
    <View>
      <Text style={styles.header}>{headerText}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'center',
        color: '#007649',
        marginTop: 80,
    }
})