import { Keyboard, Pressable, Text, View, TextInput as TX } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './LoginScreen.styles'
import { Button, TextInput } from '../../components'
import { useFormik } from 'formik'
import { colors, globalStyles, textSize } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../types'
import Feather from 'react-native-vector-icons/Feather'
import { UserLogin } from '../../API/auth'
import EncryptedStorage from 'react-native-encrypted-storage';

const initialValues = {email: '', password: ''};

const LoginScreen = () => {
  const [ error,setError ] = useState<string>("")
  const [ loading,setLoader ] = useState<boolean>(false)
  const [ showPassword,setPassword ] = useState<boolean>(true)

  const navigation = useNavigation<RootStackParamList>()

  const { values,handleChange,handleSubmit } = useFormik({
    initialValues,
    onSubmit: ({ email,password }) => {
      if(email && password && !loading){
        setLoader(true)
        UserLogin({ email,password })
        .then(res => {
          setLoader(false)
          // if successulf redirect to login
          if(res.success){
            EncryptedStorage.setItem('userToken',res.data)
            .then(()=>navigation.navigate('home'))
          }else{
            setError(res.message)
          }
        })
      }
    }
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
    <Pressable style={{ flex:1 }} onPress={Keyboard.dismiss}>
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
              //onBlur={()=>{}}
              required={true}
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
            <Text onPress={()=>navigation.navigate('forgotPassword')} style={styles.forgotPassword}>Forgot Password ?</Text>
            <Text style={globalStyles.error}>{error}</Text>
            <Button
              type='primary'
              title='Sign in'
              onPress={handleSubmit}
              isLoading={loading}
              />
        </View>
        <View style={[globalStyles.flexer,{ justifyContent:'center' }]}>
          <Text style={styles.footer}>
            Don't have an account ? 
          </Text>
          <Pressable onPress={()=>navigation.navigate('register')}>
            <Text style={styles.signup}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  )
}

export default LoginScreen;
