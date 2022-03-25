import React, {useState, useRef} from 'react';
import Animated from 'react-native-reanimated';

import {Ticket} from '../../interfaces/ticket.interfaces';
import {TicketCard} from '../../components';
import {useContextMode} from '../../context/useContext';
import dimesions from '../../constants/dimesions';
import styles from './TicketCarousel.styles';

const SNAP_INTERVAL = dimesions.width - (dimesions.Spacing + 10) * 2 + 20;

interface TicketCarouselProps {
  data: Ticket[];
  onItemPress?: (arg0: number) => void;
}

const TicketCarousel: React.FC<TicketCarouselProps> = ({data, onItemPress}) => {
  const [selectedItem, setSelectedItem] = useState<number>();
  const scrollX = useRef(new Animated.Value(0)).current;
  const {events} = useContextMode();
  const event = events.find(evt => evt.id === data[0]?.event);

  const onPress = (id: number) => {
    setSelectedItem(selectedItem === id ? undefined : id);
    onItemPress && onItemPress(selectedItem === id ? undefined : id);
  };

  return (
    <Animated.FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToInterval={SNAP_INTERVAL}
      snapToAlignment="center"
      decelerationRate={0}
      scrollEventThrottle={16}
      bounces={false}
      keyExtractor={item => `${item.id}`}
      data={data}
      renderItem={({item, index}) => (
        <TicketCard
          key={item.id}
          item={item}
          event={event}
          index={index}
          scrollX={scrollX}
          selected={selectedItem === item.id}
          onItemPress={onPress}
        />
      )}
      contentContainerStyle={styles.contentContainer}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: true,
      })}
    />
  );
};

export default TicketCarousel;
