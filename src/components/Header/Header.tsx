import React from 'react';
import {View, Pressable, Text, ViewProps, ViewStyle} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import {colors, textSize} from '../../constants';
import styles from './Header.style';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type HeaderProps = ViewProps & {
  leftHandler: () => void;
  leftIcon?: IconProp;
  title?: string;
  transparent?: boolean;
  style?: ViewStyle;
};

const Header: React.FC<HeaderProps> = ({
  leftHandler,
  leftIcon,
  title,
  transparent,
  style,
}) => {
  return (
    <View style={[styles.header, transparent && styles.transparent, style]}>
      <Pressable style={styles.leftButton} onPress={leftHandler}>
        <FontAwesomeIcon
          icon={ leftIcon || faChevronLeft}
          size={textSize.L}
          color={colors.mainText}
        />
      </Pressable>
      <View style={styles.titleView}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </View>
  );
};

export default Header;
