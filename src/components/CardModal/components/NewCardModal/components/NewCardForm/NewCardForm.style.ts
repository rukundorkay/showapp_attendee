import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fonts,
  Spacing,
  width,
} from '../../../../../../constants';

export default StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: colors.blue,
    fontFamily: fonts.ExtraBold,
    marginBottom: Spacing * 0.1,
  },
  input: {
    backgroundColor: colors.inputAccent,
    borderRadius: borderRadius.XS,
    paddingHorizontal: Spacing * 0.3,
    color: colors.dimeText,
    fontFamily: fonts.Bold,
    marginVertical: Spacing * 0.5,
    marginRight: Spacing * 0.2,
  },
  cardInput: {
    backgroundColor: colors.inputAccent,
    borderRadius: borderRadius.XS,
    paddingHorizontal: Spacing * 0.3,
    color: colors.dimeText,
    fontFamily: fonts.Bold,
    marginVertical: Spacing * 0.5,
    // marginRight: Spacing * 0.2,
    width: width * 0.5,
  },
  left: {
    marginLeft: Spacing,
  },
  icon: {
    height: 50,
    width: 50,
    backgroundColor: colors.inputAccent,
    borderRadius: borderRadius.XS,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Spacing * 0.5,
  },
});
