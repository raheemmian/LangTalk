import React, { useState, useref } from 'react';
import { Text, Button, View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';

{/*Need this constant so the top logo doesnt cut into the camera. */ }
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight



const MapPage = ({ navigation }) => {
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
            <MapView
                style={styles.mapcontainer}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />

        </View>
    );
}
var { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header: {
        flex: 1,
        marginTop: statusBarHeight,
        alignItems: 'flex-end',
        justifyContent: 'center'

    },
    menuItem: {
        marginRight: 20,
    },
    mapcontainer: {
        flex: 15,
        width: width,
        height: height,
    },

});

export default MapPage