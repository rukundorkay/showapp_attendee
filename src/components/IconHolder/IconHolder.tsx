import { TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './IconHolder.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {colors, textSize} from '../../constants';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type IconHolderProps = {
  name: IconProp;
  onPress?: () => void
};

const IconHolder = ({ name,onPress }: IconHolderProps) => (
  <TouchableOpacity onPress={onPress} style={styles.IconHolder}>
    <FontAwesomeIcon icon={name} color={colors.blue} size={textSize.HM} />
  </TouchableOpacity>
);

export default IconHolder;
