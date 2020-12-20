import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <StatusBar style="auto" backgroundColor={'#fff'} />
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.heading2}>Sahib Real Estate and Builders</Text>
        <Image source={require('./assets/login.png')} style={styles.img} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>LOGIN</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  scroll: {
    paddingHorizontal: 35,
    paddingTop: 30,
  },

  bold: {
    color: '#333',
    fontWeight: 'bold',
  },

  welcome: {
    fontSize: 32,
    color: '#525F82',
  },
  heading2: {
    fontSize: 42,
    color: '#525F82',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 4,
    paddingHorizontal: 10,
    borderColor: '#ddd',
    borderRadius: 16,
  },
  btn: {
    backgroundColor: '#097FA4',
    width: 100,
    paddingVertical: 8,
    borderRadius: 18,
    alignSelf: 'center',
  },
  img: {
    alignSelf: 'center',
    height: 300
  }
});
