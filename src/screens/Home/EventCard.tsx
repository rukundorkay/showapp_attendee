import React, {useEffect} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {styles} from './HomeScreen.styles';

const EventCard = ({navigation, event}: {navigation: any; event: any}) => {
  return (
    <Pressable
      style={styles.eventCardWrapper}
      onPress={() => navigation.navigate('concert', {id: event.id})}>
      <Image
        style={styles.eventPoster}
        source={require('../../assets/images/wall.png')}
        resizeMode="cover"
      />
      <View style={styles.eventInfoContainer}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventStartDate}>{event.date}</Text>
      </View>
    </Pressable>
  );
};

export default EventCard;
