import { Pressable, SafeAreaView, StyleSheet, Text, View, Modal, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { styles } from './ForgotPassword.styles'
import { Button, IconHolder, TextInput } from '../../components'
import { useFormik } from 'formik'
import { globalStyles } from '../../constants'
import ModedModal from '../../components/ModedModal/ModedModal'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../types'
import { UserForgotPassword } from '../../API/auth'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const initialValues = { email:"",password:'' }

const ForgotPassword = () => {
  const [ error,setError ] = useState<string>("")
  const [ loading,setLoader ] = useState<boolean>(false)
  const [ showModal,setModal ] = useState(false)

  const navigation = useNavigation<RootStackParamList>()

  const { values,handleChange,handleSubmit } = useFormik({
    initialValues,
    onSubmit: async({ email }) => {
      if(email && !loading){
        setLoader(true)
        UserForgotPassword({ email })
        .then(res => {
          setLoader(false)
          if(res.success){
            setModal(true)
          }else{
            setError(res.message)
          }
        }) 
      }
    }
  });

  return (
    <Pressable style={{ flex:1 }} onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <View style={styles.circleWrapper}>
          <View style={styles.bigCircle} />
          <View style={styles.smallCircle} />
        </View>
        <IconHolder onPress={()=> navigation.goBack()} name={faChevronLeft}  />
        <View>
          <Text style={styles.mainText}>Forgot Password</Text>
          <Text style={styles.secondaryText}>
              Please fill in exactly the information provided. 
              We will send a mail to the email address registered Please fill
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
            <Text style={globalStyles.error}>{error}</Text>
            <Button
              type='primary'
              title='Send'
              isLoading={loading}
              onPress={handleSubmit}
              />
        </View>
        <View style={[globalStyles.flexer,{ justifyContent:'center' }]}>
          <Text style={styles.footer}>
            Remember password ? 
          </Text>
          <Pressable onPress={()=>navigation.navigate('login')}>
            <Text style={styles.signup}>Login</Text>
          </Pressable>
        </View>
        <ModedModal showModal={showModal} setModal={() => setModal(false)}>
          <View style={styles.modal}>
            <Text style={styles.title}>Password Reset</Text>
            <Text style={styles.secondaryText}>A file has been sent to your email. Please follow directions to reset your password.</Text>
            <Button
              title='OK'
              type='primary'
              style={styles.modalBtn}
              onPress={()=>setModal(false)} 
            />
          </View>
        </ModedModal>
      </View>
    </Pressable>
  )
}

export default ForgotPassword
