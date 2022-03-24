import {Text, Pressable, View, Image} from 'react-native';
import React from 'react';
import styles from './ExploreEventCard.style';
import {formatDate} from '../../utils/dateFormat';
import {useNavigation} from '@react-navigation/native';

type ExploreEventCardProps = {
  event: any;
};

const ExploreEventCard: React.FC<any> = (props: ExploreEventCardProps) => {
  const {event} = props;
  const navigation = useNavigation();
  console.log(event);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('concert', {concert: event, img: event.index})
      }>
      <View style={styles.eventWrapper}>
        <Image
          source={require('../../assets/images/event-profile.jpg')}
          style={styles.eventImage}
        />
        <View style={styles.eventDescription}>
          <Text numberOfLines={1} style={styles.eventname}>
            {event.title}
          </Text>
          <Text style={styles.eventDate}>{formatDate(event.startDate)}</Text>
        </View>
        <View style={styles.eventprice}>
          <Text style={styles.eventpricetext}>{event.vip.price} RWF</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExploreEventCard;
