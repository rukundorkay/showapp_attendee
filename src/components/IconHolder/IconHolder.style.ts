import {StyleSheet} from 'react-native';
import {width, colors, Spacing, borderRadius, fonts} from '../../constants';

export default StyleSheet.create({
  IconHolder: {
    marginRight: Spacing - 12,
    backgroundColor: colors.inputBgBlue,

    width: 40,
    height: 40,
    borderRadius: 3,
    paddingTop: Spacing - 25,
    paddingLeft: Spacing - 25,
  },
});
