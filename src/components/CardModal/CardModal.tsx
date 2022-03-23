import {View, Text, Modal, Pressable, FlatList} from 'react-native';
import React from 'react';
import styles from './CardModal.style';
import {CardIcon} from './components';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Visa',
    img: require('../../assets/images/visa.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Mobile Money',
    img: require('../../assets/images/mtn.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'MasterCard',
    img: require('../../assets/images/mastercard.png'),
  },
];

const ProfileModal = ({shown, toggleVisible}: any) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({item}: any) => <CardIcon item={item} />;
  return (
    <View>
      <Modal
        animationType="fade"
        transparent
        visible={shown}
        onRequestClose={() => {
          console.log('Closed');
          toggleVisible();
        }}>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>Choose Method</Text>
              <Pressable
                style={styles.closeIcon}
                onPress={() => toggleVisible()}>
                <Text style={styles.red}>X</Text>
              </Pressable>
            </View>
            <View style={styles.options}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileModal;
