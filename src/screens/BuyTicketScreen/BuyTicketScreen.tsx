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
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {Transition, Transitioning} from 'react-native-reanimated';

import {RootStackParamList} from '../../../types';
import {Holder} from '../../interfaces/holder.interface';
import {AddHolderModal, Button, Header} from '../../components';
import {colors} from '../../constants';
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
};

const BuyTicketScreen: React.FC<BuyTicketScreenProps> = ({navigation}) => {
  const [showHolders, setShowHolders] = useState(false);
  const [showHolderModal, setShowHolderModal] = useState(false);
  const [holders, setHolders] = useState<Holder[]>([
    {seatCategory: 'VIP', quantity: 1, name: 'Isimbi P.'},
  ]);
  const [selectedSeat, setSelectedSeat] = useState<string>('');
  const [selectedPayment, setSelectedPayment] = useState<number>();
  const transitionRef = useRef<any>();

  const expandHolders = () => {
    setShowHolders(!showHolders);
    transitionRef?.current.animateNextTransition();
  };

  const addHolders = (seatCategory: string) => {
    setSelectedSeat(seatCategory);
    setShowHolderModal(true);
  };

  const saveHolder = (name: string) => {
    setHolders([...holders, {seatCategory: selectedSeat, quantity: 1, name}]);
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

  const onConfirm = () => {
    console.log(holders);
    navigation.navigate('TicketBought');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
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
                <Text style={styles.topTitle}>Trappish Concert</Text>
                <Text style={styles.topDate}>25 October 2022</Text>
                <Text style={styles.topTime}>10:00 - 17:00</Text>
              </View>
              <Text style={styles.topCaption}>Intore Entertainment</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.row}>
              <View style={styles.rowHeading}>
                <Text style={styles.rowTitle}>Tickets</Text>
              </View>
              <View style={styles.addTicket}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.qtyButton}
                  onPress={() => removeHolders('VIP')}>
                  <Icon name="remove" size={15} color={colors.blue} />
                </TouchableOpacity>
                <View style={styles.qty}>
                  <Text style={styles.qtyText}>{countSeats('VIP')}</Text>
                </View>
                <View style={styles.ticketType}>
                  <Text style={styles.ticketTypeText}>VIP</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.qtyButton}
                  onPress={() => addHolders('VIP')}>
                  <Icon name="add" size={15} color={colors.blue} />
                </TouchableOpacity>
              </View>
              <View style={styles.addTicket}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.qtyButton}
                  onPress={() => removeHolders('Regular')}>
                  <Icon name="remove" size={15} color={colors.blue} />
                </TouchableOpacity>
                <View style={styles.qty}>
                  <Text style={styles.qtyText}>{countSeats('Regular')}</Text>
                </View>
                <View style={styles.ticketType}>
                  <Text style={styles.ticketTypeText}>Regular</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.qtyButton}
                  onPress={() => addHolders('Regular')}>
                  <Icon name="add" size={15} color={colors.blue} />
                </TouchableOpacity>
              </View>
            </View>
            <Transitioning.View ref={transitionRef} transition={transition}>
              <View style={styles.row}>
                <Pressable onPress={expandHolders}>
                  <View style={styles.rowHeading}>
                    <Text style={styles.rowTitle}>Holders</Text>
                    <Icon
                      name={showHolders ? 'chevron-up' : 'chevron-down'}
                      size={14}
                      color={colors.mainText}
                    />
                  </View>
                </Pressable>
                {holders.length ? (
                  <View style={styles.holder}>
                    <Text style={styles.holderName}>{holders[0].name}</Text>
                    <Text style={styles.holderType}>
                      {holders[0].seatCategory.substring(0, 3)}
                    </Text>
                  </View>
                ) : null}
                {showHolders
                  ? holders.slice(1, holders.length).map((holder, index) => (
                      <View key={index} style={styles.holder}>
                        <Text style={styles.holderName}>{holder.name}</Text>
                        <Text style={styles.holderType}>
                          {holder.seatCategory.substring(0, 3)}
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
                      <Icon
                        name="checkbox"
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
              <Text style={styles.totalText}>37,000Rwf</Text>
            </View>
            <Text style={styles.terms}>
              By Placing this order, you agree to terms and conditions
            </Text>
            <View style={styles.buttonView}>
              <Button title="Confirm" type="primary" onPress={onConfirm} />
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
