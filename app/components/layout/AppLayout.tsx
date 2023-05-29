import {StyleSheet, View} from 'react-native';
import MenuBar from '../modules/MenuBar';
import {ReactNode} from 'react';
import AppTabs from '../modules/AppTabs';
import React from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  const {children} = props;
  return (
    <View style={styles.sectionContainer}>
      <MenuBar />
      {children}
      <AppTabs />
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
  },
});

export default AppLayout;
