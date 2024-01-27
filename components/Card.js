import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
    return (
        <View style={{ ...styles.card, ...style }}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
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
});

export default Card;
