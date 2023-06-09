import {StyleSheet, View} from 'react-native';
import {ReactNode} from 'react';
// import AppTabs from '../modules/AppTabs';
import React from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = (props: AppLayoutProps) => {
  const {children} = props;
  return <View style={styles.sectionContainer}>{children}</View>;
};
const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
  },
});

export default AppLayout;
