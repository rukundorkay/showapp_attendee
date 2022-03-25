import {Text, Pressable, View, Image} from 'react-native';
import React from 'react';
import styles from './ExploreEventCard.style';
import {formatDate} from '../../utils/dateFormat';
import {useNavigation} from '@react-navigation/native';

type ExploreEventCardProps = {
  event: any;
};

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

const ExploreEventCard: React.FC<any> = (props: ExploreEventCardProps) => {
  const {event, id} = props;
  const navigation = useNavigation();
  // console.log(event);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('concert', {concert: event.item, img: event.index})
      }>
      <View style={styles.eventWrapper}>
        <Image source={pics[id]} style={styles.eventImage} />
        <View style={styles.eventDescription}>
          <Text numberOfLines={1} style={styles.eventname}>
            {event.item.title}
          </Text>
          <Text style={styles.eventDate}>
            {formatDate(event.item.startDate)}
          </Text>
        </View>
        <View style={styles.eventprice}>
          <Text style={styles.eventpricetext}>{event.item.vip.price} RWF</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExploreEventCard;
