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

import {Button, TicketCarousel} from '../../components';
import {colors} from '../../constants';
import {Fetcher} from '../../utils/Fetcher';
import styles from './TicketsScreen.styles';

const TicketsScreen = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'cancelled'>('active');
  const [selectedItem, setSelectedItem] = useState<number>();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const fetchTickets = useCallback(async () => {
    try {
      setLoading(true);

      const res = await Fetcher(undefined, '/tickets/user', 'GET');
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const onItemPress = (id: number) => {
    setSelectedItem(id);
  };

  console.log(selectedItem);

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
          <FIcon name="search" size={30} color={colors.blue} />
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
            <TicketCarousel
              data={[{id: 1}, {id: 2}, {id: 3}]}
              onItemPress={onItemPress}
            />
          )}
        </View>
      </ScrollView>
      {selectedItem ? (
        <View style={styles.buttonView}>
          {activeTab === 'active' ? (
            <Button type="primary" title="Share" />
          ) : (
            <Button type="primary" title="Ask for refund" />
          )}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default TicketsScreen;
