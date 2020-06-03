import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './login_screen/index';

export default function App() {
    return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
