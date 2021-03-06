import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Setting from './components/Settings';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import MapPage from './components/Map';
import Search from './components/Search';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { UserContext } from './components/UserContext';


const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return(
  <Tab.Navigator screenOptions = {({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName
      if (route.name == "Home"){iconName = "home"}
      else if(route.name == "Favorites"){iconName = "star"}
      else if(route.name == "Profile"){iconName = "person"}
      return <Ionicons name = {iconName} size={size} color={color} />
    }
  })}>
  <Tab.Screen name = "Home" component = {Home}/>
  <Tab.Screen name = "Favorites" component = {Favorites} />
  <Tab.Screen name = "Profile" component = {Profile}/>  
</Tab.Navigator>
);
}

export default function App() {
  const [user, setUser] = useState("null");


  return (
    <UserContext.Provider value={{user, setUser}}>
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{headerShown:false}}
      >
          <stack.Screen name = "LoginPage" component = {LoginPage}/> 

          {/*The naviagtion tabs on the bottom of the home screen*/}
          <stack.Screen name = "HomeTabNavigator" component = {HomeTabNavigator}>
          </stack.Screen>
        

        <stack.Screen name = "SignUp" component = {SignUp}/>
        <stack.Screen name = "MapPage" component = {MapPage}/>
        <stack.Screen name = "Search" component = {Search}/>
      </stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
