import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {RootStackParamList} from '../../../types';
import {MainBottomTabParamList} from '../Home/MainBottomTabParams';
import {Button, TicketCarousel} from '../../components';
import {useContextMode} from '../../context/useContext';
import {colors} from '../../constants';
import styles from './TicketBoughtScreen.styles';

const TicketBoughtScreen = () => {
  const {tickets} = useContextMode();
  const navigation =
    useNavigation<
      CompositeNavigationProp<
        StackNavigationProp<RootStackParamList, 'home'>,
        BottomTabNavigationProp<MainBottomTabParamList, 'Tickets'>
      >
    >();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.top}>
            <Image
              source={require('../../assets/images/check.png')}
              style={styles.checkImg}
            />
            <Text style={styles.topTitle}>Payment Successful</Text>
            <Text style={styles.topDesc}>Your tickets are ready!!</Text>
          </View>
          <TicketCarousel data={tickets} />
          <View style={styles.buttonView}>
            <Button
              type="primary"
              title="Done"
              onPress={() => navigation.navigate('Tickets')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TicketBoughtScreen;
