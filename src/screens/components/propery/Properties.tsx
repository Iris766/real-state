import React from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Property from './Property';
import data from '../../../data/property';

interface Props {
  navigation: any;
}
export default function Properties({ navigation }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.text}>Recent Properties</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Property item={item} key={item.id} navigation={navigation} />
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
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
