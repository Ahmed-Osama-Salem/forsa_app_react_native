import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const OfferProductCard = () => {
  return (
    <View style={offerCardStyles.cardBox}>
      <Text>card</Text>
    </View>
  );
};
const offerCardStyles = StyleSheet.create({
  cardBox: {
    width: '47%',
    height: 300,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -100},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 14,
  },
});
export default OfferProductCard;
