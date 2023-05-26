import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OfferProductCard from '../modules/offers/OfferProductCard';
const OffersListContainer = () => {
  return (
    <View>
      <Text style={offerListStyles.offerTitle}>Featured offers</Text>
      <View style={offerListStyles.cardsContainer}>
        <OfferProductCard />
        <OfferProductCard />
        <OfferProductCard />
        <OfferProductCard />
        <OfferProductCard />
        <OfferProductCard />
      </View>
    </View>
  );
};

const offerListStyles = StyleSheet.create({
  offerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  cardsContainer: {
    width: '100%',
    height: 'auto',
    paddingTop: 25,
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 15,
  },
});

export default OffersListContainer;
