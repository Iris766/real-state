import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from './components/header/Header';
import Properties from './components/propery/Properties';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.main}>
      <Header navigation={navigation} iconName="search" title="Talha Shahid" />
      <SafeAreaView style={{ flex: 1 }}>
        <Properties navigation={navigation} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
