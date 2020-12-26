import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function LoginScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <SafeAreaView>
          <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.heading2}>Sahib Real Estate and Builders</Text>
          <Image source={require('../../assets/login.png')} style={styles.img} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>LOGIN</Text>
          </TouchableOpacity>
        </SafeAreaView>
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
    paddingTop: 20,
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
    marginBottom: 30,
  },
  img: {
    alignSelf: 'center',
    height: 300,
  },
});
