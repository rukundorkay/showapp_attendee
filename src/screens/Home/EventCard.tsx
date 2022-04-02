import React, {useEffect} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {styles} from './HomeScreen.styles';
import {formatDate} from '../../utils/dateFormat';

const pics = [
  require('../../assets/images/1.png'),
  require('../../assets/images/2.png'),
  require('../../assets/images/3.png'),
  require('../../assets/images/4.png'),
  require('../../assets/images/5.png'),
  require('../../assets/images/6.png'),
  require('../../assets/images/7.png'),
  require('../../assets/images/8.png'),
  require('../../assets/images/9.png'),
];

const EventCard = ({navigation, event}: {navigation: any; event: any}) => {
  let item = event.item;
  return (
    <Pressable
      style={styles.eventCardWrapper}
      onPress={() =>
        navigation.navigate('concert', {concert: item, img: event.index})
      }>
      <Image
        style={styles.eventPoster}
        source={pics[event.index]}
        resizeMode="cover"
      />
      <View style={styles.eventInfoContainer}>
        <Text numberOfLines={1} style={styles.eventTitle}>{event.item.title}</Text>
        <Text style={styles.eventStartDate}>
          {formatDate(event.item.startDate)}
        </Text>
      </View>
    </Pressable>
  );
};

export default EventCard;
