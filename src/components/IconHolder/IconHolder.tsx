import {View} from 'react-native';
import React from 'react';
import styles from './IconHolder.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {colors, textSize} from '../../constants';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconHolderProps = {
  type: string;
  name: IconProp;
};

const IconHolder = (props: IconHolderProps) => {
  if (props.type === 'AntDesign')
    return (
      <View style={styles.IconHolder}>
        <FontAwesomeIcon icon={props.name} color={colors.lightBlue} size={textSize.M} />
      </View>
    );
  else if (props.type === 'Feather')
    return (
      <View style={styles.IconHolder}>
        <FontAwesomeIcon icon={props.name} color={colors.lightBlue} size={textSize.M} />
      </View>
    );
  else if (props.type === 'EvilIcons')
    return (
      <View style={styles.IconHolder}>
        <FontAwesomeIcon icon={props.name} color={colors.lightBlue} size={textSize.M} />
      </View>
    );
  else (props.type === 'FontAwesome')
    return (
      <View style={styles.IconHolder}>
        <FontAwesomeIcon icon={props.name} color={colors.lightBlue} size={textSize.M} />
      </View>
    );
};
export default IconHolder;
