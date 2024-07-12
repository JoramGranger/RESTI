// src/App.js
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SplashScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
