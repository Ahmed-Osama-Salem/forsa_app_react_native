/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {OfferPromise} from '../../../hooks/requests/useHandelGetOffers';
const OfferProductCard = ({item}: {item: OfferPromise}) => {
  const [showContent, setShowContent] = useState(false);

  const handleCardPress = () => {
    setShowContent(!showContent);
  };
  return (
    <SafeAreaView testID="offer-card" style={offerCardStyles.cardBox}>
      <Image
        resizeMode="contain"
        source={{
          uri: `${
            item.brand.thumbnail ||
            'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          }`,
        }}
        borderRadius={14}
        style={{width: '100%', height: '100%'}}
      />
      <View
        style={
          showContent
            ? offerCardStyles.fullContentBox
            : offerCardStyles.cardContentBox
        }>
        <Text style={{fontSize: 12, fontWeight: '300'}}>
          {item.brand.sector.label}
        </Text>
        <Text
          style={{fontSize: 16, fontWeight: '400', color: 'black'}}
          onPress={handleCardPress}>
          {item.brand.title}
        </Text>
        {showContent ? (
          <View style={offerCardStyles.showContentContainer}>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              {item.description}
            </Text>

            <Text style={{fontSize: 14, fontWeight: '500'}}>
              Price: {item.price}
            </Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
const offerCardStyles = StyleSheet.create({
  cardBox: {
    width: '46%',
    height: 300,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 14,
    position: 'relative',
    // flex: 1,
  },
  cardContentBox: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 14,
    paddingTop: 12,
    elevation: 2,
  },
  fullContentBox: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 14,
    paddingTop: 12,
  },
  showContentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    padding: 4,
  },
});
export default OfferProductCard;
