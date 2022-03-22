import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Button.style';

type ButtonProps = {
  type: 'primary' | 'secondary';
  title: string;
  onPress: () => void;
};

const Button = (props: ButtonProps) => {
  return props.type === 'primary' ? (
    <Pressable style={styles.primary} onPress={props.onPress}>
      <Text style={styles.primary_text}>{props.title}</Text>
    </Pressable>
  ) : (
    <Pressable style={styles.secondary} onPress={props.onPress}>
      <Text style={styles.secondary_text}>{props.title}</Text>
    </Pressable>
  );
};

export default Button;
