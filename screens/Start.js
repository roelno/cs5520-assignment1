import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import Header from '../components/Header'
import TextInputField from '../components/TextInput';
import Card from '../components/Card'; 
import CustomButton from '../components/MyButton'
import colors from '../helper/Colors';

const Start = ({userName, userGuess, validateGameStart, userNameHandler, userGuessHandler, attempts, attemptsHandler}) => {
    const headerText = 'Guess My Number';
    const [myName, setMyName] = useState(userName);
    const [myNameError, setMyNameError] = useState('');
    const [myGuess, setMyGuess] = useState(userGuess);
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
            userNameHandler(myName);
            userGuessHandler(myGuess);
            attemptsHandler(attempts - 1);
        }

        return isValid;
    };

    return (
        <SafeAreaView style = {styles.container}>
        
            <Header headerText = {headerText} />

            <Card style={styles.card}>
                <Text style = {styles.hint}>Name</Text>
                <TextInputField
                    value={myName}
                    onChangeText={setMyName}
                    errorMessage={myNameError}
                />
                <Text style = {styles.hint}>Enter a Number</Text>
                <TextInputField
                    value={myGuess}
                    onChangeText={setMyGuess}
                    keyboardType="numeric"
                    errorMessage={myGuessError}
                />

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isRobot}
                        onValueChange={setRobotChecked}
                        color={isRobot ? colors.secondary : colors.secondary}
                    />
                    <Text style={styles.checkboxLabel}>I'm not a robot</Text>
                </View>
                {isRobotError ? <Text style={styles.errorMessage}>{isRobotError}</Text> : null}

                <View style={styles.buttonContainer}>
                    <CustomButton
                        title='Reset'
                        onPress={() => resetAllUserInput() }
                        isEnabled={true}
                    />
                    <CustomButton
                        title='Confirm'
                        onPress={() => checkAllUserInput()}
                        isEnabled={true}
                    />
                </View>
            </Card>
            

        </SafeAreaView>
    )
}

export default Start

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
    card: {

    },
    errorMessage: {
        color: colors.error,
        fontSize: 12,
        marginTop: 1,
    },
    hint: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
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
        color: colors.secondary
    },
    buttonContainer: { 
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 240,
        marginTop: 20
    },
})