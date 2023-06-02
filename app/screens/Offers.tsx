import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

const Offers = () => {
  const {t} = useTranslation('translation');
  return (
    <View style={offerScreenStyle.offerScreen}>
      <Text style={offerScreenStyle.offerScreenText}>{t('No Offers yet')}</Text>
    </View>
  );
};

export const offerScreenStyle = StyleSheet.create({
  offerScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerScreenText: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
});

export default Offers;
