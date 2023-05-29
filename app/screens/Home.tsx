/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import TopWaveContainer from '../components/sections/TopWaveContainer';
import BrandListContainer from '../components/sections/BrandListContainer';
import AppLayout from '../components/layout/AppLayout';
import OffersListContainer from '../components/sections/OffersListContainer';
import BrandBackground from '../components/modules/brands/BrandBackground';

const Home = () => {
  return (
    <AppLayout>
      <ScrollView style={styles.sectionContainer}>
        <SafeAreaView>
          <View style={{height: 200, zIndex: 2}}>
            <TopWaveContainer />
          </View>
          <View
            style={{position: 'absolute', top: 130, left: '50%', right: '50%'}}>
            <BrandBackground />
          </View>
          <View style={{height: 'auto', width: '100%'}}>
            <BrandListContainer />
          </View>
          <OffersListContainer />
        </SafeAreaView>
      </ScrollView>
    </AppLayout>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'blue',
    // marginBottom: 5,
    flex: 1,
  },
});
export default Home;
