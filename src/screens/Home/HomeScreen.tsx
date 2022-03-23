import {Button, SafeAreaView, StatusBar, Text} from 'react-native';
import React from 'react';
import {colors} from '../../constants';
import {styles} from './HomeScreen.styles';
import {useContextMode} from '../../context/useContext';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {authInfo} = useContextMode();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primary} />
      <Text style={styles.title}>{authInfo?.name}</Text>
      <Button title="Hello" onPress={() => navigation.navigate('Profile')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
