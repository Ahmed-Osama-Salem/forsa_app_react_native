/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Image, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {HeartIcon, NotificationIcon} from '../elements/IconSvg';

interface MenuBarProps {
  screen: string | null;
}

const MenuBar = (props: MenuBarProps) => {
  return (
    <View style={menuStyles.menuContainer}>
      {props.screen === null ? (
        <View style={menuStyles.LeftMenuItems}>
          <MaterialIcon name="search" size={30} color={'white'} />
          <Image source={require('../../../assets/logo.png')} />
        </View>
      ) : (
        <View style={menuStyles.screenTextContainer}>
          <Text style={menuStyles.screenText}>{props.screen}</Text>
        </View>
      )}
      <View style={menuStyles.RightMenuItems}>
        <HeartIcon />
        <NotificationIcon />
      </View>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 15,
    backgroundColor: '#072040',
  },
  LeftMenuItems: {
    flexDirection: 'row',
    alignItems: 'center',
    //   backgroundColor: 'blue',
    width: '55%',
    justifyContent: 'space-between',
  },
  RightMenuItems: {
    flexDirection: 'row',
    gap: 14,
  },
  screenText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
  },
  screenTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //   backgroundColor: 'blue',
    width: '64%',
    justifyContent: 'flex-end',
  },
});

export default MenuBar;
