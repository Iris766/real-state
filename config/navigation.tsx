import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
// drawer
import MyDrawerNav from './DrawerStyles/MyDrawerNav';

const Drawer = createDrawerNavigator();
const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={(props) => <MyDrawerNav {...props} />}>
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);
export default Navigation;
