import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Slider() {
  return (
    <View style={styles.imgCont}>
      <ScrollView snapToInterval={width} horizontal>
        <Image source={require('../../../../assets/sliderImg.png')} />
        <Image source={require('../../../../assets/sliderImg.png')} />
        <Image source={require('../../../../assets/sliderImg.png')} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imgCont: {
    height: 300,
    backgroundColor: 'lightblue',
  },
});
