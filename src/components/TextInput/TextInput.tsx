import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './TextInput.style';

type TextInputProps = {
  type?: 'primary' | 'accent';
  required?: boolean;
  label?: string;
  placeholder: string;
  value: string;
  onChange: () => void;
  onBlur: () => void;
};

const CustomTextInput = ({
  label,
  required,
  placeholder,
  value,
  onBlur,
  onChange,
  type,
}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        {label && <Text style={styles.label}>{label}</Text>}
        {required && <Text style={styles.asterisk}>*</Text>}
      </View>

      {type === 'accent' ? (
        <TextInput
          style={styles.accent_input}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default CustomTextInput;
