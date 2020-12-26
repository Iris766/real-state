import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../screens/components/header/Header';
import Slider from './components/slider/Slider';
import OwnerDetail from './components/owner-detail/OwnerDetail';

interface Props {
  navigation: any;
  isAvailable: string;
  route: any;
}
export default function DetailScreen({ navigation, route }: Props) {
  const { isAvailable } = route.params;
  return (
    <View style={styles.box}>
      <Header title="Property Detail" navigation={navigation} iconName="share-alt" />
      <Slider />
      <OwnerDetail navigation={navigation} isAvailable={isAvailable} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
