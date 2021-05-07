import React, { useState } from 'react';
import { Image, Text, Button, View, TextInput, StyleSheet } from 'react-native';
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Lora_400Regular
} from "@expo-google-fonts/lora"

const LoginPage = () => {
    let [fontsLoaded] = useFonts({
        Lora_400Regular
    });
    if (!fontsLoaded) {
        return (<AppLoading />)
    }
    else {
        return (
            <View style={styles.loginView}>
                <Text style={styles.logintitle} >LangTalk</Text>
                <TextInput
                    placeholder="Email Address"
                />
                <TextInput
                    placeholder="Password"
                />
                <Button
                    title="Login"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logintitle: {
        fontFamily: "Lora_400Regular",
        fontSize: 50,
        color: 'rgb(73, 182, 160)',
    },
    loginview: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center"
    }
});

export default LoginPage