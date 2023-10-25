/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './styles';
import loginImage from '../assets/loginimage.webp';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export const LoginScreen = () => {

  return (
    <View style={style.containerView}>
      <ImageBackground source={loginImage} style={style.container}>
            <Text style={styles.logoText}>LOGIN</Text>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TouchableHighlight style={style.fbLoginButton}>
              <Text style={style.fbbuttontxt}>forgot code</Text>
            </TouchableHighlight>
            <TextInput
              placeholder="Enter Code"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <TouchableHighlight style={style.button}>
              <Text style={style.text}>LOGIN</Text>
            </TouchableHighlight>
            </ImageBackground>
          </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  button:{
    backgroundColor: '#008B8B',
    borderRadius: 50,
    height: 40,
    marginTop: 5,
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
    height: 640,
    width: 400,
  },
});
