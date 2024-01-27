import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Start = () => {
    const headerText = 'Guess My Number';
    
    return (
        <SafeAreaView>
            <Header headerText={headerText} />
        </SafeAreaView>
    )
}

export default Start

const styles = StyleSheet.create({})