import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.button} 
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3, // for shadow on Android
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomButton;
