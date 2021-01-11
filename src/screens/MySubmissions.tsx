import React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from './components/header/Header';
import { Entypo as Icon } from 'react-native-vector-icons';
import { Fontisto as FontistoIcon } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Properties from './components/propery/Properties';

interface Props {
  navigation: any;
}

export default function MySubmissions({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="My Submissions"
        color="#097FA4"
        iconName="search"
        navigation={navigation}
      />
      <View style={{ paddingHorizontal: 15, marginVertical: 20 }}>
        <Text style={styles.text}>Property Types</Text>
        {/* property types */}
        <View style={styles.typeContainer}>
          <TouchableOpacity style={styles.propTypeActive}>
            <Icon name="layers" size={35} color="#097FA4" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.propType}>
            <FontistoIcon name="shopping-store" size={35} color="#AFAFAF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.propType}>
            <MaterialCommunityIcons
              name="city-variant-outline"
              size={35}
              color="#AFAFAF"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.innerInputContainer}>
          <TextInput placeholder="Inventory Holder Name" style={styles.input} />
          <TextInput placeholder="Inventory Holder Name" style={styles.input} />
        </View>
        <View style={styles.centeredBtn}>
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={{ color: '#fff' }}>Search</Text>
          </TouchableOpacity>
        </View>
        <Properties navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#097FA4',
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    marginVertical: 10,
  },
  inputGroup: {
    paddingHorizontal: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AFAFAF',
    paddingVertical: 1,
    paddingHorizontal: 8,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 5,
  },
  btnSubmit: {
    backgroundColor: '#097FA4',
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    width: 100,
    borderRadius: 6,
  },
  profile: {
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 10,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  propTypeActive: {
    borderWidth: 2,
    borderColor: '#097FA4',
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  propType: {
    borderWidth: 2,
    borderColor: '#AFAFAF',
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  centeredBtn: {
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 20,
  },
});
