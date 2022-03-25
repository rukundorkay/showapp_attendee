import { Keyboard, Pressable, Text, View, TextInput as TX, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './LoginScreen.styles'
import { Button, TextInput } from '../../components'
import { useFormik } from 'formik'
import { colors, globalStyles, height, textSize, width } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../types'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserLogin } from '../../API/auth'
import EncryptedStorage from 'react-native-encrypted-storage';
import { useContextMode } from '../../context/useContext'

const initialValues = {email: '', password: ''};

const LoginScreen = () => {
  const [ error,setError ] = useState<string>("")
  const [ loading,setLoader ] = useState<boolean>(false)
  const [ showPassword,setPassword ] = useState<boolean>(true)

  const navigation = useNavigation<RootStackParamList>()
  const { setAuth } = useContextMode()

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
            .then(()=> setAuth(true))
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
    <Pressable style={{ flex:1, }} onPress={Keyboard.dismiss}>
      <View style={styles.circleWrapper}>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
      </View>
      <ScrollView style={styles.screen}>
        { height > 700 &&  <View style={globalStyles.spacer} />}
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
                  {
                    showPassword ?
                      <FontAwesomeIcon icon={faEyeSlash} size={textSize.M} color={colors.mutedText} />:
                      <FontAwesomeIcon icon={faEye} size={textSize.M} color={colors.mutedText} />
                  }
                </Pressable>
                )
              }
            />
            <Pressable style={{width:"115%"}} onPress={()=>navigation.navigate('forgotPassword')}>
              <Text style={styles.forgotPassword}>Forgot Password ?</Text>
            </Pressable>
            <Text style={globalStyles.error}>{error}</Text>
            <Button
              type='primary'
              title='Sign in'
              onPress={handleSubmit}
              isLoading={loading}
              />
        </View>
        <View style={styles.footerWrapper}>
          <Text style={styles.footer}>
            Don't have an account ? 
          </Text>
          <Pressable onPress={()=>navigation.navigate('register')}>
            <Text style={styles.signup}>Sign Up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Pressable>
  )
}

export default LoginScreen;
