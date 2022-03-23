import {Keyboard, Pressable, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './Registration.styles';
import {Button, TextInput} from '../../components';
import Feather from 'react-native-vector-icons/Feather'
import {colors, globalStyles, Spacing, textSize} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import {useFormik} from 'formik';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import { UserSignup } from '../../API/auth';

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

const initialValues = {email: '', password: '', names: '', phone: ''};

const RegistrationScreen = () => {
  const [ error,setError ] = useState<string>("")
  const [ loading,setLoader ] = useState<boolean>(false)
  const [ showPassword,setPassword ] = useState<boolean>(true)

  const navigation = useNavigation<RootStackParamList>()

  const {values, handleChange, handleSubmit} = useFormik({
    initialValues,
    onSubmit: async (credentials) => {
      if(!loading){
        setLoader(true)
        UserSignup(credentials)
        .then(res => {
          setLoader(false)
          if(res.success){
            navigation.navigate('verification')
          }else{
            setError(res.message)
          }
        })
      }
    },
  });

  useEffect(()=>{
    /**
     * * if error has value
     * ? reset error to empty
     * * if any chage is made
     */
    if(error){
      setError('')
    }
  },[values])

  return (
    <Pressable style={{flex:1}} onPress={Keyboard.dismiss}>
        <ScrollView  style={styles.container}>
          <View style={globalStyles.spacer} />
          <Text style={styles.header}>Join Us Now!</Text>
          <View style={styles.form}>
            <TextInput
              onBlur={() => {}}
              label="Full Name"
              value={values.names}
              onChange={handleChange('names')}
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
              required
              onBlur={() => {}}
              label="Password"
              value={values.password}
              securedInput={showPassword}
              onChange={handleChange('password')}
              placeholder='* * * * * * * * * * *'
              Icon={ (
                <Pressable onPress={()=>setPassword(!showPassword)} style={styles.icon} >
                  <Feather name="eye" size={textSize.M} color={colors.mutedText} />
                </Pressable>
                )
              }
            />
          </View>
          <Text style={globalStyles.error}>{error}</Text>
          <View style={globalStyles.centerd}>
            <Button type="primary" title="Continue" onPress={handleSubmit} isLoading={loading} />
            <View style={styles.textingContainer}>
              <Text style={styles.textfooter}>Already have an account ? </Text>
              <Text style={styles.textlinks} onPress={()=>navigation.navigate('login')} >Login</Text>
            </View>
          </View>
        </ScrollView>
    </Pressable>
  );
};
export default RegistrationScreen;
