import {StyleSheet} from 'react-native';
import {borderRadius, colors, fonts, Spacing, textSize} from '../../constants';

export const styles = StyleSheet.create({
  IndicatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing / 2,
  },
  SlideIndicator: {
    height: 7,
    width: 10,
    backgroundColor: colors.lightPrimary,
  },
  skip: {
    fontFamily: fonts.Medium,
    marginTop: Spacing / 2,
    color: colors.primary,
  },
  form: {
    flex: 0.6,
    // justifyContent:'space-between'
  },
  mainText: {
    fontFamily: fonts.Bold,
    fontSize: textSize.L,
    color: colors.mainText,
  },
  secondaryText: {
    fontFamily: fonts.Regular,
    color: colors.mutedText,
  },
  title: {
    fontFamily: fonts.Bold,
    fontSize: textSize.XL,
    color: colors.mainText,
    textAlign: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-evenly',
    paddingHorizontal: Spacing,
  },
});
