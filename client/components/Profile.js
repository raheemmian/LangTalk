import React, { useState } from 'react';
import { Image, Button, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Avatar, TouchableRipple, Text, IconButton,Title, Caption} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {Badge} from 'react-native-elements';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Online', value: 'online', icon: () => <Badge status="success"/>},
      {label: 'Away', value: 'away', icon: () => <Badge status="error"/>},
      {label: 'Offline', value: 'offline', icon: () => <Badge status="primary"/>}
    ]);
  
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                {/*header*/}
                <Avatar.Image size={100} source={require('../assets/Myrah.jpg')} />
                <View style={{marginLeft: 20}}>
                    <Title style={styles.title}>Myrah Malik</Title>
                    <DropDownPicker
                        style = {styles.ddp}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder={"Status"}
                        searchable={false}
                        showTickIcon={false}
                        showArrowIcon={false}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <Text
                   style={styles.bio}
                   multiline= {true} 
                   placeholder = {"Bio"}
                   numberOfLines = {10}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
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
    offline:{
        backgroundColor: "red",
    },
    ddp:{
        width: width*0.5
    },
    bio: {
        marginTop: height*0.02,
        borderWidth: 2,
        width: width*0.85,
        height: height * 0.3,
        paddingLeft: 5,
        paddingRight: 5,
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
        justifyContent: 'flex-end',
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