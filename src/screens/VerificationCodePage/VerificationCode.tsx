import { SafeAreaView, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, {useState} from 'react';
import {styles} from './VerificationCode.styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from '../../components/Button';
import {colors, globalStyles, textSize} from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import Feather from 'react-native-vector-icons/Feather';

const CELL_COUNT = 4;
const VerificationCode = () => {
  const navigation = useNavigation<RootStackParamList>()
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleSubmit = () => {}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <SafeAreaView>
          <Feather name="chevron-left" size={textSize.XL} color={colors.mainText} onPress={()=> navigation.goBack()} />
        </SafeAreaView>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.paragraph}>
          A verification code has been sent to <Text style={styles.email}>Isimbi@awesomity.rw</Text> Please enter
          the code below
        </Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View style={styles.container}>
          <Text style={styles.text}>Resend the code in</Text>
          <Text style={styles.code}>00:19</Text>
        </View>
        <View style={globalStyles.centerd}>
          <Button type="primary" title="Create An account" onPress={handleSubmit} />
          <View style={styles.textingContainer}>
            <Text style={styles.textfooter}>Already have an account ? </Text>
            <Text onPress={()=> navigation.navigate('login')} style={styles.textlinks}>Login</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VerificationCode;
