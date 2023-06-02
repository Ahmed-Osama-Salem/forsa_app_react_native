/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import OfferProductCard from '../modules/offers/OfferProductCard';
import {OfferPromise} from '../../hooks/requests/useHandelGetOffers';
import {useTranslation} from 'react-i18next';
const OffersListContainer = ({
  offerData,
  isLoading,
}: {
  offerData: OfferPromise[];
  isLoading: boolean;
}) => {
  const {t} = useTranslation('translation');

  return (
    <View style={offerListStyles.offerContainer}>
      <Text style={offerListStyles.offerTitle}>{t('Featured Offers')}</Text>

      <SafeAreaView>
        <View style={offerListStyles.cardsContainer}>
          {offerData.map(item => {
            return <OfferProductCard item={item} key={item.id} />;
          })}

          {isLoading ? (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <ActivityIndicator size="large" color="#3EBDAC" />
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
};

const offerListStyles = StyleSheet.create({
  offerContainer: {
    height: '100%',
    minHeight: 1000,
    width: '100%',
    paddingTop: 19,
  },
  offerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    paddingHorizontal: 22,
  },
  cardsContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 25,
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 22,
    gap: 22,
    marginBottom: 100,
  },
});

export default OffersListContainer;
