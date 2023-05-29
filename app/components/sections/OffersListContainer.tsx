/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OfferProductCard from '../modules/offers/OfferProductCard';
import {OfferPromise} from '../../hooks/requests/useHandelGetOffers';
const OffersListContainer = ({offerData}: {offerData: OfferPromise[]}) => {
  return (
    <View style={offerListStyles.offerContainer}>
      <Text style={offerListStyles.offerTitle}>Featured offers</Text>

      <SafeAreaView>
        <View style={offerListStyles.cardsContainer}>
          {/* <FlatList
            data={offerData}
            showsVerticalScrollIndicator={true}
            numColumns={2}
            contentContainerStyle={{
              gap: 25,
              paddingHorizontal: 22,
              marginBottom: 100,
            }}
            // style={{backgroundColor: 'gray'}}
            columnWrapperStyle={{gap: 20}}
            keyExtractor={item => item.id as unknown as string}
            renderItem={({item}) => {
              return <OfferProductCard item={item} key={item.id} />;
            }}
            onEndReachedThreshold={0.3}
            // onMomentumScrollBegin={() => {
            //   console.log('MomentumScrollBegin');
            // }}
            onEndReached={() => {
              console.log('====================================');
              console.log('this end');
              console.log('====================================');
            }}
            ListFooterComponent={
              <View>
              <Text>dssdcdclsdc;dsl</Text>
              </View>
            }
          /> */}
          {offerData.map(item => {
            return <OfferProductCard item={item} key={item.id} />;
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

const offerListStyles = StyleSheet.create({
  offerContainer: {
    height: '100%',
    minHeight: 1000,
    width: '100%',
    paddingTop: 19,
  },
  offerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    paddingHorizontal: 22,
  },
  cardsContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 25,
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 22,
    gap: 22,
    marginBottom: 100,
  },
});

export default OffersListContainer;
