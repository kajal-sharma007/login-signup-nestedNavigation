/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/HomeScreen';
import SignUpbutton from '../src/SignUpbutton';
import { enableScreens } from 'react-native-screens';
import LoginScreen from '../screens/LoginScreen';
import HODsignup from '../screens/HODsignup';
import Facultysignup from '../screens/Facultysignup';
import Studentsignp from '../screens/Studentsignp';

enableScreens(true);
const BottomTab = createBottomTabNavigator();

function SignupRoot() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="HODsignup" component={HODsignup} />
        <BottomTab.Screen name="Facultysignup" component={Facultysignup} />
        <BottomTab.Screen name="Studentsignp" component={Studentsignp} />
    </BottomTab.Navigator>
  );
}

const stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="LoginScreen" component={LoginScreen} />
        <stack.Screen name="SignUpbutton" component={SignUpbutton} />
        <stack.Screen name="SignupRoot" component={SignupRoot}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigation;
