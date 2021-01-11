import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../screens/components/header/Header';
import Slider from './components/slider/Slider';
import OwnerDetail from './components/owner-detail/OwnerDetail';
import { ScrollView } from 'react-native-gesture-handler';
import Table from './components/table/Table';

interface Props {
  navigation: any;
  isAvailable: string;
  route: any;
  item: any;
}

export default function DetailScreen({ navigation, route }: Props) {
  const { isAvailable } = route.params.item;
  const { item } = route.params;

  return (
    <View>
      <ScrollView>
        <View>
          <Header
            title="Property Detail"
            navigation={navigation}
            iconName="share-2"
            color="#097FA4"
          />
          <Slider />
          <SafeAreaView>
            <OwnerDetail navigation={navigation} isAvailable={isAvailable} />
            <Text style={styles.text}>Details</Text>
            <Table item={item} />
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#097FA4',
    paddingHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
  },
  col: {
    flex: 1,
  },
});
