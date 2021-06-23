//IMPORTS
import { StatusBar } from 'expo-status-bar'
import * as React from 'react';
import { StyleSheet, View, Button, Text, Animated } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import 'react-native-gesture-handler';

//EXPORTS → IMPORTS
import SearchScreen from './src/screens/SearchScreen'

//BODY
const Stack = createStackNavigator();

//EXPORT
export default (function App() {

  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="SearchScreen">

        <Stack.Screen name="Search Screen" component={SearchScreen} />

      </Stack.Navigator>
    }</NavigationContainer>
  );
})