import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { FontAwesome as Icon } from 'react-native-vector-icons/';
import { Feather as FeatherIcon } from 'react-native-vector-icons/';
import SearchBar from './SearchBar';

interface Props {
  navigation: any;
  title: string;
  iconName: string;
  color: string;
}

export default function HomeScreen({ navigation, title, iconName, color }: Props) {
  const [showSearch, setShowSearch] = useState(false);

  function onSearchPress() {
    setShowSearch(!showSearch);
    console.log(showSearch);
  }

  function onSharePress() {
    Alert.alert('You want share the House Details');
  }

  return (
    <React.Fragment>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={25} color={color} />
        </TouchableOpacity>
        <Text style={styles.usrName}>{title}</Text>
        <TouchableOpacity onPress={iconName !== 'search' ? onSharePress : onSearchPress}>
          <FeatherIcon name={iconName} size={25} color="#097FA4" />
        </TouchableOpacity>
      </View>
      {showSearch ? null : <SearchBar />}
    </React.Fragment>
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
