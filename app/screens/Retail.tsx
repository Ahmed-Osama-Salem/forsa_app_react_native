import {Text, View} from 'react-native';
import React from 'react';
import {offerScreenStyle} from './Offers';
import {useTranslation} from 'react-i18next';

const Retail = () => {
  const {t} = useTranslation('translation');
  return (
    <View style={offerScreenStyle.offerScreen}>
      <Text style={offerScreenStyle.offerScreenText}>
        {t('No Retails yet')}
      </Text>
    </View>
  );
};

export default Retail;
