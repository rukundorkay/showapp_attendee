import {Text, Pressable, ViewStyle} from 'react-native';
import React from 'react';
import styles from './Button.style';

type ButtonProps = {
  type: 'primary' | 'secondary';
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

const Button = (props: ButtonProps) => {
  return props.type === 'primary' ? (
    <Pressable style={[styles.primary, props.style]} onPress={props.onPress}>
      <Text style={styles.primary_text}>{props.title}</Text>
    </Pressable>
  ) : (
    <Pressable style={[styles.secondary, props.style]} onPress={props.onPress}>
      <Text style={styles.secondary_text}>{props.title}</Text>
    </Pressable>
  );
};

export default Button;
