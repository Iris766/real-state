import React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from './components/header/Header';
import Properties from './components/propery/Properties';

interface Props {
  navigation: any;
}

export default function History({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Header title="History" color="#097FA4" iconName="search" navigation={navigation} />
      <View style={{ paddingHorizontal: 15, marginVertical: 20 }}>
        <Text style={styles.text}>Line Graph</Text>
        <Image source={require('../../assets/Chart.png')} />
        <Text style={styles.text}>Date Range</Text>
        {/* date range start */}
        <View style={styles.dateContainer}>
          <Text>Start</Text>
          <View style={styles.dateRow}>
            <View style={styles.mounths}>
              <Text>January</Text>
              <Text style={styles.selected}>February</Text>
              <Text>March</Text>
              <Text>April</Text>
            </View>
            <View style={styles.mounths}>
              <Text>6</Text>
              <Text>7</Text>
              <Text>8</Text>
              <Text style={styles.selected}>9</Text>
            </View>
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Text>End</Text>
          <View style={styles.dateRow}>
            <View style={styles.mounths}>
              <Text>January</Text>
              <Text style={styles.selected}>February</Text>
              <Text>March</Text>
              <Text>April</Text>
            </View>
            <View style={styles.mounths}>
              <Text>6</Text>
              <Text>7</Text>
              <Text>8</Text>
              <Text style={styles.selected}>9</Text>
            </View>
          </View>
        </View>
        {/* date range end */}
        <View style={styles.centeredBtn}>
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={{ color: '#fff' }}>Search</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#ccc' }}>Result</Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: '#ccc' }}>Precinct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: '#ccc' }}>Heights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: '#ccc' }}>Heights</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centeredBtn}>
          <TouchableOpacity style={styles.btnPrice}>
            <Text style={{ color: '#fff' }}>Rs. 700,000,000</Text>
          </TouchableOpacity>
        </View>
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
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    alignItems: 'center',
  },
  btn: {
    borderWidth: 1.5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: 'center',
    width: 120,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  btnSubmit: {
    backgroundColor: '#097FA4',
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    width: 100,
    borderRadius: 6,
  },
  btnPrice: {
    backgroundColor: '#097FA4',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    width: 150,
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
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dateRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
  },
  mounths: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  selected: {
    backgroundColor: '#097FA4',
    padding: 4,
    borderRadius: 10,
    color: '#fff',
  },
});
