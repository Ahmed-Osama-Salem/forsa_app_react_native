import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const AppTabs = () => {
  return (
    <View style={appTabStyles.abbTabsContainer}>
      <Text>Home</Text>
    </View>
  );
};

export default AppTabs;

const appTabStyles = StyleSheet.create({
  abbTabsContainer: {
    height: 70,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -100},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 4,
    position: 'absolute',
    bottom: 0,
  },
});
