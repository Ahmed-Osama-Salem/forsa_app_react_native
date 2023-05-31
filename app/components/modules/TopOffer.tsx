import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import {useTranslation} from 'react-i18next';
export interface NewOfferListData {
  id: string;
  title: string;
  offerBackground: string;
  brandImg: ImageSourcePropType;
}
const {width} = Dimensions.get('window');

export const OfferSlide = ({item}: {item: NewOfferListData}) => {
  return (
    <ImageBackground
      style={offerStyles.offerBackGround}
      resizeMode="cover"
      borderRadius={20}
      testID="offer-slide"
      source={{uri: item.offerBackground}}>
      <View style={offerStyles.offerContentContainer}>
        <View style={offerStyles.nikeLogoContainr}>
          <Image resizeMode="cover" source={item.brandImg} />
        </View>
        <Text style={offerStyles.textStyle}>{item.title}</Text>
      </View>
    </ImageBackground>
  );
};

const TopOffer = () => {
  const {t} = useTranslation('translation');
  const [activeSlide, setActiveSlide] = useState(0);

  const newOffersList = [
    {
      id: '1',
      title: t('Check out latest offers'),
      offerBackground:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
      brandImg: require('../../../assets/nike.png'),
    },
    {
      id: '2',
      title: t('Check our iphone offers'),
      offerBackground:
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      brandImg: require('../../../assets/nike.png'),
    },
    {
      id: '3',
      title: t('Check out latest offers'),
      offerBackground:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80',
      brandImg: require('../../../assets/nike.png'),
    },
    {
      id: '4',
      title: t('Check out latest offers'),
      offerBackground:
        'https://plus.unsplash.com/premium_photo-1658526934242-aa541776ca49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      brandImg: require('../../../assets/nike.png'),
    },
  ];

  const handleSlideChange = (event: {
    nativeEvent: {
      layoutMeasurement: {width: number};
      contentOffset: {x: number};
    };
  }) => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = event.nativeEvent.contentOffset.x;
    const active = Math.round(currentIndex / slideWidth);
    setActiveSlide(active);
  };

  return (
    <View style={offerStyles.offersContainer}>
      <View style={offerStyles.offerImageContainer}>
        <View style={offerStyles.offerBorder}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleSlideChange}>
            {newOffersList.map(item => (
              <OfferSlide key={item.id} item={item} />
            ))}
          </ScrollView>
          <View style={offerStyles.pagination}>
            {newOffersList.map((_, index) => (
              <View
                key={index}
                style={[
                  offerStyles.paginationDot,
                  activeSlide === index && offerStyles.paginationDotActive,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopOffer;

const offerStyles = StyleSheet.create({
  offersContainer: {
    width: '100%',
    height: 138,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: '-10%',
  },
  offerImageContainer: {
    width: '100%',
    height: 138,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  offerBorder: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#3EBDAC',
    width: '87%',
    zIndex: 10,
  },
  offerBackGround: {
    height: '100%',
    width: width / 1.163,
  },
  offerContentContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    gap: 12,
  },
  nikeLogoContainr: {
    width: 72,
    height: 72,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  textStyle: {fontSize: 16, color: 'black'},
  pagination: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#3EBDAC',
  },
});
