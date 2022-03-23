import React from 'react';
import {View, Pressable, Text, ViewProps, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../constants';
import styles from './Header.style';

export type HeaderProps = ViewProps & {
  leftHandler: () => void;
  leftIcon?: string;
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
        <Icon
          name={leftIcon || 'chevron-back'}
          size={24}
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
