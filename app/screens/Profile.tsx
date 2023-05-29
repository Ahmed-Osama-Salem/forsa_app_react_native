/* eslint-disable react-native/no-inline-styles */
import {Button, Image, Text, View} from 'react-native';
import AppLayout from '../components/layout/AppLayout';

import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export const LanguagePicker = () => {
  const [selectedValue, setSelectedValue] = useState('English');

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{flexDirection: 'row', width: 140}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item
          label="English"
          value="English"
          style={{fontSize: 18, color: 'black'}}
        />
        <Picker.Item
          label="Arabic"
          value="Arabic"
          style={{fontSize: 18, color: 'black'}}
        />
      </Picker>
    </View>
  );
};
const Profile = () => {
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
            Mohamed Adel
          </Text>
        </View>
        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          active
        </Text>
        <Button title="Share app" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            Change Langauge
          </Text>
          <LanguagePicker />
        </View>
      </View>
    </AppLayout>
  );
};

export default Profile;
