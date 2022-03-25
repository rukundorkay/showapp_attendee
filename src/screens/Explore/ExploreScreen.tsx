import {StatusBar, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {colors, textSize} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import ExploreEventCard from '../../components/ExploreEventCard';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {styles} from './ExploreScreen.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import {eventList} from '../Home/mockdata';

const EXploreScreen = () => {
  return (
    <View>
      <View style={styles.eventheader}>
        <SafeAreaView />
        <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
        <View style={styles.searchFilterWrapper}>
          <View style={styles.eventsearch}>
            <TextInput
              placeholder="Search by concert "
              style={styles.searchField}
            />
            <FontAwesomeIcon icon={faSearch} size={textSize.HM} color={colors.dimeText} />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesomeIcon icon={faFilter} size={textSize.HM} color={colors.lightBlue} />
          </TouchableOpacity>
        </View>
        <Text style={styles.eventTitle}>Events</Text>
      </View>
      <FlatList
        renderItem={item => <ExploreEventCard event={item.item} />}
        keyExtractor={item => item.id.toString()}
        data={eventList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EXploreScreen;
