import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import BottomTabNavigator from './navigations/BottomTabNavigator';
// import DrawerNavigator from './navigations/DrawerNavigator';
import StackNavigator from './navigations/StackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <DrawerNavigator /> */}
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}

export default App;
