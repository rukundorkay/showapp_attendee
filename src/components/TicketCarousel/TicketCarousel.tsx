import React, {useState, useRef} from 'react';
import Animated from 'react-native-reanimated';

import {TicketCard} from '../../components';
import dimesions from '../../constants/dimesions';
import styles from './TicketCarousel.styles';

const SNAP_INTERVAL = dimesions.width - (dimesions.Spacing + 10) * 2 + 20;

interface TicketCarouselProps {
  data: Array<any>;
  onItemPress?: (arg0: number) => void;
}

const TicketCarousel: React.FC<TicketCarouselProps> = ({data, onItemPress}) => {
  const [selectedItem, setSelectedItem] = useState<number>();
  const scrollX = useRef(new Animated.Value(0)).current;

  const onPress = (id: number) => {
    setSelectedItem(id);
    onItemPress && onItemPress(id);
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
