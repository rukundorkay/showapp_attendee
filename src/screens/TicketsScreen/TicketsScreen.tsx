import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Button, TicketCarousel} from '../../components';

import {colors} from '../../constants';
import styles from './TicketsScreen.styles';

const TicketsScreen = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'cancelled'>('active');
  const [selectedItem, setSelectedItem] = useState<number>();

  const onItemPress = (id: number) => {
    setSelectedItem(id);
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
        <View>
          <TicketCarousel
            data={[{id: 1}, {id: 2}, {id: 3}]}
            onItemPress={onItemPress}
          />
        </View>
      </ScrollView>
      {selectedItem ? (
        <View style={styles.buttonView}>
          {activeTab === 'active' ? (
            <Button onPress={()=>{}} type="primary" title="Share" />
          ) : (
            <Button onPress={()=>{}} type="primary" title="Ask for refund" />
          )}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default TicketsScreen;
