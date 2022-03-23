import {Text, Pressable, View} from 'react-native';
import React from 'react';
import styles from './IconHolder.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {color} from 'react-native-reanimated';
import {colors} from '../../constants';

type IconHolderProps = {
  type: string;
  name: string;
};

const IconHolder = (props: IconHolderProps) => {
  if (props.type === 'AntDesign')
    return (
      <View style={styles.IconHolder}>
        <AntDesign name={props.name} color={colors.lightBlue} size={25} />
      </View>
    );
  else if (props.type === 'Feather')
    return (
      <View style={styles.IconHolder}>
        <FontAwesome name={props.name} color={colors.lightBlue} size={25} />
      </View>
    );
  else if (props.type === 'EvilIcons')
    return (
      <View style={styles.IconHolder}>
        <Feather name={props.name} color={colors.lightBlue} size={25} />
      </View>
    );
  else if (props.type === 'FontAwesome')
    return (
      <View style={styles.IconHolder}>
        <EvilIcons name={props.name} color={colors.lightBlue} size={25} />
      </View>
    );
};
export default IconHolder;
