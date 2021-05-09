import React, { useState } from 'react';
import { Image, Text, Button, View, TextInput, StyleSheet, Alert } from 'react-native';
import AppLoading from "expo-app-loading";

import {
    useFonts,
    Lora_400Regular
} from "@expo-google-fonts/lora"


const LoginPage = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Lora_400Regular
    });
    if (!fontsLoaded) {
        return (<AppLoading />)
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={styles.loginTitle}>LangTalk</Text>
                </View>
                <View style={styles.body} >
                    <TextInput style={styles.textInputs}
                        placeholder="Email Address"
                    />
                    <TextInput style={styles.textInputs}
                        placeholder="Password"
                    />
                    <Button
                        color="#5F4B8BFF"
                        title="Login"
                        onPress={() => navigation.navigate("Home") }
                    />
                    <View style={styles.space} />
                    <Button
                        color="#5F4B8BFF"
                        title="Sign Up"
                        onPress={() =>
                             Alert.alert('simple button presed')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5F4B8BFF"
    },

    header: {
        flex: 1,
        backgroundColor: "#5F4B8BFF",
        //alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    body: {
        flex: 3,
        backgroundColor: '#E69A8DFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        //need this for the border radius to work for some reason
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        //justifyContent: 'space-between',
    },
    loginTitle: {
        fontFamily: "Lora_400Regular",
        fontSize: 50,
        color: 'white',
        //textAlign: 'center',
        //alignSelf: 'center',
        //justifyContent: ''
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 80,
        //alignItems: 'center',
    },
    textInputs: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        backgroundColor: 'white',
        paddingLeft: 30,
        margin: 10,
        marginBottom: 15
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
});

export default LoginPage