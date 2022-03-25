import {Text, Pressable, View, Image} from 'react-native';
import React from 'react';
import styles from './ExploreEventCard.style';
import {formatDate} from '../../utils/dateFormat';
import {useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../../../types';

type ExploreEventCardProps = {
  event: any;
};

const ExploreEventCard: React.FC<any> = (props: ExploreEventCardProps) => {
  const {event} = props;
  const navigation = useNavigation<RootStackParamList>();
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
          <Text numberOfLines={1} style={styles.eventDate}>{formatDate(event.startDate)}</Text>
        </View>
        <Text numberOfLines={1} style={styles.eventpricetext}>{event.vip.price} RWF</Text>
      </View>
    </Pressable>
  );
};

export default ExploreEventCard;
