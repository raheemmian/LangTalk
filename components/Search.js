import React, { useState, useref } from 'react';
import { Text, Button, View, TextInput, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

// import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';

{/*Need this constant so the top logo doesnt cut into the camera. */ }
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight

import {
    useFonts,
    Lora_400Regular
} from "@expo-google-fonts/lora"

// Item array for the dropdown
const items = [
    // name key is must. It is to show the text in front
    { id: 1, name: 'Mandarin Chinese' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'English' },
    { id: 4, name: 'Hindi/Urdu' },
    { id: 5, name: 'Arabic' },
    { id: 6, name: 'Bengali' },
    { id: 7, name: 'Portuguese' },
    { id: 8, name: 'Russian' },
    { id: 9, name: 'Japanese' },
    { id: 10, name: 'German' },
    { id: 11, name: 'Javanese' },
    { id: 12, name: 'Punjabi' },
    { id: 13, name: 'Wu' },
    { id: 14, name: 'French' },
    { id: 15, name: 'Telugu' },
    { id: 16, name: 'Vietnamese' },
    { id: 17, name: 'Marathi' },
    { id: 18, name: 'Korean' },
    { id: 19, name: 'Tamil' },
    { id: 20, name: 'Italian' },
    { id: 21, name: 'Turkish' },
    { id: 22, name: 'Cantonese/Yue' },
];

const Search = () => {
    const [selectedItems, setSelectedItems] = useState([])
    return (
        <View style={styles.container}>
            <View style={styles.searchBarStyle}>
                <SearchableDropdown
                    onTextChange={(text) => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={(item) => alert("coolZ")}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{padding: 5}}
                    //suggestion container style
                    textInputStyle={{
                        //inserted text style
                        borderWidth: 1,
                        borderColor: '#ccc',
                        backgroundColor: '#FAF7F6',
                        padding: 10,
                        fontFamily: "Lora_400Regular",
                        fontSize: 16,
                    }}
                    itemStyle={{
                        //single dropdown item style
                        backgroundColor: '#FAF9F8',
                        borderColor: '#bbb',
                        borderWidth: 1,
                        padding: 5
                    }}
                    itemTextStyle={{
                        //text style of a single dropdown item
                        color: '#222',
                        fontFamily: "Lora_400Regular",
                        fontSize: 14,

                    }}
                    itemsContainerStyle={{
                        //items container style you can pass maxHeight
                        //to restrict the items dropdown hieght
                        maxHeight: '100%',
                    }}
                    items={items}
                    //default selected item index
                    placeholder="Search a language..."
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                //To remove the underline from the android input
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    searchBarStyle: {
        marginTop: statusBarHeight,
    }

});

export default Search