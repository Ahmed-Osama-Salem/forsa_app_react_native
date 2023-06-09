/* eslint-disable react-hooks/exhaustive-deps */
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {noItemImage} from '../../components/sections/BrandListContainer';
import {useHandleGetAllBrands} from '../../hooks/requests/useHandelGetAllBrands';
import {MotiView, View} from 'moti';
import {BrandsPromise} from '../../hooks/requests/useHandleGetBrands';

export const ReachEndFooter = () => {
  return (
    <View style={style.loaderContaier}>
      <ActivityIndicator size="large" color="#3EBDAC" />
    </View>
  );
};

const BrandItem = memo(
  ({item, index}: {item: BrandsPromise; index: number}) => {
    const style = StyleSheet.create({
      productContainer: {width: 100, height: 120, flex: 1, margin: 10},
      thumbnailStyle: {width: '100%', height: '100%'},
    });

    return (
      <MotiView
        key={index}
        style={style.productContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: index * 20, type: 'spring', duration: 1000}}>
        <Image
          resizeMode="cover"
          source={{uri: `${item.thumbnail || noItemImage}`}}
          borderRadius={10}
          style={style.thumbnailStyle}
        />
      </MotiView>
    );
  },
);

const BrandScreen = () => {
  const {allbrandsData, fetchAllBrands, isLoading} = useHandleGetAllBrands();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchAllBrands(currentPage);
  }, [currentPage]);

  return (
    <SafeAreaView style={style.listStyle}>
      <Text>Select your interested brand</Text>
      <FlatList
        data={allbrandsData}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          setCurrentPage(prev => prev + 1);
          console.log('end');
        }}
        numColumns={2}
        initialNumToRender={6}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toFixed()}
        renderItem={({item, index}) => {
          return <BrandItem item={item} index={index} />;
        }}
        ListFooterComponent={isLoading ? <ReachEndFooter /> : null}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  listStyle: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 20,
  },
  loaderContaier: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default BrandScreen;
