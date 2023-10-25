/* eslint-disable prettier/prettier */
const React = require('react-native');

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 50,
    fontWeight: '900',
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormTextInput: {
    height: 40,
    width: 200,
    fontSize: 14,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#20B2AA',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 10,
    height: 40,
    marginTop: 10,
    width: 330,
    alignItems: 'center',
  },
});

export default styles;
