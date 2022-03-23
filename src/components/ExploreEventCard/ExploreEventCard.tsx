import {Text, Pressable, View, Image} from 'react-native';
import React from 'react';
import styles from './ExploreEventCard.style';

type ExploreEventCardProps = {
  name: string;
  date: string;
  price: string;
  image: string;
};

const ExploreEventCard: React.FC<any> = (props: ExploreEventCardProps) => (
  <View style={styles.eventWrapper}>
    <Image
      source={require('../../assets/images/wall.png')}
      style={styles.eventImage}
    />
    <View style={styles.eventDescription}>
      <Text numberOfLines={1} style={styles.eventname}>
        {props.name}
      </Text>
      <Text style={styles.eventDate}>{props.date}</Text>
    </View>
    <View style={styles.eventprice}>
      <Text style={styles.eventpricetext}>{props.price}</Text>
    </View>
  </View>
);

export default ExploreEventCard;
