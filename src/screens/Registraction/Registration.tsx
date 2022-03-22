import {SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../Registraction/Registration.style';
import {Button, TextInput} from '../../components';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

import {globalStyles} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Organizer ',
    value: 'Organizer',
  },
  {
    id: '2',
    label: 'Attendee ',
    value: 'Attendee',
  },
];

const RegistrationScreen = () => {
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.spacer} />
        <View>
          <Text style={styles.header}>Join Us Now!</Text>
          <TextInput label="Full Name" required placeholder="thirtsa isimbi" />
          <TextInput
            label="E-mail"
            required
            placeholder="thirtsaisimbi@gmail.com"
          />
          <TextInput
            label="Phone Number"
            required
            placeholder="078**************"
          />
          <TextInput label="Password" required placeholder="************" />
          <Text style={styles.text}>You are joining as an?</Text>

          <RadioGroup
            containerStyle={{flexDirection: 'row'}}
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
          />

          <View style={[globalStyles.centerd, {marginVertical: 30}]}>
            <Button
              type="primary"
              title="Create An account"
              onPress={() => {}}
            />
            <View style={styles.textingContainer}>
              <Text style={styles.textfooter}>Already have an account? </Text>
              <Text style={styles.textlinks}>Login</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegistrationScreen;
