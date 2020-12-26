import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Row from './Row';

interface Props {
  item: any;
}

export default function Table({ item }: Props) {
  return (
    <React.Fragment>
      <Row colKey="Inventory Holder" colValue={item.name} />
      <Row colKey="Plot/Apt/Villa" colValue={item.plot_apt_villa} />
      <Row colKey="Date" colValue={item.date} />
      <Row colKey="Precinct/Height" colValue={item.precent_tower} />
      <Row colKey="Rd/St/Floor" colValue={item.rd_st_floor} />
      <Row colKey="Category" colValue={item.category} />
      <Row colKey="Pass WK/WOK" colValue={item.poss_wk_wok} />
      <Row colKey="Size" colValue={item.size} />
      <Row colKey="DC/DD/DX" colValue={item.dc_dd_dx} />
      <Row colKey="Demand" colValue={item.demand} />
      <Row colKey="Dealer/Client" colValue={item.dealer_client} />
    </React.Fragment>
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
