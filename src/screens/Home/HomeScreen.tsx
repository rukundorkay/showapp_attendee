import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Modal,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './HomeScreen.styles';
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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faChevronDown,
  faGlobe,
  faHome,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';
import EXploreScreen from '../Explore/ExploreScreen';
import {colors, fonts, Spacing, textSize} from '../../constants';
import {navList} from './mockdata';
import axios from 'axios';
import TicketsScreen from '../TicketsScreen';
import {useContextMode} from '../../context/useContext';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();
const HomeScreen = () => {
  const config = {
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.inactiveIcon,
  };
  return (
    <BottomTab.Navigator screenOptions={() => config}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeEvents}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({size, color}: {size: number; color: string}) => (
            <FontAwesomeIcon icon={faHome} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={EXploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({size, color}: {size: number; color: string}) => (
            <FontAwesomeIcon icon={faGlobe} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          tabBarLabel: 'Tickets',
          tabBarIcon: ({size, color}: {size: number; color: string}) => (
            <FontAwesomeIcon icon={faTicket} size={size} color={color} />
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

const locations = [
  'Kigali',
  'Nyamaseke',
  'Rubavu',
  'Kibuye',
  'Nyaruguru',
  'Nyamagabe',
  'Karongi',
  'Nyanza',
  'Nyagatare',
  'Rusizi',
  'More...',
];

const HomeEvents = () => {
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<HomeScreenProp>();
  const [LocationModal, setLocationModal] = useState(false);
  const {handleEvents} = useContextMode();

  const {isAuth} = useContextMode();

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://showapp-api.awesomity.rw/api/v1/events')
      .then(function (response) {
        // handle success
        setEvents(response.data.data);
        handleEvents(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.body}>
        <View style={styles.header}>
          {isAuth ? (
            <Pressable onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../../assets/images/event-profile.jpg')}
                style={styles.profileImage}
              />
            </Pressable>
          ) : (
            <Image
              source={require('../../assets/images/blank.webp')}
              style={styles.profileImage}
            />
          )}

          <View style={styles.findEvents}>
            <Text style={styles.findEventsText}>Find Events In</Text>
            <Pressable
              style={styles.findEventsButton}
              onPress={() => setLocationModal(val => !val)}>
              <Text style={styles.location}>Kigali</Text>
              <Text>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size={textSize.M}
                  color={colors.error}
                />
              </Text>
            </Pressable>
          </View>
          <View style={styles.notificationBadge}>
            <FontAwesomeIcon icon={faBell} color="#98aedb" size={textSize.L} />
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
        refreshing={loading}
        ListEmptyComponent={
          <ActivityIndicator size="large" color={colors.primary} />
        }
        renderItem={item => (
          <EventCard navigation={navigation} event={item} key={item.index} />
        )}
        numColumns={2}
        keyExtractor={item => item.id}
        style={styles.eventsWrapper}
        contentContainerStyle={styles.eventsContainer}
      />
      <Modal animationType="slide" visible={LocationModal} transparent={true}>
        <View style={styles.searchLocationModal}>
          <View>
            <Pressable onPress={() => setLocationModal(false)}>
              <View style={styles.searchLocationClose}>
                <View style={styles.searchLocationBody}></View>
                <Text style={styles.searchLocationTitle}>Location</Text>
              </View>
              <View style={styles.searchLocationScroll}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {locations.map(loc => (
                    <Pressable onPress={() => setLocationModal(false)}>
                      <Text key={loc} style={styles.searchLocationItem}>
                        {loc}
                      </Text>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
              {/* <FlatList
                data={locations}
                renderItem={item => {
                  return (
                    <Pressable>
                      <Text>{item.item}</Text>
                    </Pressable>
                  );
                }}
                keyExtractor={(_, id: number) => id}
              /> */}
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
