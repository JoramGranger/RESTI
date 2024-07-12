// src/screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RESTI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
