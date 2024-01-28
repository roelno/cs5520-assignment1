import { Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../components/MyButton';
import Card from '../components/Card';
import colors from '../helper/Colors';

const Game = ({ userName, userGuess, answer, attempts, onTryAgain, onGiveUp, hasUserWon, onCongrats, modalVisible }) => {
    const isAttemptsRemaining = attempts > 0;

    return (
        <Modal visible = {modalVisible}>
            <View style={styles.container}>
                <Card style={styles.card}>

                    {(userGuess < answer) && 
                    <View>
                        <Text style={styles.resultText}>Hello {userName}</Text>
                        <Text style={styles.resultText}>You have chosen <Text style={styles.stress}>{userGuess}</Text></Text>
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
                        <Text style={styles.resultText}>Hello {userName}</Text>
                        <Text style={styles.resultText}>You have chosen <Text style={styles.stress}>{userGuess}</Text></Text>
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

                    {(hasUserWon) &&
                    <View>
                        <Text style={styles.resultText}>
                            Congrats {userName}! You <Text style={styles.stress}>won ! 🎉</Text>
                        </Text>
                        <CustomButton
                            title="Thank you!"
                            onPress={ onCongrats }
                            isEnabled={true}
                        />
                    </View>
                    }
                </Card>
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
        backgroundColor: colors.background,
    },
    card: {

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
        color: colors.primary,
        marginVertical: 4,
    },
    stress: {
        fontWeight: 'bold',
        color: colors.secondary,
    },
});
