import {StatusBar, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import ExploreEventCard from '../../components/ExploreEventCard';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {styles} from './ExploreScreen.styles';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {color} from 'react-native-reanimated';
import {eventList} from '../Home/mockdata';

const EXploreScreen = () => {
  // const {authInfo} = useContextMode();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <View style={styles.eventheader}>
        <View style={styles.searchFilterWrapper}>
          <View style={styles.eventsearch}>
            <TextInput
              placeholder="search by concert "
              style={styles.searchField}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Feather name="search" size={25} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Fontisto name="filter" size={25} color={colors.lightBlue} />
          </TouchableOpacity>
        </View>
        <Text style={styles.eventTitle}>Events</Text>
      </View>
      <FlatList
        renderItem={item => <ExploreEventCard event={item.item} />}
        keyExtractor={item => item.id}
        data={eventList}
        showsVerticalScrollIndicator={false}
      />
      {/* <ScrollView>
        <ExploreEventCards />
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default EXploreScreen;
