/* eslint-disable prettier/prettier */
import {Text, View, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native';
import * as React from 'react';
import bgImage from '../assets/loginbackground.jpeg';

function HomeScreen({ navigation }) {
  return (
    <View style={style.view}>
      <ImageBackground source={bgImage} style={style.container}>
      <Text style={style.font}>WELCOME</Text>
      <TouchableHighlight style={style.button} onPress={() => navigation.navigate('SignupRoot')}>
      <Text style={style.text}>SIGNUP</Text>
      </TouchableHighlight>
      <TouchableHighlight style={style.button} onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={style.text}>LOGIN</Text>
      </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;

const style = StyleSheet.create({
  font:{
    flex: 0.2,color: '#DC143C',fontSize: 40,
  },
  view:{
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  button:{
    backgroundColor: '#BC8F8F',
    borderRadius: 10,
    height: 40,
    marginTop: 10,
    width: 200,
  },
  text:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    padding: 5,
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 650,
    width: 500,
  },

});


