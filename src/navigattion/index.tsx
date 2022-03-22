import React from 'react'
import HomeScreen from '../screens/Home'
import LoginScreen from '../screens/Login'
import InterestScreen from '../screens/Interest'
import { RootStackParamList } from '../../types'
import ForgotPassword from '../screens/ForgotPassword'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStackParamList>()

/** 
 * * This hides the headers on screens 
 * */
const options = { headerShown:false }

export default () => (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home' screenOptions={options}>
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="forgotPassword" component={ForgotPassword} />
                <Stack.Screen name="interest" component={InterestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

