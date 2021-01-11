import React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from './components/header/Header';

interface Props {
  navigation: any;
}

export default function EditProfile({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="Edit Profile"
        color="#097FA4"
        iconName="edit"
        navigation={navigation}
      />
      <SafeAreaView>
        <View style={styles.profile}>
          <Image source={require('../../assets/editProfile.png')} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.text}>Agent Full Name</Text>
          <TextInput style={styles.input} placeholder="Agent Full Name" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.text}>Agent Contact Number</Text>
          <TextInput style={styles.input} placeholder="Agent Contact Number" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.text}>Username</Text>
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.text}>Percinct/Height No</Text>
          <TextInput style={styles.input} placeholder="Percinct/Height No" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.text}>Pass WK/WOK</Text>
          <TextInput style={styles.input} placeholder="Pass WK/WOK" />
        </View>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={{ color: '#fff' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#097FA4',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    marginVertical: 10,
  },
  inputGroup: {
    paddingHorizontal: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AFAFAF',
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  btnSubmit: {
    backgroundColor: '#097FA4',
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    width: 100,
    borderRadius: 6,
  },
  profile: {
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 10,
  },
});
