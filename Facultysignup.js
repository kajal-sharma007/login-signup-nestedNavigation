/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './styles';
import signupImage from '../assets/signup.webp';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  View,
  ImageBackground,
} from 'react-native';
//import { Button } from 'react-native-elements';
//import * as Facebook from "expo-facebook";

//const appId = '1047121222092614';
function Facultysignup () {

  return (
    <View style={style.containerView}>
    <ImageBackground source={signupImage} style={style.container}>
    <Text style={styles.logoText}>SIGNUP</Text>
    <Text style={{fontSize: 10, marginBottom: 5, flexDirection:'column',fontWeight: 700}}>(FOR FACULTY)</Text>
    <TextInput
      placeholder="Teacher ID"
      placeholderColor="#c4c3cb"
      style={styles.loginFormTextInput}
    />
    <TextInput
      placeholder="Code"
      placeholderColor="#c4c3cb"
      style={styles.loginFormTextInput}
    />
    <TouchableHighlight style={style.button}>
      <Text style={style.text}>DONE</Text>
    </TouchableHighlight>
   </ImageBackground>
  </View>
);
}

export default Facultysignup;

const style = StyleSheet.create({
  button:{
  backgroundColor: '#008B8B',
  borderRadius: 50,
  height: 40,
  marginTop: 10,
  marginLeft: 10,
  width: 150,
  },
  text:{
  textAlign: 'center',
  color: '#fff',
  fontSize: 15,
  padding: 7,
  },
  fbLoginButton: {
  height: 18,
  marginTop: 1,
  marginLeft: 120,
  backgroundColor: 'transparent',
  alignItems: 'flex-end',
  },
  fbbuttontxt:{
  color: '#808080',
  textAlignVertical: 'top',
  },
  containerView: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#E6E6FA',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 650,
    width: 500,
  },
  });
