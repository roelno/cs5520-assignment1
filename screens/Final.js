import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CustomButton from '../components/MyButton';
import Card from '../components/Card'; 
import colors from '../helper/Colors';

const Final = ({hasUserWon, onStartAgain, answer}) => {
    const headerText = 'Game is Over';
  return (
    <View>
        <Header headerText={headerText}/>
        <Card style = {styles.card}>
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
        </Card>
    </View>
  )
}

export default Final

const styles = StyleSheet.create({
    card: {
    },
    resultText: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.primary,
        marginVertical: 4,
    },
    image: {
        width: 200, 
        height: 200, 
        margin: 10, 
        borderRadius: 10
    }
})