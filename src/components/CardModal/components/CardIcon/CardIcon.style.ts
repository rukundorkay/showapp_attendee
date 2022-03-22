import {StyleSheet} from 'react-native';
import {borderRadius, colors, width} from '../../../../constants';

export default StyleSheet.create({
  container: {
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: colors.lightBlue,
    margin: 5,
    borderRadius: borderRadius.SM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
  },
});
