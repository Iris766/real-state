import React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from './components/header/Header';
import { Entypo as Icon } from 'react-native-vector-icons';
import { Fontisto as FontistoIcon } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function AddProperty({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="Add Property"
        navigation={navigation}
        iconName="search"
        color="#097FA4"
      />
      <Text style={styles.text}>Property Types</Text>
      <View style={styles.typeContainer}>
        <TouchableOpacity style={styles.propTypeActive}>
          <Icon name="layers" size={35} color="#097FA4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.propType}>
          <FontistoIcon name="shopping-store" size={35} color="#AFAFAF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.propType}>
          <MaterialCommunityIcons name="city-variant-outline" size={35} color="#AFAFAF" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Category</Text>
      <View style={styles.category}>
        <TouchableOpacity style={styles.catBtn}>
          <Text style={{ color: '#AFAFAF' }}>West Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catBtn}>
          <Text style={{ color: '#AFAFAF' }}>Semi Corner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catBtn}>
          <Text style={{ color: '#AFAFAF' }}>Corner</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.category}>
        <TouchableOpacity style={styles.catBtn}>
          <Text style={{ color: '#AFAFAF' }}>Road</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catBtn}>
          <Text style={{ color: '#AFAFAF' }}>Park Face</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.catBtn}>
          <Text style={{ color: '#AFAFAF' }}>Extra Land</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>More Details</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Inventory Holder Name" style={styles.input} />
        <View style={styles.innerInputContainer}>
          <TextInput placeholder="Inventory Holder Name" style={styles.input} />
          <TextInput placeholder="Inventory Holder Name" style={styles.input} />
        </View>
        <View style={styles.innerInputContainer}>
          <TextInput placeholder="Inventory Holder Name" style={styles.input} />
          <TextInput placeholder="Inventory Holder Name" style={styles.input} />
        </View>
      </View>
      <Text style={styles.text}>Add Keyword</Text>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TextInput multiline={true} numberOfLines={8} style={styles.input} />
        </View>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: '#097FA4' }}>Images</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: '#097FA4' }}>Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={{ color: '#fff' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    paddingHorizontal: 15,
    paddingTop: 10,
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
  category: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  catBtn: {
    borderWidth: 1,
    borderColor: '#AFAFAF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  inputContainer: {
    marginHorizontal: 15,
  },
  innerInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AFAFAF',
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  btn: {
    borderWidth: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: 'center',
    width: 80,
    borderRadius: 6,
    borderColor: '#097FA4',
  },
  btnSubmit: {
    backgroundColor: '#097FA4',
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    width: 100,
    borderRadius: 6,
  },
});
