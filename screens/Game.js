import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomButton from '../components/MyButton';

const Game = ({ userName, userGuess, attempts, onTryAgain, onGiveUp, onUserWin, modalVisible }) => {
    const answer = 1025;
    const isAttemptsRemaining = attempts > 0;

    return (
        <Modal visible = {modalVisible}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.resultText}>Hello {userName}</Text>
                    <Text style={styles.resultText}>
                        You have chosen <Text style={styles.stress}>{userGuess}</Text>
                    </Text>

                    {(userGuess < answer) && 
                    <View>
                        <Text style={styles.resultText}>That's not my number!</Text>
                        <Text style={styles.resultText}>Guess higher!</Text>
                        <Text style={styles.resultText}>
                            You have <Text style={styles.stress}>{attempts}</Text> attempts left!
                        </Text>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                title="I am Done"
                                onPress={() => onGiveUp()}
                                isEnabled={true}
                            />
                            <CustomButton 
                                title="Let me try again"
                                onPress={() => isAttemptsRemaining ? onTryAgain() : null}  
                                isEnabled={isAttemptsRemaining} 
                            />
                        </View>
                    </View>
                    }

                    {(userGuess > answer) &&
                    <View>
                        <Text style={styles.resultText}>That's not my number!</Text>
                        <Text style={styles.resultText}>Guess lower!</Text>
                        <Text style={styles.resultText}>
                            You have <Text style={styles.stress}>{attempts}</Text> attempts left!
                        </Text>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                title="I am Done"
                                onPress={() => onGiveUp()}
                                isEnabled={true}
                            />
                            <CustomButton 
                                title="Let me try again"
                                onPress={() => isAttemptsRemaining ? onTryAgain() : null}   
                                isEnabled={isAttemptsRemaining}
                            />
                        </View>
                    </View>
                    }

                    {(userGuess == answer) && onUserWin(true) &&
                    <View>
                        <Text style={styles.resultText}>
                            Congrats <Text style={styles.stress}>{userName}</Text>! You won!
                        </Text>
                        <CustomButton
                            title="Thank you!"
                            onPress={ null }
                        />
                    </View>
                    }
                </View>
            </View>
        </Modal>
    );
}

export default Game;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: 'mistyrose'
    },
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
    buttonContainer: { 
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: 240,
        marginTop: 20
    },
    resultText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#007649',
        marginVertical: 4,
    },
    stress: {
        fontWeight: 'bold',
        color: 'purple',
    },
});
