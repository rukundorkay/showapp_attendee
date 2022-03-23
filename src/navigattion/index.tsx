import React from 'react';
import {RootStackParamList} from '../../types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TicketStatusScreen from '../screens/TicketStatus';

const Stack = createNativeStackNavigator<RootStackParamList>();
/**
 * * This hides the headers on screens
 * */
const options = {headerShown: false};

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home" screenOptions={options}>
      <Stack.Screen name="home" component={TicketStatusScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
