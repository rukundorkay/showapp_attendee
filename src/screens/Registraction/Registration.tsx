import {Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Registration.styles';
import {Button, TextInput} from '../../components';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import Feather from 'react-native-vector-icons/Feather'
import {colors, globalStyles, Spacing, textSize} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import {useFormik} from 'formik';

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

const initialValues = {email: '', password: '', name: '', phone: ''};

const RegistrationScreen = () => {
  const [ showPassword,setPassword ] = useState<boolean>(true)
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  const {values, handleChange, handleSubmit} = useFormik({
    initialValues,
    onSubmit: async () => {},
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.spacer} />
        <View>
          <Text style={styles.header}>Join Us Now!</Text>
          <TextInput
            onBlur={() => {}}
            label="Full Name"
            value={values.name}
            onChange={handleChange('name')}
            required
            placeholder="thirtsa isimbi"
          />
          <TextInput
            required
            label="E-mail"
            onBlur={() => {}}
            value={values.email}
            placeholder="isimbi@gmail.com"
            onChange={handleChange('email')}
          />
          <TextInput
            label="Phone Number"
            required
            placeholder="078**************"
            value={values.phone}
            onChange={handleChange('phone')}
            onBlur={() => {}}
          />
          <TextInput
            value={values.password}
            onChange={handleChange('password')}
            onBlur={() => {}}
            label="Password"
            required
            securedInput={showPassword}
            placeholder="************"
            Icon={ (
              <Pressable onPress={()=>setPassword(!showPassword)} style={styles.icon} >
                <Feather name="eye" size={textSize.M} color={colors.mutedText} />
              </Pressable>
              )
            }
          />
          <Text style={styles.text}>You are joining as an?</Text>

          <RadioGroup
            containerStyle={{flexDirection: 'row'}}
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
          />

          <View style={[globalStyles.centerd, {marginTop: Spacing / 2}]}>
            <Button type="primary" title="Continue" onPress={() => {}} />
            <View style={styles.textingContainer}>
              <Text style={styles.textfooter}>Already have an account ? </Text>
              <Text style={styles.textlinks}>Login</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegistrationScreen;
