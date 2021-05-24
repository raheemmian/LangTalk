import React, { useState } from 'react';
import { Image, Text, Button, View, TextInput, StyleSheet, Alert, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import AppLoading from "expo-app-loading";
import { InputOutline, InputStandard } from 'react-native-input-outline'
import DropDownPicker from 'react-native-dropdown-picker';
import Axios from 'axios';

import {
    useFonts,
    Lora_400Regular
} from "@expo-google-fonts/lora"



const LoginPage = ({ navigation }) => {
    {/*set the states for the registration form*/ }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [role, setRole] = useState("")

    //registration method passes data to the back end.
    const register = () => {
        console.log('in register')
        Axios.post('http://10.0.2.2:3001/register',
            {
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
                role: role,

            }).then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            });
    }


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
            <SafeAreaView
                style={styles.container}
                nestedScrollEnabled={true}
            >
                <View style={styles.header1} >
                    <Text style={styles.loginTitle}>LangTalk</Text>
                </View>
                <ScrollView style={styles.body} >

                    <InputStandard
                        //email address input line
                        style={{
                            marginBottom: 20,
                            marginTop: 5
                        }}
                        placeholder="Email Address"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={15}
                        onChange={(e) => {
                            setUsername(e.nativeEvent.text)
                        }}
                    />
                    <InputStandard
                        // password input line
                        style={{
                            marginBottom: 20
                        }}
                        placeholder="Password"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={15}
                        onChange={(e) => {
                            setPassword(e.nativeEvent.text)
                        }}

                    />
                    <InputStandard
                        // confirm password input line
                        style={{
                            marginBottom: 20
                        }}
                        placeholder="Confirm Password"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={15}
                        onChange={(e) => {
                            setConfirmPassword(e.nativeEvent.text)
                        }}
                    />
                    <InputStandard
                        // first name input line
                        style={{
                            marginBottom: 20
                        }}
                        placeholder="First Name"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={15}
                        onChange={(e) => {
                            setFirstname(e.nativeEvent.text)
                        }}
                    />
                    <InputStandard
                        // last name input line
                        style={{
                            marginBottom: 20
                        }}
                        placeholder="Last Name"
                        activeColor="#BC8DFF"
                        fontFamily="Lora_400Regular"
                        fontSize={15}
                        onChange={(e) => {
                            setLastname(e.nativeEvent.text)
                        }}
                    />
                    <View >
                        <DropDownPicker
                            // check if teacher or student drop down picker.
                            placeholderStyle={{
                                color: "grey",
                                fontFamily: "Lora_400Regular",
                                fontSize: 15
                            }}
                            textStyle={{
                                fontFamily: "Lora_400Regular",
                                fontSize: 15
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
                            //Removes warning of virtualized list inside of scroll view!
                            listMode="SCROLLVIEW"
                            onChangeValue={(value) => {
                                setRole(value)
                            }}
                        />
                    </View>
                    <Button
                        color="#BC8DFF"
                        title="Submit"
                        onPress={() => {
                            // TODO : add error messages based on missing information
                            // TODO : add constraints for fields
                            // TODO : check if username is unique
                            if (username != "" && password != "" && confirmPassword != "" && firstname != "" && lastname != "" && role != "") {
                                if (password == confirmPassword) {
                                    //check if username is unique.
                                    Axios.post('http://10.0.2.2:3001/user',
                                        {
                                            username: username,
                                        }).then((response) => {
                                            console.log(response.data)
                                            // if the username is not in the database
                                            if (!response.data){
                                                //send the information to the backend and navigate to the login page.
                                                register() 
                                                navigation.navigate("LoginPage") 
                                            }   
                                        }).catch((err) => {
                                            console.log(err)
                                        });
                                    
                                                 
                                }

                            }
                        }}
                    />
                </ScrollView>
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
        flex: 0.25,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    ddp: {
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