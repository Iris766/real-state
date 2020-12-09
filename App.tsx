import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This will be the conditional Login page.</Text>
      <Text>This screen will only render when the user is
        <Text style={styles.bold}> Register </Text> 
        or loged in.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10
  },
  bold: {
    color: '#333',
    fontWeight: 'bold',
  }
});
