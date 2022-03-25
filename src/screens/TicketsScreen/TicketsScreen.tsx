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
import FIcon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import {RootStackParamList} from '../../../types';
import {MainBottomTabParamList} from '../Home/MainBottomTabParams';
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
  const [activeTab, setActiveTab] = useState<'active' | 'cancelled'>('active');
  const [selectedItem, setSelectedItem] = useState<number>();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingRefund, setLoadingRefund] = useState(false);
  const {tickets} = useContextMode();

  const fetchTickets = useCallback(async () => {
    try {
      setLoading(true);

      const res = await Fetcher(undefined, '/tickets/user', 'GET');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

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
          />
          <FontAwesomeIcon icon={faSearch} size={30} color={colors.blue} />
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
          style={[styles.tab, activeTab === 'cancelled' && styles.tabActive]}
          onPress={() => setActiveTab('cancelled')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'cancelled' && styles.tabTextActive,
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
            <TicketCarousel data={tickets} onItemPress={onItemPress} />
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
