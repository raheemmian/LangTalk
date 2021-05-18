import React, { useState } from 'react';
import { Image, Text, Button, View, TextInput, StyleSheet, Alert, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import AppLoading from "expo-app-loading";
import { InputOutline } from 'react-native-input-outline'

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
            <SafeAreaView style={styles.container}>
                <View style={styles.header1} >
                    <Text style={styles.loginTitle}>LangTalk</Text>
                </View>
                <View style={styles.header2}>
                    <Text style={styles.welcome}>Welcome,</Text>
                    <Text style={styles.welcome}>Sign in to continue:</Text>
                </View>
                <View style={styles.body} >
                    <InputOutline
                        placeholder="Email Address"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={20}
                    />
                    <InputOutline
                        style={{
                            marginTop: 20,
                            marginBottom: 30
                        }}
                        placeholder="Password"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={20}
                        secureTextEntry={true}
                    />
                    <Button
                        color="#BC8DFF"
                        title="Sign in"
                        onPress={() => navigation.navigate("Home")}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.signupView}
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={styles.signupButton}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    header1: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header2: {
        // had to do 1.2 because the keyboard was cutting off the bottom of some words in "Sign in to continue"
        flex: 1.2,
    },
    body: {
        flex: 4,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    loginTitle: {
        fontFamily: "Lora_400Regular",
        fontSize: 50,
        color: '#BC8DFF',
        marginTop: 60,
    },
    welcome: {
        fontFamily: "Lora_400Regular",
        fontSize: 25,
        color: '#BC8DFF',
        marginLeft: 20,
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
    signupButton: {
        color: "#BC8DFF",
        fontFamily: "Lora_400Regular",
        fontSize: 20
    },
    signupView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20

    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
});

export default LoginPage