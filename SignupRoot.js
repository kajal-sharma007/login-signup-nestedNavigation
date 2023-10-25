/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HODsignup from '../screens/HODsignup';
import Facultysignup from '../screens/Facultysignup';
import Studentsignup from '../screens/Studentsignp';

const Stack = createNativeStackNavigator();

function SignupRoot() {
    return (
    <NavigationContainer>
      <Stack.Navigator useLegacyImplementation>
        <Stack.Screen name="HOD" component={HODsignup} />
        <Stack.Screen name="Faculty" component={Facultysignup} />
        <Stack.Screen name="Student" component={Studentsignup} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default SignupRoot;
