import React, {useState} from 'react';
import {View, Text, Modal, Pressable, TextInput} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';

import Button from '../Button';
import {colors} from '../../constants';
import styles from './AddHolderModal.styles';

type AddHolderModal = {
  visible: boolean;
  close: () => void;
  action: (arg0: any) => void;
};

const AddHolderModal: React.FC<AddHolderModal> = ({visible, close, action}) => {
  const [value, setValue] = useState('');

  const onPress = () => {
    if (!value) {
      return;
    }

    action(value);
    close();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      statusBarTranslucent
      onRequestClose={() => close()}>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
      />
      <Pressable onPress={close} style={styles.backDrop}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Holder Information</Text>
            <Icon
              name="close"
              size={15}
              color={colors.primary}
              style={styles.closeButton}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.item}>
              <Text style={styles.label}>Holder's Name</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Holder's Name"
                  placeholderTextColor={colors.darkGray}
                  onChangeText={text => setValue(text)}
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Add"
              type="primary"
              style={styles.button}
              onPress={onPress}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default AddHolderModal;
