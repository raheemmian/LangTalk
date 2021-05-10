import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import SignUp from './components/SignUp';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <stack.Screen name = "LoginPage" component = {LoginPage}/>
        <stack.Screen name = "Home" component = {Home}/>
        <stack.Screen name = "SignUp" component = {SignUp}/>
      </stack.Navigator>
    </NavigationContainer>
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
