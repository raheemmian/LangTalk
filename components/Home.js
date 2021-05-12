import React, { useState } from 'react';

import { 
    Image, 
    Text,
     Button, 
     View, 
     TextInput, 
     StyleSheet,
      Alert, 
      Dimensions, 
      SafeAreaView
    } from 'react-native';
    import { TouchableRipple} from 'react-native-paper'

import {Ionicons} from '@expo/vector-icons';

import {
    useFonts,
    Lora_400Regular
} from "@expo-google-fonts/lora"
// Drawer Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

const Home = () =>  {
    const [search, setSearch] = useState('')
    let [fontsLoaded] = useFonts({
        Lora_400Regular
    });
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.loginTitle}>LangTalk</Text>
                <TouchableRipple 
                onPress={() => {}}
                style={styles.menuItem}
                >
                    <View >
                        <Ionicons name = "ellipsis-vertical-outline" size={25} color="grey" />
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
}
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        flex: 2,
        flexDirection: 'row',
    },
    searchb: {
        marginTop: height*0.08,
        width: width*0.8,
    },
    loginTitle: {
        fontFamily: "Lora_400Regular",
        fontSize: 35,
        color: 'purple',
        marginTop: height*0.07,
        marginLeft: 20,
    },
    menuItem: {
        marginTop: height*0.09,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Home