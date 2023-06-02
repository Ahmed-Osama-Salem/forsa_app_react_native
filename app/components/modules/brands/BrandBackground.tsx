import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BrandSvgLeft,
  BrandSvgMiddel,
  BrandSvgRight,
} from '../../elements/IconSvg';

const BrandBackground = () => {
  return (
    <View style={Styles.containerOfSvgs}>
      <BrandSvgLeft />
      <BrandSvgMiddel />
      <BrandSvgRight />
    </View>
  );
};

const Styles = StyleSheet.create({
  containerOfSvgs: {flexDirection: 'row', justifyContent: 'center'},
});

export default BrandBackground;
