/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BrandText from '../modules/brands/BrandText';
import type {ImageSourcePropType} from 'react-native';
import {useHandleGetSectors} from '../../hooks/requests/useHandleGetSectors';

export const ProductCard = ({item}: {item: ImageSourcePropType}) => {
  return (
    <View style={brandStyles.productCardContainer}>
      <Image resizeMode="cover" source={item} />
    </View>
  );
};

const BrandListContainer = () => {
  // const brandsTest = [
  //   {id: 1, brand: 'All'},
  //   {id: 2, brand: 'Fashion'},
  //   {id: 3, brand: 'electronic'},
  //   {id: 4, brand: 'clothes'},
  //   {id: 5, brand: 'ddffsd'},
  //   {id: 6, brand: 'fdsfs'},
  //   {id: 7, brand: 'dlfds;f'},
  //   {id: 4, brand: 'clothes'},
  //   {id: 5, brand: 'ddffsd'},
  //   {id: 6, brand: 'fdsfs'},
  //   {id: 7, brand: 'dlfds;f'},
  // ];

  const productList = [
    {id: 1, image: require('../../../assets/product.png')},
    {id: 2, image: require('../../../assets/product.png')},
    {id: 3, image: require('../../../assets/product.png')},
    {id: 4, image: require('../../../assets/product.png')},
    {id: 5, image: require('../../../assets/product.png')},
    {id: 6, image: require('../../../assets/product.png')},
    {id: 7, image: require('../../../assets/product.png')},
    {id: 8, image: require('../../../assets/product.png')},
    {id: 9, image: require('../../../assets/product.png')},
    {id: 10, image: require('../../../assets/product.png')},
    {id: 11, image: require('../../../assets/product.png')},
  ];

  const {sectorData} = useHandleGetSectors();
  console.log(sectorData, 'dssd');
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
          return <BrandText brandName={item.label} key={item.value} />;
        }}
      />
      <FlatList
        data={productList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toFixed()}
        renderItem={({item, index}) => {
          return <ProductCard item={item.image} key={index} />;
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
