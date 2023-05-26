/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

const TopOffer = () => {
  return (
    <View style={offerStyles.offersContainer}>
      <View style={offerStyles.offerImageContainer}>
        <View style={offerStyles.offerBorder}>
          <ImageBackground
            style={offerStyles.offerBackGround}
            resizeMode="cover"
            source={require('../../../assets/offer.png')}>
            <View style={offerStyles.offerContentContainer}>
              <View style={offerStyles.nikeLogoContainr}>
                <Image
                  resizeMode="cover"
                  source={require('../../../assets/nike.png')}
                />
              </View>
              <Text style={offerStyles.textStyle}>Check out latest offers</Text>
            </View>
          </ImageBackground>
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
    // backgroundColor: 'blue',

    position: 'absolute',
    top: '-10%',
  },
  offerImageContainer: {
    width: '100%',
    flexDirection: 'row',
    // paddingHorizontal: 25,
    justifyContent: 'center',
  },
  offerBorder: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#3EBDAC',
    width: '87%',
  },
  offerBackGround: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
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
});
