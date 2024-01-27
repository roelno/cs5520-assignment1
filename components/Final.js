import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from './Header'
import CustomButton from './MyButton';

const Final = ({hasUserWon, onStartAgain, answer}) => {
    const headerText = 'Game is Over';
  return (
    <View>
        <Header headerText={headerText}/>
        <View style = {styles.card}>
            <Text style = {styles.resultText}>Here's your picture</Text>
            {hasUserWon ? 
            <Image source = {{uri: `https://picsum.photos/id/${answer}/100/100`}} style = {styles.image}/> 
            :
            <Image source={require('../assets/sad.png')} style = {styles.image}/>}
            
            <CustomButton
                title="Start Again"
                onPress={() => onStartAgain()}
                isEnabled={true}
            />
        </View>
    </View>
  )
}

export default Final

const styles = StyleSheet.create({
    card: {
        marginTop: 80,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 30,
        margin: 20,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 5,
    },
    resultText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#007649',
        marginVertical: 4,
    },
    image: {
        width: 200, 
        height: 200, 
        margin: 10, 
        borderRadius: 10
    }
})