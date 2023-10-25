/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import signupImage from '../assets/signup.webp';
import styles from './styles';
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
//import { Button } from 'react-native-elements';
//import * as Facebook from "expo-facebook";

//const appId = '1047121222092614';
function HODsignup () {

  return (
    <View style={style.containerView}>
      <ImageBackground source={signupImage} style={style.container}>
    <Text style={styles.logoText}>SIGNUP</Text>
    <Text style={{fontSize: 10, marginBottom: 5, flexDirection:'column',fontWeight: 700}}>(HEAD OF DEPARTMENT)</Text>
    <TextInput
      placeholder="Username"
      placeholderColor="#c4c3cb"
      style={styles.loginFormTextInput}
    />
    <TextInput
      placeholder="Univercity name"
      placeholderColor="#c4c3cb"
      style={styles.loginFormTextInput}
    />
    <TextInput
      placeholder="Department name"
      placeholderColor="#c4c3cb"
      style={styles.loginFormTextInput}
    />
    <Text style={{height: 40,fontWeight: 800,fontSize: 20}}>ADD STUDENT DATA</Text>
    <Icon.Button style={{marginLeft: 10,padding: 10}} name="plus" backgroundColor="#20B2AA"/>
    <TouchableHighlight style={style.button}>
      <Text style={style.text}>DONE</Text>
    </TouchableHighlight>
    </ImageBackground>
  </View>
);
}

export default HODsignup;

const style = StyleSheet.create({
button:{
backgroundColor: '#008B8B',
borderRadius: 50,
height: 40,
marginTop: 80,
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

