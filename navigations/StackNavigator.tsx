import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import BrandScreen from '../app/screens/stack/BrandScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BrandScreen"
        component={BrandScreen}
        options={{
          title: 'Brands',
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
