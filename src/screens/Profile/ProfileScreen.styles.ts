import {StyleSheet} from 'react-native';
import {borderRadius, Spacing, width} from '../../constants';

export const style = StyleSheet.create({
  profileImage: {
    width: width * 0.17,
    height: width * 0.17,
    margin: Spacing,
    borderRadius: borderRadius.SM,
  },
});
