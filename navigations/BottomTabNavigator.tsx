/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../app/screens/Home';
import Profile from '../app/screens/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#C9C9C9',
        tabBarStyle: appTabStyles.appTabsContainer,
        tabBarLabelStyle: appTabStyles.noneActiveTab,
        headerBackgroundContainerStyle: {backgroundColor: '#072040'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? '#072040' : '#C9C9C9'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="user"
              size={30}
              color={focused ? '#072040' : '#C9C9C9'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const appTabStyles = StyleSheet.create({
  appTabsContainer: {
    height: 70,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 4, height: -100},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 30,
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  noneActiveTab: {
    fontSize: 16,
    // color: '#C9C9C9',
  },
});

export default BottomTabNavigator;
