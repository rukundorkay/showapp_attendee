import {View, Text, TextInput} from 'react-native';
import React, {ChangeEvent, FunctionComponent, ReactElement} from 'react';
import styles from './TextInput.style';
import {colors, globalStyles} from '../../constants';

type TextInputProps = {
  type?: 'primary' | 'accent';
  required?: boolean;
  label?: string;
  placeholder: string;
  value: string;
  onChange: (e: string | ChangeEvent<any>) => void;
  onBlur: () => void;
  style?: {};
  Icon?: ReactElement;
  securedInput?: boolean;
};

const CustomTextInput = ({
  label,
  required,
  placeholder,
  value,
  onBlur,
  onChange,
  securedInput,
  type,
  style,
  Icon,
}: TextInputProps) => {
  return (
    <View style={[styles.container, style && style]}>
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
          secureTextEntry={securedInput}
        />
      ) : (
        <View
          style={[
            globalStyles.flexer,
            styles.inputWrapper,
            {
              backgroundColor:
                type === 'accent' ? colors.inputAccent : colors.lightPrimary,
            },
          ]}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            secureTextEntry={securedInput}
            onChange={onChange}
            secureTextEntry={securedInput || false}
          />
          {Icon}
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;
