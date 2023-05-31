/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BrandText from '../modules/brands/BrandText';
import {useHandleGetSectors} from '../../hooks/requests/useHandleGetSectors';
import {useHandleGetBrands} from '../../hooks/requests/useHandleGetBrands';
import {useTranslation} from 'react-i18next';

export const ProductCard = ({item}: {item: string}) => {
  return (
    <View style={brandStyles.productCardContainer}>
      <Image
        resizeMode="cover"
        source={{uri: `${item || undefined}`}}
        borderRadius={10}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

const BrandListContainer = () => {
  const {sectorData} = useHandleGetSectors();
  const [sectorValue, setSectorValue] = useState('1');
  // console.log(sectorData, 'dssd');
  const {brandsData, fetchBrands} = useHandleGetBrands();
  const [currentPage, setCurrentPage] = useState(1);
  const {t} = useTranslation('translation');
  const flatListRef = useRef(null);

  const handleFetchBySector = (value: string) => {
    setCurrentPage(1); // Reset currentPage to 1
    setSectorValue(value);
    console.log(currentPage, 'sector pressed//////');

    fetchBrands(value, currentPage);
  };

  useEffect(() => {
    fetchBrands(sectorValue, currentPage);
  }, [currentPage]);
  console.log('====================================');
  console.log(currentPage, 'scroll pages');
  console.log('====================================');

  useEffect(() => {
    if (sectorValue) {
      setCurrentPage(1);
    }
  }, [sectorValue]);

  return (
    <View style={brandStyles.brandContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 20,
        }}>
        <Text style={brandStyles.brandHeader}>{t('Top brands in retail')}</Text>
        <Text style={{fontSize: 12, color: '#072040'}}>{t('View all')}</Text>
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
              value={item.value}
              key={item.value}
              sectorValue={sectorValue}
              fetchBrands={() => {
                return handleFetchBySector(item.value);
              }}
            />
          );
        }}
      />
      <FlatList
        data={brandsData}
        horizontal
        onEndReachedThreshold={0.3}
        onEndReached={() => {
          // console.log(currentPage);

          setCurrentPage(prev => prev + 1);
        }}
        ref={flatListRef}
        initialNumToRender={5}
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
