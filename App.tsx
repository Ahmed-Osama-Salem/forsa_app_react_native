import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigations/BottomTabNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
