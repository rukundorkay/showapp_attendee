import {Text, Pressable, View, Image} from 'react-native';
import React from 'react';
import styles from './ExploreEventCard.style';

type ExploreEventCardProps = {
  event: any;
};

const ExploreEventCard: React.FC<any> = (props: ExploreEventCardProps) => (
  <View style={styles.eventWrapper}>
    <Image
      source={require('../../assets/images/wall.png')}
      style={styles.eventImage}
    />
    <View style={styles.eventDescription}>
      <Text numberOfLines={1} style={styles.eventname}>
        {props.event.name}
      </Text>
      <Text style={styles.eventDate}>{props.event.date}</Text>
    </View>
    <View style={styles.eventprice}>
      <Text style={styles.eventpricetext}>{props.event.price}</Text>
    </View>
  </View>
);

export default ExploreEventCard;
