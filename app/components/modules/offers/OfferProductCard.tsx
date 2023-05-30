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
    <SafeAreaView style={offerCardStyles.cardBox}>
      <Image
        resizeMode="contain"
        source={{uri: `${item.brand.thumbnail || null}`}}
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
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              padding: 4,
            }}>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              {item.description}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '300',
                paddingHorizontal: 4,
                textAlign: 'center',
              }}>
              0% interest on MacBooks For 18 months from Forsa
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
    shadowOffset: {width: 0, height: -100},
    shadowOpacity: 0.6,
    shadowRadius: 3,
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
});
export default OfferProductCard;
