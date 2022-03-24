import React from 'react';
import {RootStackParamList} from '../../types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TicketStatusScreen from '../screens/TicketStatus';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();
/**
 * * This hides the headers on screens
 * */
const options = {headerShown: false};

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="TicketStatus" screenOptions={options}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="TicketStatus" component={TicketStatusScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
