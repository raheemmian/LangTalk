import React, { useState } from 'react';
import { Image, Text, Button, View, TextInput, StyleSheet, Alert, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import AppLoading from "expo-app-loading";
import { InputOutline, InputStandard } from 'react-native-input-outline'
import DropDownPicker from 'react-native-dropdown-picker';

import {
    useFonts,
    Lora_400Regular
} from "@expo-google-fonts/lora"


const LoginPage = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Teacher', value: 'teacher' },
        { label: 'Student', value: 'student' },
    ]);
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
                <View style={styles.body} >
                    <InputStandard
                        style={{
                            marginBottom: 20
                        }}
                        placeholder="Email Address"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={15}
                    />
                    <InputStandard
                        style={{
                            marginBottom: 20
                        }}
                        placeholder="Password"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={15}

                    />
                    <InputStandard
                        style={{
                            marginBottom: 20
                        }}
                        placeholder="Confirm Password"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={15}
                    />
                    <View >
                        <DropDownPicker
                            placeholderStyle={{
                                color: "grey",
                                fontFamily: "Lora_400Regular",
                                fontSize: 15
                            }}
                            textStyle={{
                                fontFamily: "Lora_400Regular",
                                fontSize: 15
                            }}
                            containerStyle = {{
                                
                            }}
                            style={styles.ddp}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder={"Select Role"}
                            searchable={false}
                            showTickIcon={true}
                            showArrowIcon={true}
                            disableBorderRadius={true}
                            dropDownDirection="bottom"
                        />
                    </View>
                    <Button
                        color="#BC8DFF"
                        title="Submit"
                        onPress={() => navigation.navigate("LoginPage")}
                    />
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
    body: {
        flex: 4,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    ddp:{
        marginBottom: 100
    },
    loginTitle: {
        fontFamily: "Lora_400Regular",
        fontSize: 50,
        color: '#BC8DFF',
        marginTop: 60,
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