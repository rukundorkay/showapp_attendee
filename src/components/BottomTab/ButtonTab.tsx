import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './ButtonTab.style';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';
const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

const bottomTab = () => {
  // const { authInfo } = useContextMode()
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#effeef',
      })}>
      <BottomTab.Screen name="HomeScreen" component={HomeEvents} />
      <BottomTab.Screen
        name="Explore"
        component={ExploreEvents}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen name="Tickets" component={TicketsEvents} />
    </BottomTab.Navigator>
  );
};

export default bottomTab;
