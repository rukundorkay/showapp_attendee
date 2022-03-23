import {StyleSheet} from 'react-native';
import {width, colors, Spacing, borderRadius, fonts} from '../../constants';

export default StyleSheet.create({
  primary: {
    width: width * 0.7,
    backgroundColor: colors.primary,
    padding: Spacing * 0.3,
    alignItems: 'center',
    borderRadius: borderRadius.XS,
  },
  secondary: {
    width: width * 0.7,
    backgroundColor: colors.background,
    padding: Spacing * 0.3,
    alignItems: 'center',
    borderRadius: borderRadius.XS,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  primary_text: {
    color: colors.background,
    fontFamily: fonts.ExtraBold,
  },
  secondary_text: {
    color: colors.primary,
    fontFamily: fonts.ExtraBold,
  },
});
