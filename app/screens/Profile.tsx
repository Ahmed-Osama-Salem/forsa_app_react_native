/* eslint-disable react-native/no-inline-styles */
import {Button, Image, Text, View} from 'react-native';
import AppLayout from '../components/layout/AppLayout';

import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useTranslation} from 'react-i18next';
import type {i18n} from 'i18next';

export const LanguagePicker = ({i18n}: {i18n: i18n}) => {
  const [selectedValue, setSelectedValue] = useState('en');

  useEffect(() => {
    if (selectedValue === 'en') {
      console.log(i18n.language);
      setSelectedValue('en');
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('ar');
    }
  }, [selectedValue]);
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{flexDirection: 'row', width: 140}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item
          label="English"
          value="en"
          style={{fontSize: 18, color: 'black'}}
        />
        <Picker.Item
          label="Arabic"
          value="ar"
          style={{fontSize: 18, color: 'black'}}
        />
      </Picker>
    </View>
  );
};
const Profile = () => {
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
        <Button title={t('ShareApp')} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            // onPress={language => {
            //   i18n.changeLanguage(language);
            // }}
            style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            {t('ChangeLang')}
          </Text>
          <LanguagePicker i18n={i18n} />
        </View>
      </View>
    </AppLayout>
  );
};

export default Profile;
