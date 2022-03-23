import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
  Modal,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './HomeScreen.styles';
import {useContextMode} from '../../context/useContext';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import EventCard from './EventCard';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import EXploreScreen from '../Explore/ExploreScreen';
import {colors} from '../../constants';
import {events, navList} from './mockdata';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();
const HomeScreen = () => {
  // const { authInfo } = useContextMode()
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.error,
        tabBarInactiveTintColor: '#ccc',
      })}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeEvents}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({size, color}: {size: number; color: number}) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={EXploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({size, color}: {size: number; color: number}) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tickets"
        component={TicketsEvents}
        options={{
          tabBarLabel: 'Tickets',
          tabBarIcon: ({size, color}: {size: number; color: number}) => (
            <MaterialCommunityIcons
              name="ticket-confirmation"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'home'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'HomeScreen'>
>;

// const

const HomeEvents = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const [LocationModal, setLocationModal] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.profileImage}></View>
          <View style={styles.findEvents}>
            <Text style={styles.findEventsText}>Find Events in</Text>
            <Pressable
              style={styles.findEventsButton}
              onPress={() => setLocationModal(val => !val)}>
              <Text style={{...styles.locationText, color: colors.error}}>
                Kigali
              </Text>
              <Text>
                <AntiDesign name="down" size={18} color={colors.error} />
              </Text>
            </Pressable>
          </View>
          <View style={styles.notificationBadge}>
            <Octicons name="bell-fill" color="#98aedb" size={26} />
          </View>
        </View>
        <ScrollView
          scrollEnabled
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.categoryPane}>
          {navList.map(el => (
            <Pressable key={el} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{el}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={events}
        renderItem={item => (
          <EventCard navigation={navigation} event={item.item} />
        )}
        numColumns={2}
        keyExtractor={item => item.id}
        style={styles.eventsWrapper}
        contentContainerStyle={styles.eventsContainer}
      />
      <Modal animationType="slide" visible={LocationModal} transparent={true}>
        <View style={styles.searchLocationModal}>
          <View>
            <Pressable
              style={styles.searchLocationClose}
              onPress={() => setLocationModal(false)}>
              <View style={styles.searchLocationBody}></View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const TicketsEvents = () => {
  return <Text>This is Tickets broo</Text>;
};

export default HomeScreen;
