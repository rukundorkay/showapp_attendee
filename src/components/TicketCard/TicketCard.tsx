import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarAlt,
  faCheckSquare,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import {Ticket} from '../../interfaces/ticket.interfaces';
import {Event} from '../../interfaces/event.interfaces';
import {formatDate} from '../../utils/dateFormat';
import {colors, textSize} from '../../constants';
import dimesions from '../../constants/dimesions';
import styles from './TicketCard.styles';

const ITEM_WIDTH = dimesions.width * 0.7;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type TicketCardProps = {
  index?: number;
  scrollX?: Animated.Value<number>;
  item: Ticket;
  event: Event;
  onItemPress?: (arg0: number) => void;
  selected?: boolean;
};

const TicketCard: React.FC<TicketCardProps> = ({
  index,
  scrollX,
  item,
  event,
  onItemPress,
  selected,
}) => {
  let scaleY: any;
  if (index && scrollX) {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];
    scaleY = scrollX.interpolate({
      inputRange,
      outputRange: [0.94, 1, 0.94],
    });
  }

  const onPress = (id: number) => {
    onItemPress && onItemPress(id);
  };

  return (
    <AnimatedPressable
      style={[styles.card, scaleY && {transform: [{scaleY}]}]}
      onPress={() => onPress(item.id)}>
      <View style={styles.imgContainer}>
        {selected ? (
          <FontAwesomeIcon
            icon={faCheckSquare}
            size={14}
            color={colors.green}
            style={styles.selected}
          />
        ) : null}
        <Image
          source={require('../../assets/images/event-profile.jpg')}
          style={styles.img}
        />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardHeading}>
          <Text style={styles.title}>{event?.title}</Text>
          <Text style={styles.ticket}>{item.seatCategory}</Text>
        </View>
        <View style={styles.cardRow}>
          <View style={styles.cardRowLeft}>
            <FontAwesomeIcon
              // name="calendar-month-outline"
              icon={faCalendarAlt}
              size={textSize.M}
              color={colors.blue}
            />
          </View>
          <View style={styles.cardRowRight}>
            <Text style={styles.cardRowText}>
              {formatDate(event?.startDate)}
            </Text>
            <Text style={styles.cardRowText}>10:00 - 14:00</Text>
          </View>
        </View>
        <View style={styles.cardRow}>
          <View style={styles.cardRowLeft}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size={textSize.M}
              color={colors.blue}
            />
          </View>
          <View style={styles.cardRowRight}>
            <Text style={styles.cardRowText}>{event?.venue}</Text>
          </View>
        </View>
        <Text style={styles.organization}>{event?.organization.name}</Text>
      </View>
      <View style={styles.cardDivider}>
        <Svg
          height="37"
          width="37"
          viewBox="0 0 316 316"
          style={styles.arcLeft}>
          <Path
            stroke="black"
            strokeOpacity={0.06}
            strokeWidth="16"
            fill="white"
            d="M 300 0 A 120 120 0 0 0 300 300"
          />
        </Svg>
        <View style={styles.dashedBorder} />
        <Svg
          height="37"
          width="37"
          viewBox="0 0 316 316"
          style={styles.arcRight}>
          <Path
            stroke="black"
            strokeOpacity={0.06}
            strokeWidth="16"
            fill="white"
            d="M 300 0 A 120 120 0 0 0 300 300"
          />
        </Svg>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.footerTitle}>Your QR Code</Text>
        <Image
          source={require('../../assets/images/barcode.png')}
          style={styles.barcodeImg}
          resizeMode="contain"
        />
        <Text style={styles.footerCaption}>Don’t show this to anyone</Text>
      </View>
    </AnimatedPressable>
  );
};

export default TicketCard;
