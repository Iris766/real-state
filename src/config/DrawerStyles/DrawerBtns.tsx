import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome as Icon } from 'react-native-vector-icons/';

export default function DrawerBtns({ icon, text }) {
  return (
    <React.Fragment>
      <TouchableOpacity style={styles.links}>
        <Icon name={icon} size={23} color="#097FA4" />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  links: {
    paddingVertical: 17,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  text: {
    textAlign: 'left',
    color: '#097FA4',
    marginLeft: 20,
  },
});
