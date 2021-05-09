import React, { useState } from 'react';
import { Image, Text, Button, View, TextInput, StyleSheet, Alert } from 'react-native';

const Home = () => {
    return (
    <View style={styles.container}>
        <Text>hello welcome to the home screen</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5F4B8BFF",
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Home