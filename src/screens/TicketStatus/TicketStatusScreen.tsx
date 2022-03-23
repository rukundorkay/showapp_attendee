import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components';
import {colors} from '../../constants';
import {styles} from './TicketStatusScreen.styles';

const TicketStatusScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={{margin: 20}}>
        <Icon name="chevron-back" color="black" size={35} />
      </View>
      <View style={styles.body}>
        <Icon name="checkbox-outline" color="green" size={50} />
        <Text style={styles.header}>Refund Asked</Text>
        <Text style={styles.content}>
          Your request for a refund has been sent successfully, Please wait as
          it is being processed
        </Text>
        <View style={styles.button}>
          <Button type="primary" title="Okay" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TicketStatusScreen;
