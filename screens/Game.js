import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomButton from '../components/MyButton';

const Game = ({ userName, userGuess, attempts, onTryAgain, onGiveUp, onUserWin, modalVisible }) => {
    const answer = 1025;

    return (
        <Modal visible = {modalVisible}>
            <View style={styles.container}>
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
                    <CustomButton
                        title="I am Done"
                        onPress={() => onGiveUp()}
                    />
                    <CustomButton 
                        title="Let me try again"
                        onPress={() => attempts > 0 ? onTryAgain() : null}   
                    />
                </View>
                }

                {(userGuess > answer) &&
                <View>
                    <Text style={styles.resultText}>That's not my number!</Text>
                    <Text style={styles.resultText}>Guess lower!</Text>
                    <Text style={styles.resultText}>
                        You have <Text style={styles.stress}>{attempts}</Text> attempts left!
                    </Text>
                    <CustomButton
                        title="I am Done"
                        onPress={null}
                    />
                    <CustomButton 
                        title="Let me try again"
                        onPress={() => attempts > 0 ? onTryAgain() : null}   
                    />
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
        </Modal>
    );
}

export default Game;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
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
