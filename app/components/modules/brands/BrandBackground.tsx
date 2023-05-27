import React from 'react';
import {View} from 'react-native';
import {
  BrandSvgLeft,
  BrandSvgMiddel,
  BrandSvgRight,
} from '../../elements/IconSvg';

const BrandBackground = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <BrandSvgLeft />
      <BrandSvgMiddel />
      <BrandSvgRight />
    </View>
  );
};

export default BrandBackground;
