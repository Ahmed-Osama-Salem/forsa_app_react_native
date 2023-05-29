/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import TopWaveContainer from '../components/sections/TopWaveContainer';
import BrandListContainer from '../components/sections/BrandListContainer';
import AppLayout from '../components/layout/AppLayout';
import OffersListContainer from '../components/sections/OffersListContainer';
import BrandBackground from '../components/modules/brands/BrandBackground';
import {useHandleGetOffers} from '../hooks/requests/useHandelGetOffers';
const Home = () => {
  const scrollViewRef = useRef(null);
  const {offerData, fetchOffers} = useHandleGetOffers();
  const [pageNumber, setPageNumber] = useState(1);
  const handleScroll = (event: {
    nativeEvent: {
      contentOffset: {y: number};
      contentSize: {height: number};
      layoutMeasurement: {height: number};
    };
  }) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const contentSizeHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;

    const isEndReached = contentOffsetY + layoutHeight >= contentSizeHeight;

    if (isEndReached) {
      console.log('End of scroll reached');

      setPageNumber(pageNumber + 1);
    }
  };

  console.log(pageNumber);

  useEffect(() => {
    fetchOffers(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <AppLayout>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.sectionContainer}>
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
      </ScrollView>
    </AppLayout>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
export default Home;
