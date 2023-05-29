import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../app/screens/Home';
import Profile from '../app/screens/Profile';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default BottomTabNavigator;
