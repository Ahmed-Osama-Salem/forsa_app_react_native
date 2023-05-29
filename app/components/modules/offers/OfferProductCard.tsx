import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {OfferPromise} from '../../../hooks/requests/useHandelGetOffers';
const OfferProductCard = ({item}: {item: OfferPromise}) => {
  const [showContent, setShowContent] = useState(false);

  const handleCardPress = () => {
    setShowContent(!showContent);
  };
  return (
    <View style={offerCardStyles.cardBox}>
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
      </View>
    </View>
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
    height: 60,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 14,
    paddingTop: 12,
    // elevation: 2,
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
