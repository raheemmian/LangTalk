import React, { useState, useref } from 'react';
import { Text, Button, View, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

{/*Need this constant so the top logo doesnt cut into the camera. */ }
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight



const MapPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}
                    style={styles.menuItem}
                >
                    <Ionicons name="search-outline" size={25} color='#BC8DFF' />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    body: {
        flex: 9,
    },
    header: {
        flex: 1,
        marginTop: statusBarHeight,
        alignItems: 'flex-end',

    },
    menuItem: {
        marginRight: 20,
    },

});

export default MapPage