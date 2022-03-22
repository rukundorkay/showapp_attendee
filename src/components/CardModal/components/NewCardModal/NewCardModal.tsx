import {View, Text, Modal, Pressable} from 'react-native';
import React from 'react';
import styles from './NewCardModal.style';
import {NewCardForm} from './components';

const NewCardModal = ({shown, toggleVisible}: any) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={shown}
        onRequestClose={() => {
          toggleVisible();
        }}>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>Payment Information</Text>
              <Pressable onPress={() => toggleVisible(!shown)}>
                <Text style={styles.icon}>X</Text>
              </Pressable>
            </View>
            {/* New Card Form */}
            <NewCardForm />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewCardModal;
