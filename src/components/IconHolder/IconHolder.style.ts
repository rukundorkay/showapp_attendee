import {StyleSheet} from 'react-native';
import {colors, Spacing, borderRadius} from '../../constants';

export default StyleSheet.create({
  IconHolder: {
    marginRight: Spacing / 2,
    backgroundColor: colors.inputBgBlue,
    justifyContent:'center',
    alignItems:'center',
    width: 40,
    height: 40,
    borderRadius: borderRadius.SM,
    padding:Spacing/1.3
  },
});
