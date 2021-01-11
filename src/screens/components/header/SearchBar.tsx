import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View>
      <TextInput
        placeholder="Search..."
        style={styles.searchBar}
        keyboardType="web-search"
        inlineImageLeft="search_icon"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 15,
  },
});

export default SearchBar;
