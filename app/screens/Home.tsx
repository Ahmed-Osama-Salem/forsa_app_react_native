/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import TopWaveContainer from '../components/sections/TopWaveContainer';
import BrandListContainer from '../components/sections/BrandListContainer';
import AppLayout from '../components/layout/AppLayout';
import OffersListContainer from '../components/sections/OffersListContainer';
import BrandBackground from '../components/modules/brands/BrandBackground';
const Home = () => {
  return (
    <AppLayout>
      <View style={{height: 200, zIndex: 2}}>
        <TopWaveContainer />
      </View>
      <View style={{position: 'absolute', top: 130, left: '50%', right: '50%'}}>
        <BrandBackground />
      </View>
      <View style={{height: 'auto', width: '100%'}}>
        <BrandListContainer />
      </View>
      <View
        style={{
          height: 'auto',
          minHeight: 1000,
          width: '100%',
          paddingHorizontal: 22,
          paddingTop: 19,
        }}>
        <OffersListContainer />
      </View>
    </AppLayout>
  );
};

export default Home;
