import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome as Icon } from 'react-native-vector-icons/';

interface Props {
  icon: string;
  text: string;
  navigation: any;
  ScreenName: any;
}

export default function DrawerBtns({ icon, text, navigation, ScreenName }: Props) {
  return (
    <React.Fragment>
      <TouchableOpacity
        style={styles.links}
        onPress={() => navigation.navigate(ScreenName)}
      >
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
