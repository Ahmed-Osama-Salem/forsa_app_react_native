/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BrandText from '../modules/brands/BrandText';
import {useHandleGetSectors} from '../../hooks/requests/useHandleGetSectors';
import {useHandleGetBrands} from '../../hooks/requests/useHandleGetBrands';

export const ProductCard = ({item}: {item: string}) => {
  console.log(item);

  return (
    <View style={brandStyles.productCardContainer}>
      <Image
        resizeMode="cover"
        source={{uri: `${item || null}`}}
        borderRadius={10}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

const BrandListContainer = () => {
  const {sectorData} = useHandleGetSectors();
  // console.log(sectorData, 'dssd');
  const {brandsData, fetchBrands} = useHandleGetBrands();
  // console.log(brandsData, 'dataaa state');

  return (
    <View style={brandStyles.brandContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 20,
        }}>
        <Text style={brandStyles.brandHeader}>Top brands in retail</Text>
        <Text style={{fontSize: 12, color: '#072040'}}>View all</Text>
      </View>
      <FlatList
        data={sectorData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.value}
        renderItem={({item}) => {
          return (
            <BrandText
              brandName={item.label}
              key={item.value}
              fetchBrands={() => fetchBrands(item.value)}
            />
          );
        }}
      />
      <FlatList
        data={brandsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toFixed()}
        renderItem={({item}) => {
          return <ProductCard item={item.thumbnail} key={item.id} />;
        }}
      />
    </View>
  );
};

const brandStyles = StyleSheet.create({
  brandContainer: {
    paddingLeft: 25,
  },
  brandHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  productCardContainer: {
    height: 76,
    width: 76,
    borderRadius: 10,
    marginRight: 24,
    marginLeft: 2,
    marginVertical: 6,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -100},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 4,
  },
});

export default BrandListContainer;
