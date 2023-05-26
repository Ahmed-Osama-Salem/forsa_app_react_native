/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BrandListContainer = () => {
  return (
    <View style={brandStyles.brandContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 20,
        }}>
        <Text style={brandStyles.brandHeader}>Top brands in retail</Text>
        <Text style={{fontSize: 12, color: '#072040'}}>View all</Text>
      </View>
      {/* <FlatList data={}/> */}
    </View>
  );
};

const brandStyles = StyleSheet.create({
  brandContainer: {
    paddingLeft: 25,
  },
  brandHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
});

export default BrandListContainer;
