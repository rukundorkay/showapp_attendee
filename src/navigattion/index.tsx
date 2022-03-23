import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import {RootStackParamList} from '../../types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Profile';
import BuyTicketScreen from '../screens/BuyTicketScreen/BuyTicketScreen';
import LoginScreen from '../screens/Login';
import InterestScreen from '../screens/Interest';
import ForgotPassword from '../screens/ForgotPassword';
import {useContextMode} from '../context/useContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * * This hides the headers on screens
 * */
const options = {headerShown: false};

export default () => {
  const {isAuth} = useContextMode();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile" screenOptions={options}>
        {isAuth ? (
          <>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="BuyTicket" component={BuyTicketScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="interest" component={InterestScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
