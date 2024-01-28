import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, SafeAreaView } from 'react-native';
import colors from '../helper/Colors';

const GradientWrapper = ({ children }) => {
    return (
        <LinearGradient
            colors={ ['mistyrose', 'lavender']} 
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    safeArea: {
        flex: 1,
    },
});

export default GradientWrapper;
