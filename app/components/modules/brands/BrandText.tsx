/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';

interface BrandTextProps {
  brandName: string;
  //   handelPress: (event: GestureResponderEvent) => void;
  fetchBrands: () => Promise<void | object>;
}

const BrandText = (props: BrandTextProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        // backgroundColor: '#3EBDAC',
        marginVertical: 10,
        marginRight: 18,
        borderRadius: 6,
      }}>
      <Text
        onPress={() => props.fetchBrands()}
        style={{padding: 5, fontSize: 14, color: 'black'}}>
        {props.brandName}
      </Text>
    </View>
  );
};

export default BrandText;
