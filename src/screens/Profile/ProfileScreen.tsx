import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    Button,
    TextInput,
    Pressable,
} from 'react-native';
import { globalStyles } from '../../constants';
import { style } from './ProfileScreen.styles';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { useContextMode } from '../../context/useContext';
import { User } from '../../../types';
import { IconHolder } from '../../components';

const ProfileScreen: React.FC = () => {
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
    const { authInfo, handlerUser } = useContextMode();
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
        useFormik<formValues>({
            initialValues: {
                name: authInfo?.name || '',
                phone: authInfo?.phone?.toString() || '',
                email: authInfo?.email || ' ',
            },
            validationSchema: FormValidationSchema,
            onSubmit: formValues => {
                handlerUser('update', formValues);
            },
        });
    const [edit, setEdit] = useState(false);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={globalStyles.flexer}>
                    <Image
                        style={style.profileImage}
                        source={require('../../assets/images/wall.png')}
                    />
                </View>
                <View>
                    <View style={globalStyles.flexer}>
                        <TextInput
                            style={style.textInput}
                            value={values.name}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            editable={edit}
                        />
                        <Pressable
                            style={[style.btn]}
                            onPress={() => {
                                setEdit(!edit);
                            }}>
                            <Text>{!edit ? 'Edit' : 'Done'}</Text>
                        </Pressable>
                    </View>
                    <View style={style.flexStart}>
                        <IconHolder type="AntDesign" name="appstore-o" />
                        <View style={style.flexEndRow}>
                            <Text style={style.title}>About</Text>
                            <TextInput
                                style={style.smallTextInput}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                editable={edit}
                            />
                            <TextInput
                                style={style.smallTextInput}
                                value={values.phone}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                editable={edit}
                                keyboardType={'numeric'}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;
