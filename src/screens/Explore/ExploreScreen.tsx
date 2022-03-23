import {StatusBar, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import ExploreEventCard from '../../components/ExploreEventCard';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {styles} from './ExploreScreen.styles';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {color} from 'react-native-reanimated';
const eventList = [
  {
    name: 'Tuza Album Launch',
    date: 'Tue, 3rd Sept 2022',
    price: '10K',
    image: '../../assets/images/wall.png',
  },
  {
    name: 'Tuza Album Launch',
    date: 'Tue, 3rd Sept 2022',
    price: '10K',
    image: '../../assets/images/wall.png',
  },
  {
    name: 'Tuza Album Launch',
    date: 'Tue, 3rd Sept 2022',
    price: '10K',
    image: '../../assets/images/wall.png',
  },
  {
    name: 'Tuza Album Launch',
    date: 'Tue, 3rd Sept 2022',
    price: '10K',
    image: '../../assets/images/wall.png',
  },
  {
    name: 'Tuza Album Launch',
    date: 'Tue, 3rd Sept 2022',
    price: '10K',
    image: '../../assets/images/wall.png',
  },
  {
    name: 'Tuza Album Launch',
    date: 'Tue, 3rd Sept 2022',
    price: '10K',
    image: '../../assets/images/wall.png',
  },
  {
    name: 'Tuza Album Launch',
    date: 'Tue, 3rd Sept 2022',
    price: '10K',
    image: '../../assets/images/wall.png',
  },
  {
    name: 'Tuza Album Launch',
    date: 'Tue, 3rd Sept 2022',
    price: '10K',
    image: '../../assets/images/wall.png',
  },
];

const EXploreScreen = () => {
  // const {authInfo} = useContextMode();
  const ExploreEventCards = () =>
    eventList.map((list: any, index: number) => {
      return (
        <ExploreEventCard
          key={index}
          name={list.name}
          date={list.date}
          price={list.price}
          image={list.image}
        />
      );
    });
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.background} />
      <View style={styles.eventheader}>
        <View style={styles.searchFilterWrapper}>
          <View style={styles.eventsearch}>
            <TextInput
              placeholder="trappish concert "
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
      <ScrollView>
        <ExploreEventCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EXploreScreen;
