import React from 'react';

import {RootStackParamList} from '../../types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from '../screens/Registraction/Registration';
import WelcomeScreen from '../screens/WelcomePage/Welcome';
import VerificationCodePage from '../screens/VerificationCodePage';
// import VerificationCode from '../screens/VerificationCodePage/VerificationCode';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * * This hides the headers on screens
 * */
const options = {headerShown: false};

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home" screenOptions={options}>
      {/* <Stack.Screen name="home" component={WelcomeScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} /> */}
      <Stack.Screen name="VerificationScreen" component={VerificationCodePage} />
    </Stack.Navigator>
  </NavigationContainer>
);
