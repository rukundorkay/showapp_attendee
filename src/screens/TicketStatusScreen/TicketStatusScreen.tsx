import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {RootStackParamList} from '../../../types';
import {Button, Header} from '../../components';
import {colors} from '../../constants';
import styles from './TicketStatusScreen.styles';

type TicketStatusScreenProps = {
  navigation: StackScreenProps<
    RootStackParamList,
    'TicketStatus'
  >['navigation'];
};

const TicketStatusScreen: React.FC<TicketStatusScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <Header leftHandler={() => navigation.goBack()} />
      <View style={styles.body}>
        <FontAwesomeIcon icon={faCheckSquare} color={colors.green} size={50} />
        <Text style={styles.header}>Refund Asked</Text>
        <Text style={styles.content}>
          Your request for a refund has been sent successfully, Please wait as
          it is being processed
        </Text>
        <View style={styles.button}>
          <Button
            type="primary"
            title="Okay"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TicketStatusScreen;
