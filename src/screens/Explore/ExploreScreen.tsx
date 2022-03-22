import {StatusBar, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './ExploreScreen.styles';
import {colors} from '../../constants';
import {StoreContext} from '../../context';
import {useContextMode} from '../../context/useContext';
import {SafeAreaView} from 'react-native-safe-area-context';

const EXploreScreen = () => {
  // const {authInfo} = useContextMode();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.background} />
    </SafeAreaView>
  );
};

export default EXploreScreen;
