import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {style} from './ProfileScreen.styles';
import {Formik} from 'formik';
import {useContextMode} from '../../context/useContext';
import {RootStackParamList, User} from '../../../types';
import {CardModal, IconHolder} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faCog,
  // faCogs,
  faCreditCard,
  faSignOut,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {retrieveCards} from '../../utils/storage';

const ProfileScreen = () => {
  const navigation = useNavigation<RootStackParamList>();
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

  const [cards, setCards] = useState([]);

  useEffect(() => {
    retrieveCards().then(res => setCards(res.cards));
  }, []);

  return (
    <View style={style.container}>
      <ScrollView>
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

        {!edit ? (
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
              <IconHolder type="AntDesign" name={faCreditCard} />

              <View>
                <Text style={style.title}>Payment information</Text>
                {cards.map(card => {
                  if (card.type === 'Visa') {
                    return (
                      <View style={style.card}>
                        <Image
                          style={style.img}
                          source={require('../../assets/images/visa.png')}
                        />
                        <Text style={style.text}>*************** 423</Text>
                      </View>
                    );
                  }
                  if (card.type === 'MasterCard') {
                    return (
                      <View style={style.card}>
                        <Image
                          style={style.img}
                          source={require('../../assets/images/mastercard.png')}
                        />
                        <Text style={style.text}>*************** 423</Text>
                      </View>
                    );
                  }
                  return (
                    <View style={style.card}>
                      <Image
                        style={style.img}
                        source={require('../../assets/images/mtn.png')}
                      />
                      <Text style={style.text}>*************** 423</Text>
                    </View>
                  );
                })}
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
            onSubmit={values => handlerUser('update', values)}>
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
                <CardModal
                  shown={modal}
                  toggleVisible={() => setModal(!modal)}
                />
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
          onPress={() =>
            handlerUser('delete', {name: '', phone: '', email: ''})
          }>
          <View style={[style.flex, style.section]}>
            <IconHolder type="AntDesign" name={faSignOut} />
            <Text style={style.title}>Log out</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
