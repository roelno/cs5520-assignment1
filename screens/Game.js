import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Game = ({ userName, userGuess }) => {
    const answer = 1025;
    const [attempts, setAttempts] = useState(2);

    return (
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
                
            </View>
            }

            {(userGuess > answer) &&
            <View>
                <Text style={styles.resultText}>That's not my number!</Text>
                <Text style={styles.resultText}>Guess lower!</Text>
                <Text style={styles.resultText}>
                    You have <Text style={styles.stress}>{attempts}</Text> attempts left!
                </Text>
            </View>
            }

            {(userGuess == answer) && 
                <Text style={styles.resultText}>
                    Congrats <Text style={styles.stress}>{userName}</Text>! You won!
                </Text>
            }
        </View>
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
