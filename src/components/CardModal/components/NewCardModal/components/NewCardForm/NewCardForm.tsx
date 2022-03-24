import {View, TextInput, Text, Image} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import styles from './NewCardForm.style';
import Button from '../../../../../Button';
import {storeCard} from '../../../../../../utils/storage';

const NewCardForm = ({card}: any) => {
  return card.title === 'Mobile Money' ? (
    <Formik
      initialValues={{
        cardNo: '',
        month: '',
        year: '',
        cvv: '',
        name: '',
        type: card.title,
      }}
      onSubmit={values => storeCard(values)}>
      {/* onSubmit={values => console.log(values)}> */}
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Text style={styles.label}>Phone Information</Text>
          <View style={styles.flex}>
            <TextInput
              onChangeText={handleChange('cardNo')}
              onBlur={handleBlur('cardNo')}
              value={values.cardNo}
              placeholder="+ 250 788 000 000"
              style={styles.cardInput}
            />
            <View style={styles.icon}>
              <Image style={styles.img} source={card.img} />
            </View>
          </View>
          {/* Expiration Date */}

          <View>
            <Text style={styles.label}>Registered Name</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Your name"
              style={styles.input}
            />
          </View>

          <Button onPress={handleSubmit} type="primary" title="Add" />
        </View>
      )}
    </Formik>
  ) : (
    <Formik
      initialValues={{
        cardNo: '',
        month: '',
        year: '',
        cvv: '',
        name: '',
        type: card.title,
      }}
      onSubmit={values => storeCard(values)}>
      {/* onSubmit={values => console.log(values)}> */}
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Text style={styles.label}>Card Information</Text>
          <View style={styles.flex}>
            <TextInput
              onChangeText={handleChange('cardNo')}
              onBlur={handleBlur('cardNo')}
              value={values.cardNo}
              placeholder="1234 1234 1234 1234"
              style={styles.cardInput}
            />
            <View style={styles.icon}>
              <Image style={styles.img} source={card.img} />
            </View>
          </View>
          {/* Expiration Date */}

          <View style={styles.flex}>
            <View>
              <Text style={styles.label}>Expiration Date</Text>
              <View style={styles.flex}>
                <TextInput
                  onChangeText={handleChange('month')}
                  onBlur={handleBlur('month')}
                  value={values.month}
                  placeholder="MM"
                  style={styles.input}
                />
                <TextInput
                  onChangeText={handleChange('year')}
                  onBlur={handleBlur('year')}
                  value={values.year}
                  placeholder="YYYY"
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.left}>
              <Text style={styles.label}>Security Code</Text>
              <View style={styles.flex}>
                <TextInput
                  onChangeText={handleChange('cvv')}
                  onBlur={handleBlur('cvv')}
                  value={values.cvv}
                  placeholder="CVV"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.label}>Name on Card</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Your name"
              style={styles.input}
            />
          </View>

          <Button onPress={handleSubmit} type="primary" title="Add" />
        </View>
      )}
    </Formik>
  );
};

export default NewCardForm;
