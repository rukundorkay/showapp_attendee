import {Text, Pressable, StyleProp, TextStyle, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Button.style';
import { colors, textSize } from '../../constants';

type ButtonProps = {
  type: 'primary' | 'secondary';
  title: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
  isLoading?: boolean
};

const Button = (props: ButtonProps) => {
  return props.type === 'primary' ? (
    <Pressable style={[styles.primary, props.style]} onPress={props.onPress}>
      {
        props.isLoading ?
        <ActivityIndicator size={textSize.L} color={'white'} />:
        <Text style={styles.primary_text}>{props.title}</Text>

      }
    </Pressable>
  ) : (
    <Pressable style={[styles.secondary, props.style]} onPress={props.onPress}>
      {
        props.isLoading ?
        <ActivityIndicator size={textSize.L} color={'white'} />:
        <Text style={styles.secondary_text}>{props.title}</Text>
      }
    </Pressable>
  );
};

export default Button;
