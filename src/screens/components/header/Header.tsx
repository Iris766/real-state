import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome as Icon } from 'react-native-vector-icons/';
import { Fontisto as FontistoIcon } from 'react-native-vector-icons/';

interface Props {
  navigation: any;
  title: string;
  iconName: string;
  color: string;
}

export default function HomeScreen({ navigation, title, iconName, color }: Props) {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="bars" size={25} color={color} />
      </TouchableOpacity>
      <Text style={styles.usrName}>{title}</Text>
      <TouchableOpacity>
        <FontistoIcon name={iconName} size={25} color="#097FA4" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 30,
    backgroundColor: '#fff',
    elevation: 4,
  },
  usrName: {
    fontSize: 20,
    color: '#097FA4',
    fontWeight: 'bold',
  },
});
