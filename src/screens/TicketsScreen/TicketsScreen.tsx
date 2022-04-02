import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, useIsFocused} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import jwt_decode from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';

import {RootStackParamList} from '../../../types';
import {MainBottomTabParamList} from '../Home/MainBottomTabParams';
import {Ticket} from '../../interfaces/ticket.interfaces';
import {Button, TicketCarousel} from '../../components';
import {useContextMode} from '../../context/useContext';
import {Fetcher} from '../../utils/Fetcher';
import {colors} from '../../constants';
import styles from './TicketsScreen.styles';

type TicketsScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'home'>,
    BottomTabNavigationProp<MainBottomTabParamList, 'Tickets'>
  >;
};

const TicketsScreen: React.FC<TicketsScreenProps> = ({navigation}) => {
  const [activeTab, setActiveTab] = useState<'active' | 'canceled'>('active');
  const [selectedItem, setSelectedItem] = useState<number>();
  const [result, setResult] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingRefund, setLoadingRefund] = useState(false);
  const [query, setQuery] = useState('');
  const {handleTickets, tickets} = useContextMode();
  const isFocused = useIsFocused();

  const fetchTickets = useCallback(async () => {
    try {
      setLoading(true);

      const res = await Fetcher(undefined, '/tickets', 'GET');
      const userToken = await EncryptedStorage.getItem('userToken');
      const user  = userToken ? jwt_decode(userToken) : null

      const userTickets = res.data[0].filter((data:any) => data.user.id === user?.id);
      handleTickets(userTickets);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets, isFocused]);

  useEffect(() => {
    const filteredTickets = tickets.filter(
      (ticket:any) => ticket.event?.status === activeTab,
    );
    setResult(filteredTickets);
  }, [activeTab, tickets]);

  const onItemPress = (id: number) => {
    setSelectedItem(id);
  };

  const refund = async () => {
    try {
      setLoadingRefund(true);

      await Fetcher(undefined, `/tickets/refund/${selectedItem}`, 'PATCH');
      setLoadingRefund(false);
      navigation.navigate('TicketStatus');
    } catch (error) {
      setLoadingRefund(false);
    }
  };

  const search = () => {
    const filteredTickets = tickets.filter((ticket:any) =>
      ticket.event?.title.toLowerCase().includes(query.toLowerCase()),
    );

    setResult(filteredTickets);
  };

  useEffect(()=> {
    if(query){
      search()
    }
  },[query])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tickets</Text>
      </View>
      <View style={styles.search}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={colors.darkGray}
            style={styles.inputSearch}
            returnKeyType="search"
            onChangeText={text => setQuery(text)}
            onSubmitEditing={search}
          />
          <FontAwesomeIcon icon={faSearch} size={15} color={colors.blue} />
        </View>
      </View>
      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, activeTab === 'active' && styles.tabActive]}
          onPress={() => setActiveTab('active')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'active' && styles.tabTextActive,
            ]}>
            Active
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, activeTab === 'canceled' && styles.tabActive]}
          onPress={() => setActiveTab('canceled')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'canceled' && styles.tabTextActive,
            ]}>
            Cancelled
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.content}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={colors.primary}
              style={styles.loader}
            />
          ) : (
            <TicketCarousel data={result} onItemPress={onItemPress} />
          )}
        </View>
      </ScrollView>
      {selectedItem ? (
        <View style={styles.buttonView}>
          {activeTab === 'active' ? (
            <Button onPress={() => {}} type="primary" title="Share" />
          ) : (
            <Button
              type="primary"
              title="Ask for refund"
              onPress={() => refund()}
              isLoading={loadingRefund}
            />
          )}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default TicketsScreen;
