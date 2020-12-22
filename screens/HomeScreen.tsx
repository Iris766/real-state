import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from 'react-native-vector-icons/';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.bars} onPress={() => navigation.toggleDrawer()}>
        <Icon name="bars" size={25} color="#097FA4" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bars: {
    left: 20,
    top: 20,
  },
});
