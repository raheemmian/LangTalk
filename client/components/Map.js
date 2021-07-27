import React, { useState, useref, useEffect } from 'react';
import { Text, Button, View, TextInput, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
{/*Need this constant so the top logo doesnt cut into the camera. */ }
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight
import * as Location from 'expo-location'

{/*NOTE: You need to add NSLocationWhenInUseUsageDescription key in Info.plist to 
enable geolocation, otherwise it is going to fail silently! You will also need to add an 
explanation for why you need the users location against NSLocationWhenInUseUsageDescription in Info.plist. 
Otherwise Apple may reject your app submission. for IOS*/}

const MapPage = ({ navigation }) => {
    const [location, setLocation] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        console.log(text)
    }
    let mark;


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
                showsUserLocation={true}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 25,
                    longitudeDelta: 25,
                }}
            >
            <Marker
                title={"hello"}
                 coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}
                 onPress={console.log("hello")}
            />
            </MapView>
        </View >
    );
}
var { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: 'center'
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