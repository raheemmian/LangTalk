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
    SafeAreaView,
    TouchableOpacity,
    SectionList
} from 'react-native';
import { TouchableRipple } from 'react-native-paper'

import { Ionicons } from '@expo/vector-icons';

{/*Need this constant so the top logo doesnt cut into the camera. */ }
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

const DATA = [
    {
        title: "French",
        data: ["Myrah", "Raheem", "Khadija"]
    },
    {
        title: "English",
        data: ["John", "Arthur"]
    },
    
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

import {
    useFonts,
    Lora_400Regular
} from "@expo-google-fonts/lora"
// Drawer Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

const Home = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Lora_400Regular
    });
    const isEmptyList = false
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.loginTitle}>LangTalk</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("MapPage")}
                    style={styles.menuItem}
                >
                    <Ionicons name="map-outline" size={25} color='#BC8DFF' />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                {/*show this text if list is empty, added a ternary check*/}
                {
                    isEmptyList ? <Text>Add Favorites</Text> :
                        <SectionList
                            ItemSeparatorComponent={() => (<View style={styles.listItemSeparatorStyle} />)}
                            sections={DATA}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => <Item title={item} />}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={styles.sectionHeader}>{title}</Text>
                            )}
                        />
                }
            </View>
        </SafeAreaView>
    );
}
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: statusBarHeight
    },
    loginTitle: {
        fontFamily: "Lora_400Regular",
        fontSize: 35,
        color: '#BC8DFF',
        marginLeft: 20,
    },
    menuItem: {
        marginRight: 20,
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#FFF',
        padding: 20,
        width: width,
    },
    sectionHeader: {
        fontSize: 20,
        backgroundColor: 'rgba(247,247,247,1.0)',
        padding: 5
    },
    title: {
        fontSize: 15
    },
    listItemSeparatorStyle: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8',
    }

});

export default Home