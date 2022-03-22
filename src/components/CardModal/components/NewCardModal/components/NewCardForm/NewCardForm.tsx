import {View, TextInput, Text} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import styles from './NewCardForm.style';
import Button from '../../../../../Button';

const NewCardForm = () => {
  return (
    <Formik
      initialValues={{cardNo: '', month: '', year: '', cvv: '', name: ''}}
      onSubmit={values => console.log(values)}>
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
              <Text>Visa</Text>
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
