import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import {RootStackParamList} from '../../types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Profile/';
import BuyTicketScreen from '../screens/BuyTicketScreen/BuyTicketScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * * This hides the headers on screens
 * */
const options = {headerShown: false};

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="BuyTicket" screenOptions={options}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="BuyTicket" component={BuyTicketScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
