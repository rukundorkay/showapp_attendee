import {View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './CardIcon.style';
import NewCardModal from '../NewCardModal';

type CardIconType = {
  item: {
    id: string;
    title: string;
    img: any;
  };
};

const CardIcon = (props: CardIconType) => {
  const [visible, setVisible] = useState(false);
  return (
    <Pressable onPress={() => setVisible(true)}>
      <View style={styles.container}>
        <Image style={styles.img} source={props.item.img} />
        {/* <Text>{props.item.title}</Text> */}
        <NewCardModal
          shown={visible}
          card={props.item}
          toggleVisible={() => setVisible(!visible)}
        />
      </View>
    </Pressable>
  );
};

export default CardIcon;
