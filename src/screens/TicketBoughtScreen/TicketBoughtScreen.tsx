import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {Button, TicketCarousel} from '../../components';
import {colors} from '../../constants';
import styles from './TicketBoughtScreen.styles';

const TicketBoughtScreen = () => {
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
          <TicketCarousel data={[{id: 1}, {id: 2}, {id: 3}]} />
          <View style={styles.buttonView}>
            <Button type="primary" title="Done" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TicketBoughtScreen;
