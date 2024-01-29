import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../helper/Colors'

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
        color: colors.primary,
        marginTop: 80,
    }
})