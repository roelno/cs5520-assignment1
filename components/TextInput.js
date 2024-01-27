import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

const TextInputField = ({ value, onChangeText, placeholder, keyboardType, errorMessage }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType || 'default'}
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: 'purple',
        color: 'purple',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 3,
    },
});

export default TextInputField;
