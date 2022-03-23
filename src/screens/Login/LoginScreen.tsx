import { Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './LoginScreen.styles'
import { Button, TextInput } from '../../components'
import { useFormik } from 'formik'
import { globalStyles } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const initialValues = { email:"",password:'' }

const LoginScreen = () => {
  const navigation = useNavigation()
  const { values,handleChange,handleSubmit } = useFormik({
    initialValues,
    onSubmit: async({ email,password }) => {}
  });

  return (
    <View style={styles.screen}>
      <View style={styles.circleWrapper}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
      </View>
      <View style={globalStyles.spacer} />
      <View>
        <Text style={styles.mainText}>Login First</Text>
        <Text style={styles.secondaryText}>
          Live an unparalleled experience for all your events!
        </Text>
      </View>
      <View style={[globalStyles.centerd,styles.form]}>
          <TextInput
            label="Email"
            type='primary'
            onBlur={()=>{}}
            required={true}
            value={values.email}
            onChange={handleChange('email')}
            placeholder='isimbi@awesomity.com'
          />
          <TextInput
            label="Password"
            type='primary'
            onBlur={()=>{}}
            required={true}
            securedInput={true}
            value={values.password}
            onChange={handleChange('password')}
            placeholder='* * * * * * * * * * *'
          />
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
          <View style={globalStyles.spacer} />
          <Button
            type='primary'
            title='Sign in'
            onPress={handleSubmit}
            />
      </View>
      <View style={[globalStyles.flexer,{ justifyContent:'center' }]}>
        <Text style={styles.footer}>
          Don't have an account ? 
        </Text>
        <Pressable onPress={()=>navigation.navigate('forgotPassword')}>
          <Text style={styles.signup}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen
