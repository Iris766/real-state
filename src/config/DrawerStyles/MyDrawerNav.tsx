import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerBtns from './DrawerBtns';

interface Props {
  navigation: any;
}

export default function DrawerNav({ navigation }: Props) {
  return (
    <View style={styles.drawer}>
      <View style={styles.profile}>
        <Image source={require('../../../assets/profile.png')} style={styles.avatar} />
        <Text style={styles.name}>Talha Shahid</Text>
      </View>
      <ScrollView>
        <SafeAreaView>
          <DrawerBtns icon="home" text="Add Property" navigation={navigation} />
          <DrawerBtns icon="id-badge" text="My Submissions" navigation={navigation} />
          <DrawerBtns icon="signal" text="Market Trend" navigation={navigation} />
          <DrawerBtns icon="history" text="History" navigation={navigation} />
          <DrawerBtns icon="user-circle" text="Edit Profile" navigation={navigation} />
          <DrawerBtns icon="sign-in" text="Log out" navigation={navigation} />
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
