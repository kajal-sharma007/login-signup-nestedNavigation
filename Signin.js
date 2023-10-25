/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './styles';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';
//import { Button } from 'react-native-elements';
//import * as Facebook from "expo-facebook";

//const appId = '1047121222092614';

const Signin = () => {
  const onSigninPress = () => {};

  const onFbSigninPress = async () => {
    Alert.alert(
      'Please use our React Native Starer Kit instead. You can download it for free at https://instamobile.io'
    );
    // try {
    //   await Facebook.initializeAsync({
    //     appId,
    //   });
    //   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    //     permissions: ["public_profile", "email"],
    //   });
    //   if (type === "success") {
    //     const response = await fetch(
    //       `https://graph.facebook.com/me?access_token=${token}`
    //     );
    //     Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    //   }
    // } catch ({ message }) {
    //   Alert.alert(`Facebook Login Error: ${message}`);
    // }
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>SignUp</Text>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Button
              containerStyle={styles.fbLoginButton}
              type="clear"
              onPress={() => onFbSigninPress()}
              title="forgot password"
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onSigninPress()}
              title="Login"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;


