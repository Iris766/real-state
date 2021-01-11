import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';
import AddProperty from '../screens/AddProperty';
import EditProfile from '../screens/EditProfile';
import MySubmissions from '../screens/MySubmissions';
import MarketTrend from '../screens/MarketTrend';
import History from '../screens/History';
// drawer
import MyDrawerNav from './DrawerStyles/MyDrawerNav';

// drawer
const Drawer = createDrawerNavigator();
// stack from home list
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => null }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ header: () => null }}
      />
    </HomeStack.Navigator>
  );
};
const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={(props) => <MyDrawerNav {...props} />}>
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="AddProperty" component={AddProperty} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="MySubmissions" component={MySubmissions} />
      <Drawer.Screen name="MarketTrend" component={MarketTrend} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  </NavigationContainer>
);
export default Navigation;
