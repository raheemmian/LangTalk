import React, { useState, useEffect, useContext} from 'react';
import Axios from 'axios'
import {
    Image,
    Text,
    Button,
    View,
    TextInput,
    StyleSheet,
    Alert,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    SectionList
} from 'react-native';
import { TouchableRipple } from 'react-native-paper'
import { UserContext } from './UserContext';
import { Ionicons } from '@expo/vector-icons';
import {
    useFonts,
    Lora_400Regular
} from "@expo-google-fonts/lora"

const Home = ({ route, navigation}) => {

    console.log(useContext(UserContext));
    return (
        <View>
            <Text>
             hello
            </Text>
        </View>
    );

}
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({

});

export default Home