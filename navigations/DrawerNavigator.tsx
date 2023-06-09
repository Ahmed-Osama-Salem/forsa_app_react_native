import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Home from '../app/screens/Home';
// import Profile from '../app/screens/Profile';
import BottomTabNavigator from './BottomTabNavigator';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="app" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
