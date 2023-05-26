/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Image} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {HeartIcon, NotificationIcon} from '../elements/IconSvg';

const MenuBar = () => {
  return (
    <View style={menuStyles.menuContainer}>
      <View style={menuStyles.LeftMenuItems}>
        <MaterialIcon name="search" size={30} color={'white'} />
        <Image source={require('../../../assets/logo.png')} />
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 30,
    backgroundColor: '#072040',
  },
  LeftMenuItems: {
    flexDirection: 'row',
    alignItems: 'center',
    //   backgroundColor: 'blue',
    width: '53%',
    justifyContent: 'space-between',
  },
  RightMenuItems: {
    flexDirection: 'row',
    gap: 14,
  },
});

export default MenuBar;
