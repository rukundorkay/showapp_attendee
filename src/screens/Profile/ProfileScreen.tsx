import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {style} from './ProfileScreen.styles';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useContextMode} from '../../context/useContext';
import {RootStackParamList, User} from '../../../types';
import {CardModal, IconHolder} from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCog, faCogs, faCreditCard, faSignOut, faStore } from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation<RootStackParamList>();
  const FormValidationSchema = Yup.object().shape({
    name: Yup.string().required('List name is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.number().required('Number is required'),
  });

  interface formValues {
    name: string;
    phone: string;
    email: string;
  }
  const {authInfo, handlerUser} = useContextMode();
  //   const {values, handleChange, handleBlur, handleSubmit, touched, errors} =
  //     useFormik<formValues>({
  //       initialValues: {
  //         name: authInfo?.name || '',
  //         phone: authInfo?.phone?.toString() || '',
  //         email: authInfo?.email || ' ',
  //       },
  //       validationSchema: FormValidationSchema,
  //       onSubmit: formValues => {
  //         handlerUser('update', formValues);
  //       },
  //     });
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <View style={style.container}>
      <SafeAreaView style={style.header}>
        <Pressable onPress={() => navigation.navigate('home')}>
          <FontAwesomeIcon icon={faChevronLeft} size={25} />
        </Pressable>
      </SafeAreaView>
      <View style={style.profile}>
        <Image
          style={style.profImage}
          source={require('../../assets/images/event-profile.jpg')}
        />
        <Text style={style.qr}>QR</Text>
      </View>

      {edit ? (
        <View>
          <View style={[style.flex, style.name]}>
            <Text style={style.nameText}>{authInfo?.name}</Text>
            <Pressable onPress={() => setEdit(!edit)}>
              <Text style={style.red}>Edit</Text>
            </Pressable>
          </View>
          <View style={[style.flex, style.section]}>
            <IconHolder type="AntDesign" name={faStore} />
            <View>
              <Text style={style.title}>About</Text>
              <Text style={style.text}>{authInfo?.email}</Text>
              <Text style={style.text}>{authInfo?.phone}</Text>
            </View>
          </View>
          <View style={[style.flex, style.section]}>
            <IconHolder type="AntDesign" name={faSignOut} />
            <View>
              <Text style={style.title}>Payment Method</Text>
              <Text style={style.text}>*************** 423</Text>
              <Text style={style.text}>*************** 763</Text>
              <Text style={style.text}>+250 786 078 496</Text>
            </View>
          </View>
        </View>
      ) : (
        <Formik
          initialValues={{
            email: authInfo?.email,
            phone: authInfo?.phone,
            name: authInfo?.name,
          }}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <View style={[style.flex, style.name]}>
                <TextInput
                  placeholder="Your name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={style.textInput}
                />
                <Pressable
                  onPress={() => {
                    setEdit(!edit);
                    handleSubmit();
                  }}>
                  <Text style={style.done}>Done</Text>
                </Pressable>
              </View>
              <View style={[style.flex, style.section]}>
                <IconHolder type="AntDesign" name={faStore} />
                <View>
                  <Text style={style.title}>About</Text>
                  <TextInput
                    placeholder="email@awesomity.rw"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={style.textInput}
                  />
                  <TextInput
                    placeholder="+250 780 000 000"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    style={style.textInput}
                  />
                </View>
              </View>
              <View style={[style.flex, style.section]}>
                <IconHolder type="AntDesign" name={faCreditCard} />
                <View>
                  <View style={style.add}>
                    <Text style={style.title}>Payment Method</Text>
                    <Pressable onPress={() => setModal(!modal)}>
                      <Text style={style.red}>+</Text>
                    </Pressable>
                  </View>
                  <Text style={style.text}>*************** 423</Text>
                  <Text style={style.text}>*************** 763</Text>
                  <Text style={style.text}>+250 786 078 496</Text>
                </View>
              </View>
              <CardModal shown={modal} toggleVisible={() => setModal(!modal)} />
            </View>
          )}
        </Formik>
      )}
      <View style={[style.flex, style.section]}>
        <IconHolder type="AntDesign" name={faCog} />
        <Text style={style.title}>Settings</Text>
      </View>
      {/* <Pressable onPress={() => console.log('hello')}> */}
      <Pressable
        onPress={() => handlerUser('delete', {name: '', phone: '', email: ''})}>
        <View style={[style.flex, style.section]}>
          <IconHolder type="AntDesign" name={faSignOut} />
          <Text style={style.title}>Log out</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
