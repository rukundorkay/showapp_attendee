import {SafeAreaView, StatusBar, Text} from 'react-native';
import React from 'react';
import {colors} from '../../constants';
import {styles} from './HomeScreen.styles';
import {useContextMode} from '../../context/useContext';

const HomeScreen = () => {
  const {authInfo} = useContextMode();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primary} />
      <Text style={styles.title}>{authInfo?.name}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
