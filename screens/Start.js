import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import Header from '../components/Header'
import CustomButton from '../components/MyButton'

const Start = ({validateGameStart}) => {
    const headerText = 'Guess My Number';
    const [myName, setMyName] = useState('');
    const [myNameError, setMyNameError] = useState('');
    const [myGuess, setMyGuess] = useState('');
    const [myGuessError, setMyGuessError] = useState('');
    const [isRobot, setRobotChecked] = useState(false);
    const [isRobotError, setRobotCheckedError] = useState('');

    const resetAllUserInput = () => {
        setMyName('');
        setMyGuess('');
        setRobotChecked(false);
        setMyNameError('');
        setMyGuessError('');
        setRobotCheckedError('');
    }

    const checkAllUserInput = () => {
        let isValid = true;
        setMyNameError('');
        setMyGuessError('');
        setRobotCheckedError('');

        if (myName === '') {
            setMyNameError('Please enter your name');
            isValid = false;
        } else if (!myName.match(/^[A-Za-z ]+$/)) {
            setMyNameError('Please enter your name in English');
            isValid = false;
        }

        if (myGuess === '') {
            setMyGuessError('Please enter a number');
            isValid = false;
        } else if (isNaN(myGuess)) {
            setMyGuessError('Please enter a number');
            isValid = false;
        } else if (myGuess < 1020 || myGuess > 1029) {
            setMyGuessError('Please be between 1020 and 1029');
            isValid = false;
        }

        if (!isRobot) {
            setRobotCheckedError('Please confirm you are not a robot');
            isValid = false;
        }

        if (isValid) {
            validateGameStart(true);
        }

        return isValid;
    };

    return (
        <SafeAreaView style = {styles.container}>
        
            <Header headerText = {headerText} />

            <View style = {styles.card}>
                <Text style = {styles.hint}>Name</Text>
                <TextInput style = {styles.input}
                    value = {myName}
                    onChangeText = {(name) => setMyName(name)}
                />
                {myNameError ? <Text style={styles.errorInput}>{myNameError}</Text> : null}

                <Text style = {styles.hint}>Enter a Number</Text>
                <TextInput style = {styles.input}
                    value = {myGuess}
                    onChangeText = {(num) => setMyGuess(num)}
                    keyboardType="numeric"
                />
                {myGuessError ? <Text style={styles.errorInput}>{myGuessError}</Text> : null}


                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isRobot}
                        onValueChange={setRobotChecked}
                        color={isRobot ? 'purple' : 'purple'}
                    />
                    <Text style={styles.checkboxLabel}>I'm not a robot</Text>
                </View>
                {isRobotError ? <Text style={styles.errorInput}>{isRobotError}</Text> : null}

                <View style={styles.buttonContainer}>
                    <CustomButton
                        title='Reset'
                        onPress={() => resetAllUserInput() }
                    />
                    <CustomButton
                        title='Confirm'
                        onPress={() => checkAllUserInput()}
                    />
                </View>
            </View>
            

        </SafeAreaView>
    )
}

export default Start

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    card: {
        marginTop: 80,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 5,
    },
    input: {
        height: 40,
        // margin: 12,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'purple',
        color: 'purple',
        width: 240,
    },
    errorInput: {
        color: 'red',
        marginTop: 1,
    },
    hint: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007649',
        marginTop: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    checkbox: {
        margin: 8,
    },
    checkboxLabel: {
        fontSize: 16,
        color: 'purple'
    },
    buttonContainer: { 
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 240,
        marginTop: 20
    },
})