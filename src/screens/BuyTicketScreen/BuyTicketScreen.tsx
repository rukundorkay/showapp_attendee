import React, {useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAdd,
  faChevronDown,
  faChevronUp,
  faMinus,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import {Transition, Transitioning} from 'react-native-reanimated';

import {RootStackParamList} from '../../../types';
import {Holder} from '../../interfaces/holder.interface';
import {AddHolderModal, Button, Header} from '../../components';
import {useContextMode} from '../../context/useContext';
import {formatDate} from '../../utils/dateFormat';
import pick from '../../utils/pick';
import {Fetcher} from '../../utils/Fetcher';
import {colors, textSize} from '../../constants';
import styles from './BuyTicketScreen.styles';

const PAYMENT_METHODS = [
  {
    id: 1,
    name: 'Mastercard',
    img: require('../../assets/images/mastercard.png'),
    value: '*** **94',
  },
  {
    id: 2,
    name: 'Visa',
    img: require('../../assets/images/visa.png'),
    value: '*** **26',
  },
  {
    id: 3,
    name: 'Mobile Money',
    img: require('../../assets/images/mtn.png'),
    value: '*** 426',
  },
];

const transition = (
  <Transition.Together>
    <Transition.In type="slide-bottom" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

type BuyTicketScreenProps = {
  navigation: StackScreenProps<RootStackParamList, 'BuyTicket'>['navigation'];
  route: StackScreenProps<RootStackParamList, 'BuyTicket'>['route'];
};

const BuyTicketScreen: React.FC<BuyTicketScreenProps> = ({
  navigation,
  route,
}) => {
  const {event} = route.params;
  const [showHolders, setShowHolders] = useState(false);
  const [showHolderModal, setShowHolderModal] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState<object>();
  const [selectedPayment, setSelectedPayment] = useState<number>();
  const [loading, setLoading] = useState(false);
  const transitionRef = useRef<any>();

  const seats = pick(event, ['vip', 'vvip', 'standard', 'table']);
  const arrSeats = Object.keys(seats).map(key => ({...seats[key], name: key}));
  const [holders, setHolders] = useState<Holder[]>([
    {
      seatCategory: arrSeats[0].name,
      price: arrSeats[0].price,
      quantity: 1,
      name: 'Isimbi P.',
    },
  ]);
  const {handleTickets} = useContextMode();

  const expandHolders = () => {
    setShowHolders(!showHolders);
    transitionRef?.current.animateNextTransition();
  };

  const addHolders = (seat: object) => {
    setSelectedSeat(seat);
    setShowHolderModal(true);
  };

  const saveHolder = (name: string) => {
    setHolders([
      ...holders,
      {
        seatCategory: selectedSeat.name,
        price: selectedSeat.price,
        quantity: 1,
        name,
      },
    ]);
  };

  const removeHolders = (seatCategory: string) => {
    const holdersToKeep = holders.filter(
      holder => holder.seatCategory !== seatCategory,
    );
    const holdersToRemove = holders.filter(
      holder => holder.seatCategory === seatCategory,
    );
    const updatedHolders = holdersToRemove.filter(
      (_, index) => index !== holdersToRemove.length - 1,
    );

    setHolders([...holdersToKeep, ...updatedHolders]);
  };

  const countSeats = (seatCategory: string) =>
    holders
      .filter(holder => holder.seatCategory === seatCategory)
      .reduce((prev, curr) => prev + (curr.quantity || 0), 0);

  const countTotal = () =>
    holders.reduce((prev, curr) => prev + (curr.quantity || 0) * curr.price, 0);

  const onConfirm = async () => {
    try {
      setLoading(true);
      const uniqueSeats = holders.filter(
        (v, i, a) =>
          a.findIndex(v2 => v2.seatCategory === v.seatCategory) === i,
      );

      const response = await Promise.all(
        uniqueSeats.map(seat =>
          Fetcher(
            {
              eventId: event.id,
              seatCategory: seat.seatCategory,
              ticketQuantity: holders.filter(
                holder => holder.seatCategory === seat.seatCategory,
              ).length,
            },
            '/tickets',
            'POST',
          ),
        ),
      );

      const result = response.map(res => res.data).flat();
      handleTickets(result);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    navigation.navigate('TicketBought');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle={ Platform.OS === 'android' ? "light-content" : "dark-content" } />
      <View style={styles.container}>
        <Header title="Buy Tickets" leftHandler={() => navigation.goBack()} />
        <View style={styles.content}>
          <View style={styles.top}>
            <View style={styles.avatarView}>
              <Image
                source={require('../../assets/images/event-profile.jpg')}
                style={styles.avatarImg}
              />
            </View>
            <View style={styles.topRight}>
              <View style={styles.topHeading}>
                <Text style={styles.topTitle}>{event.title}</Text>
                <Text style={styles.topDate}>
                  {formatDate(event.startDate)}
                </Text>
                <Text style={styles.topTime}>10:00 - 14:00</Text>
              </View>
              <Text style={styles.topCaption}>{event.organization.name}</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.row}>
              <View style={styles.rowHeading}>
                <Text style={styles.rowTitle}>Tickets</Text>
              </View>
              {arrSeats.map((seat, index) => (
                <View key={index} style={styles.addTicket}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.qtyButton}
                    onPress={() => removeHolders(seat.name)}>
                    <FontAwesomeIcon
                      icon={faMinus}
                      color={colors.blue}
                      size={15}
                    />
                  </TouchableOpacity>
                  <View style={styles.qty}>
                    <Text style={styles.qtyText}>{countSeats(seat.name)}</Text>
                  </View>
                  <View style={styles.ticketType}>
                    <Text style={styles.ticketTypeText}>{seat.name}</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.qtyButton}
                    onPress={() => addHolders(seat)}>
                    <FontAwesomeIcon
                      icon={faAdd}
                      color={colors.blue}
                      size={15}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <Transitioning.View ref={transitionRef} transition={transition}>
              <View style={styles.row}>
                <Pressable onPress={expandHolders}>
                  <View style={styles.rowHeading}>
                    <Text style={styles.rowTitle}>Holders</Text>
                    <FontAwesomeIcon
                      icon={showHolderModal ? faChevronUp : faChevronDown}
                      color={colors.mainText}
                      size={textSize.M}
                    />
                  </View>
                </Pressable>
                {holders.length ? (
                  <View style={styles.holder}>
                    <Text style={styles.holderName}>{holders[0].name}</Text>
                    <Text style={styles.holderType}>
                      {holders[0].seatCategory.substring(0, 5)}
                    </Text>
                  </View>
                ) : null}
                {showHolders
                  ? holders.slice(1, holders.length).map((holder, index) => (
                      <View key={index} style={styles.holder}>
                        <Text style={styles.holderName}>{holder.name}</Text>
                        <Text style={styles.holderType}>
                          {holder.seatCategory.substring(0, 5)}
                        </Text>
                      </View>
                    ))
                  : null}
              </View>
            </Transitioning.View>
            <View style={styles.row}>
              <View style={styles.rowHeading}>
                <Text style={styles.rowTitle}>Payment Method</Text>
              </View>
              <View style={styles.paymentMethods}>
                {PAYMENT_METHODS.map(method => (
                  <View key={method.id}>
                    {selectedPayment === method.id ? (
                      <FontAwesomeIcon
                        icon={faCheckSquare}
                        size={18}
                        color={colors.green}
                        style={styles.selectedPayment}
                      />
                    ) : null}
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setSelectedPayment(method.id)}
                      style={styles.paymentMethod}>
                      <View style={styles.paymentMethodImgView}>
                        <Image
                          source={method.img}
                          style={styles.paymentMethodImg}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.paymentMethodText}>
                        {method.value}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <View style={styles.total}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalText}>{`${countTotal()}Rwf`}</Text>
            </View>
            <Text style={styles.terms}>
              By Placing this order, you agree to terms and conditions
            </Text>
            <View style={styles.buttonView}>
              <Button
                title="Confirm"
                type="primary"
                onPress={onConfirm}
                isLoading={loading}
              />
            </View>
          </View>
        </View>
      </View>
      {showHolderModal ? (
        <AddHolderModal
          visible={showHolderModal}
          close={() => setShowHolderModal(false)}
          action={saveHolder}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default BuyTicketScreen;
