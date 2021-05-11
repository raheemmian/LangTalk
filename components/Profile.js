import React, { useState } from 'react';
import { Image, Button, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Avatar, TouchableRipple, Text, IconButton,Title, Caption} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                {/*header*/}
                <Avatar.Image size={100} source={require('../assets/Myrah.jpg')} />
                <View style={{marginLeft: 20}}>
                    <Title style={styles.title}>Myrah Malik</Title>
                </View>
            </View>
            <View style={styles.body}>
                <Text>body</Text>
            </View>
            <View style={styles.menuWrapper}> 
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Ionicons name = "settings-outline" size={25} color="#FF6347" />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Ionicons name = "help-circle-outline" size={25} color="#FF6347" />
                        <Text style={styles.menuItemText}>About</Text>
                    </View>
                </TouchableRipple>
            </View>
        </View>
    );
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    title:{
        marginTop: height*0.03,
    },
    header: {
        flex: 1,
        marginTop: height*0.08,
        marginLeft: width*0.1,
        flexDirection: 'row',
    },
    body: {
        flex: 2,
        marginLeft: width*0.1,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,        
        
    },
    menuWrapper: {
        flex: 3,
        marginTop: 10,
        justifyContent: 'flex-start',
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    }
});

export default Profile