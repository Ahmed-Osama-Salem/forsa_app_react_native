import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {HeartIcon, NotificationIcon} from '../elements/IconSvg';
interface MenuBarProps {
  screen: string | null;
}

const HeaderBar = (props: MenuBarProps) => {
  return (
    <View style={headerBarStyles.headerBar}>
      <ImageBackground
        style={headerBarStyles.offerBackGround}
        resizeMode="cover"
        borderRadius={20}
        source={require('../../../assets/curve.png')}>
        <SafeAreaView style={headerBarStyles.areaContainer}>
          <Text style={headerBarStyles.screenText}>{props.screen}</Text>
          <View style={headerBarStyles.RightMenuItems}>
            <HeartIcon />
            <NotificationIcon />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HeaderBar;

const headerBarStyles = StyleSheet.create({
  headerBar: {position: 'relative', top: -10},
  offerBackGround: {
    height: 140,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
  },
  RightMenuItems: {
    flexDirection: 'row',
    gap: 14,
  },
  areaContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 67,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
});
