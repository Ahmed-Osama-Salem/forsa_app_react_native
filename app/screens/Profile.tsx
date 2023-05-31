/* eslint-disable react-native/no-inline-styles */
import {Button, Image, Text, View} from 'react-native';
import AppLayout from '../components/layout/AppLayout';

import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';
import type {TFunction, i18n} from 'i18next';
import {useShareMessage} from '../hooks/useShareMessage';
import CurveSvg from '../components/elements/IconSvg';

export const LanguagePicker = ({
  i18n,
  t,
}: {
  i18n: i18n;
  t: TFunction<'translation', undefined, 'translation'>;
}) => {
  const [selectedValue, setSelectedValue] = useState('en');

  useEffect(() => {
    if (selectedValue === 'en') {
      setSelectedValue('en');
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('ar');
    }
  }, [i18n, selectedValue]);
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{flexDirection: 'row', width: 180}}
        onValueChange={itemValue => setSelectedValue(itemValue)}>
        <Picker.Item
          label={t('English') as string}
          value="en"
          style={{fontSize: 18, color: 'black'}}
        />
        <Picker.Item
          label={t('Arabic') as string}
          value="ar"
          style={{fontSize: 18, color: 'black'}}
        />
      </Picker>
    </View>
  );
};
const Profile = () => {
  const {onShareMessage} = useShareMessage();
  const {t, i18n} = useTranslation('translation');
  return (
    <AppLayout>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 18,
          paddingVertical: 20,
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          gap: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
          }}>
          <Image
            resizeMode="cover"
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            }}
            borderRadius={10}
            style={{width: 100, height: 80}}
          />
          <Text style={{fontSize: 21, fontWeight: '500', color: 'black'}}>
            {t('UserName')}
          </Text>
        </View>
        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          {t('Status')}
        </Text>
        <Button
          title={t('Share App')}
          onPress={() => onShareMessage('hello form react native')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            {t('Change language')}
          </Text>
          <LanguagePicker i18n={i18n} t={t} />
        </View>
      </View>
    </AppLayout>
  );
};

export default Profile;
