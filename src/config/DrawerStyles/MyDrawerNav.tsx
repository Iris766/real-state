import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerBtns from './DrawerBtns';
export default function DrawerNav(props: any) {
  return (
    <View style={styles.drawer}>
      <View style={styles.profile}>
        <Image source={require('../../../assets/profile.png')} style={styles.avatar} />
        <Text style={styles.name}>Talha Shahid</Text>
      </View>
      <ScrollView>
        <SafeAreaView>
          <DrawerBtns icon="home" text="Add Property" />
          <DrawerBtns icon="id-badge" text="My Submissions" />
          <DrawerBtns icon="signal" text="Market Trend" />
          <DrawerBtns icon="history" text="History" />
          <DrawerBtns icon="user-circle" text="Edit Profile" />
          <DrawerBtns icon="sign-in" text="Log out" />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    padding: 25,
  },
  profile: {
    marginVertical: 25,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#097FA4',
    marginTop: 15,
  },
});
