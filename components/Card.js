import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../helper/Colors';

const Card = ({ children, style }) => {
    return (
        <View style={{ ...styles.card, ...style }}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 60,
        justifyContent: 'center',
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 30,
        margin: 20,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 10,
    },
});

export default Card;
