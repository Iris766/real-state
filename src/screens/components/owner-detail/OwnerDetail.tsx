import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome as Icon } from 'react-native-vector-icons';

interface Props {
  navigation: any;
  isAvailable: string;
}
export default function DetailScreen({ navigation, isAvailable }: Props) {
  const availiability =
    isAvailable === 'Available'
      ? '#01DA0A'
      : isAvailable === 'Token'
      ? '#FF0000'
      : '#FFE600';

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.ownerProfile}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../../../assets/owner.png')} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.ownerName}>Talha Shahid</Text>
              <Text style={styles.postTime}>4 Days ago</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Icon name="money" size={25} color="#097FA4" />
            <Text style={{ color: '#097FA4', textAlign: 'center' }}>Rs. 99 mill</Text>
            <TouchableOpacity
              style={{
                borderColor: availiability,
                borderWidth: 1,
                paddingHorizontal: 8,
                borderRadius: 10,
                marginTop: 5,
              }}
            >
              <Text style={{ color: availiability, fontSize: 12 }}>{isAvailable}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ownerProfile: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ownerName: {
    color: '#097FA4',
    fontWeight: 'bold',
  },
  postTime: {
    color: '#777',
  },
});
