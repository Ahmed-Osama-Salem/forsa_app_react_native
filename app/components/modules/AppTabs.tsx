import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react';
const AppTabs = () => {
  const appTabsList = [
    {
      id: 1,
      label: 'Home',
      icon: <AntDesign name="home" size={30} color={'#C9C9C9'} />,
    },
    {
      id: 2,
      label: 'Retail',
      icon: <AntDesign name="tagso" size={30} color={'#C9C9C9'} />,
    },
    {
      id: 3,
      label: 'Offers',
      icon: <AntDesign name="staro" size={30} color={'#C9C9C9'} />,
    },
    {
      id: 4,
      label: 'Profile',
      icon: <AntDesign name="user" size={30} color={'#C9C9C9'} />,
    },
  ];
  return (
    <View style={appTabStyles.appTabsContainer}>
      {appTabsList.map(item => {
        return (
          <View key={item.id} style={appTabStyles.tabItem}>
            {item.icon}
            <Text style={appTabStyles.noneActiveTab}>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
};

const appTabStyles = StyleSheet.create({
  appTabsContainer: {
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 52,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -100},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 30,
    position: 'absolute',
    bottom: 0,
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  noneActiveTab: {
    fontSize: 16,
    color: '#C9C9C9',
  },
});
export default AppTabs;
