import {Keyboard, Platform, StatusBar, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, textSize} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import ExploreEventCard from '../../components/ExploreEventCard';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {styles} from './ExploreScreen.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFilter, faSearch} from '@fortawesome/free-solid-svg-icons';
import {Fetcher} from '../../utils/Fetcher';

const EXploreScreen = () => {
  const [Data, setData] = useState<any>([]);
  useEffect(() => {
    Fetcher(undefined, '/events', 'GET').then(res => setData(res.data));
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.eventheader}>
          <SafeAreaView />
          <StatusBar backgroundColor={colors.primary} barStyle={ Platform.OS === 'android' ? "light-content" : "dark-content" } />
          <View style={styles.searchFilterWrapper}>
            <View style={styles.eventsearch}>
              <TextInput
                placeholder="Search by concert"
                style={styles.searchField}
              />
              <FontAwesomeIcon
                icon={faSearch}
                size={textSize.HM}
                color={colors.dimeText}
              />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <FontAwesomeIcon
                icon={faFilter}
                size={textSize.HM}
                color={colors.lightBlue}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.eventTitle}>Events</Text>
        </View>
        <FlatList
          renderItem={({ item }) => <ExploreEventCard event={item} />}
          keyExtractor={item => item.id.toString()}
          data={Data}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EXploreScreen;
