import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import {RootStackParamList} from '../../types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConcertScreen from '../screens/Concert';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * * This hides the headers on screens
 * */
const options = {headerShown: false};

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="concert" screenOptions={options}>
      <Stack.Screen name="concert" component={ConcertScreen} />
      {/* <Stack.Screen name="home" component={HomeScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);
