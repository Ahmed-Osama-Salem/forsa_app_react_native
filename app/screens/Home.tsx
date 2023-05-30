/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopWaveContainer from '../components/sections/TopWaveContainer';
import BrandListContainer from '../components/sections/BrandListContainer';
import AppLayout from '../components/layout/AppLayout';
import OffersListContainer from '../components/sections/OffersListContainer';
import BrandBackground from '../components/modules/brands/BrandBackground';
import {useHandleGetOffers} from '../hooks/requests/useHandelGetOffers';

const Home = () => {
  const {offerData, fetchOffers} = useHandleGetOffers();
  const [pageNumber, setPageNumber] = useState(1);
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: {
    layoutMeasurement: {height: number};
    contentOffset: {y: number};
    contentSize: {height: number};
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  useEffect(() => {
    if (pageNumber <= 3) {
      fetchOffers(pageNumber).then(data => {
        if (data.next === null) {
          console.log('end');
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  return (
    <AppLayout>
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            setTimeout(() => {
              setPageNumber(pageNumber + 1);
            }, 2000);
            console.log('====================================');
            console.log('fetch now iam bottom', pageNumber);
            console.log('====================================');
          }
        }}
        scrollEventThrottle={400}
        style={styles.sectionContainer}>
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
          <OffersListContainer offerData={offerData} />
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
