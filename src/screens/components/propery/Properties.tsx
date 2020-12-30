import React, { useState } from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView, View } from 'react-native';
import Property from './Property';
import data from '../../../data/property';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}
export default function Properties({ navigation }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Property item={item} key={item.id} navigation={navigation} />
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#097FA4',
    marginLeft: 10,
    marginTop: 10,
  },
});
