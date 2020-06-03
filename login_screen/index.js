import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Dimensions, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');
 
export default class LoginScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      verify: Math.random().toString(20).substr(3,3).toUpperCase(3),
      verify1: '',
    };
  }

  login(){
    const { username, password} = this.state;
    Keyboard.dismiss();s
    console.log(username, password);

    Alert.alert(
      "Амжилттай",
      "Амжиллтай нэвтэрлээ",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ],
      { cancelable: false }
    );
  }

  render() {
    const { username, password, verify, verify1} = this.state;

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#003399'}}>
        <StatusBar barStyle="light-content" backgroundColor="#003399" />
        <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image source={require('../images/logo.png')} style={screenStyle.logoImage} />
          </View>

          <View style={screenStyle.loginContainer}>
            <View style={screenStyle.loginItem}>
              <Text style={screenStyle.loginLabel}>Нэвтрэх нэр</Text>
              <TextInput placeholder='Нэвтрэх нэр' placeholderTextColor='#8d9ab3' style={screenStyle.loginInput}
                value={username} onChangeText={username => this.setState({ username })}/>
            </View>
            <View style={screenStyle.loginItem2}>
              <View style={{flex: 1}}>
                <Text style={screenStyle.loginLabel}>Нууц үг</Text>
                <TextInput placeholder='Нууц үг' placeholderTextColor='#8d9ab3' style={screenStyle.loginInput}
                  secureTextEntry={true} value={password}
                  ref={ref => this.passwordRef = ref}
                  onChangeText={password => this.setState({ password })} />
              </View>
            </View>

            <View style={screenStyle.loginItem3}>
              <Text style={screenStyle.loginLabel}>{verify}</Text>
              <TextInput placeholder='Дээрх кодыг оруулна уу' placeholderTextColor='#8d9ab3' style={screenStyle.loginInput}
                value={verify1} onChangeText={verify1=> this.setState({ verify1 })}/>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={screenStyle.loginBtn}
              onPress={() => this.login()}>
              <Text style={screenStyle.loginBtnText}>Нэвтрэх</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
    );
  }
}

const screenStyle = StyleSheet.create({
 logoImage: {
    resizeMode: 'contain',
    height: width/2.5 > 280 ? 280 : width/2.5,
    width: width/2.5 > 280 ? 280 : width/2.5,
    marginVertical: height / 12,
  },

  loginContainer: {
    height: height/2,
    justifyContent: 'center'
  },

  loginItem: {
    width: width * 0.75,
    borderBottomColor: '#25a0fe',
    borderBottomWidth: 0.5,
    marginBottom: 30,
  },

  loginItem2: {
    width: width * 0.75,
    borderBottomColor: '#25a0fe',
    borderBottomWidth: 0.5,
    marginBottom: 30,
    flexDirection: 'row'
  },

  loginItem3: {
    color: '#a83246',
    width: width * 0.75,
    borderBottomColor: '#25a0fe',
    borderBottomWidth: 0.5,
    marginBottom: 30,
    
  },

  loginLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },
  
  loginInput: {
    paddingHorizontal: 0,
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 0,
    marginVertical: Platform.select({
      ios: 7.5,
      android: 0,
    }),
    color: '#fff'
  },

  loginBtn: {
    backgroundColor: '#25a0fe',
    width: width * 0.75,
    padding: 15,
    borderRadius: 5,
    fontSize: 15
  },

  loginBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
})
