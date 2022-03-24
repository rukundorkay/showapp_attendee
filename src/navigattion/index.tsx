import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import {RootStackParamList} from '../../types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BuyTicketScreen from '../screens/BuyTicketScreen/BuyTicketScreen';
import TicketBoughtScreen from '../screens/TicketBoughtScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * * This hides the headers on screens
 * */
const options = {headerShown: false};

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="BuyTicket" screenOptions={options}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="BuyTicket" component={BuyTicketScreen} />
      <Stack.Screen name="TicketBought" component={TicketBoughtScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
