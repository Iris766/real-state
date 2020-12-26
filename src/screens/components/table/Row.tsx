import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Table({ colKey, colValue }) {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.col}>
        <Text style={{ color: '#097FA4' }}>{colKey}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.col}>
        <Text>{colValue}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 15,
    marginVertical: 6,
    borderRadius: 5,
  },
  col: {
    flex: 1,
    borderColor: '#ddd',
    borderRightWidth: 1,
    padding: 5,
  },
});
