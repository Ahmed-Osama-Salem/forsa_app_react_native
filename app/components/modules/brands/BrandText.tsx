/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface BrandTextProps {
  brandName: string;
  fetchBrands: () => Promise<void | object> | void;
  sectorValue: string;
  value: string;
}

const BrandText = (props: BrandTextProps) => {
  return (
    <View
      style={
        props.value === props.sectorValue
          ? brandTextStyles.activeBrandBox
          : brandTextStyles.nonActiveBrandBox
      }>
      <Text
        onPress={() => props.fetchBrands()}
        style={
          props.value === props.sectorValue
            ? brandTextStyles.activeBandText
            : brandTextStyles.noneActiveBrandText
        }>
        {props.brandName}
      </Text>
    </View>
  );
};

const brandTextStyles = StyleSheet.create({
  activeBrandBox: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#3EBDAC',
    marginVertical: 10,
    marginRight: 18,
    borderRadius: 6,
  },
  nonActiveBrandBox: {
    flexDirection: 'row',
    gap: 10,
    // backgroundColor: '#3EBDAC',
    marginVertical: 10,
    marginRight: 18,
    borderRadius: 6,
  },

  activeBandText: {padding: 5, fontSize: 14, color: 'white'},
  noneActiveBrandText: {padding: 5, fontSize: 14, color: 'black'},
});

export default BrandText;
