import {StyleSheet} from 'react-native';
import {borderRadius, colors, fonts, Spacing, width} from '../../constants';
import dimesions from '../../constants/dimesions';

export default StyleSheet.create({
  label: {
    color: colors.blue,
    fontFamily: fonts.ExtraBold,
    marginBottom: dimesions.Spacing * 0.2,
  },
  input: {
    backgroundColor: colors.lightPrimary,
    borderRadius: borderRadius.XS,
    paddingLeft: Spacing * 0.5,
    color: colors.dimeText,
    fontFamily: fonts.Bold,
  },
  accent_input: {
    backgroundColor: colors.inputAccent,
    borderRadius: borderRadius.XS,
    paddingLeft: Spacing * 0.5,
    color: colors.dimeText,
    fontFamily: fonts.Bold,
  },
  asterisk: {
    marginLeft: 5,
    color: colors.primary,
    fontFamily: fonts.ExtraBold,
  },
  container: {
    width: width * 0.8,
    marginLeft: width * 0.1,
    marginTop: width * 0.05,
  },
  flex: {
    flexDirection: 'row',
  },
});
