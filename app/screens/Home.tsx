import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopWaveContainer from '../components/sections/TopWaveContainer';
import BrandListContainer from '../components/sections/BrandListContainer';
import AppLayout from '../components/layout/AppLayout';
import OffersListContainer from '../components/sections/OffersListContainer';
import BrandBackground from '../components/modules/brands/BrandBackground';
import {useHandleGetOffers} from '../hooks/requests/useHandelGetOffers';

const Home = () => {
  const {offerData, fetchOffers, isLoading, setIsLoading} =
    useHandleGetOffers();
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
    if (pageNumber <= 2) {
      fetchOffers(pageNumber).then(data => {
        if (data.next === null) {
          console.log('end');
          setIsLoading(false);
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
            }, 1000);
          }
        }}
        scrollEventThrottle={400}
        style={styles.sectionContainer}>
        <SafeAreaView>
          <View style={styles.mainWaveSection}>
            <TopWaveContainer />
          </View>
          <View style={styles.mainListContainer}>
            <BrandBackground />
          </View>
          <View style={styles.mainBrandList}>
            <BrandListContainer />
          </View>
          <OffersListContainer offerData={offerData} isLoading={isLoading} />
        </SafeAreaView>
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
  mainWaveSection: {height: 200, zIndex: 2},
  mainListContainer: {
    position: 'absolute',
    top: 130,
    left: '50%',
    right: '50%',
  },
  mainBrandList: {height: 'auto', width: '100%'},
});
export default Home;
