import React from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface Props {
  navigation: any;
  item: any;
}

export default function Property({ item, navigation }: Props) {
  const { id, isAvailable, propertyName, type } = item;
  const availiability =
    isAvailable === 'Available'
      ? '#01DA0A'
      : isAvailable === 'Token'
      ? '#FF0000'
      : '#FFE600';

  const toDetailScreen = () => {
    navigation.navigate('Detail', {
      isAvailable,
      item,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10, marginVertical: 0 }}>
      <SafeAreaView style={styles.propWrapper}>
        <Image
          source={require('../../../../assets/property.png')}
          style={styles.propImg}
        />
        <View>
          <TouchableOpacity onPress={() => toDetailScreen()}>
            <Text style={styles.propName}>{propertyName}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: '#fff', fontSize: 12 }}>{type}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderColor: availiability,
                borderWidth: 1,
                paddingHorizontal: 8,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: availiability, fontSize: 12 }}>{isAvailable}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  propWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  propImg: {
    borderRadius: 8,
    marginRight: 15,
  },
  propName: {
    color: '#097FA4',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#097FA4',
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 10,
  },
});
