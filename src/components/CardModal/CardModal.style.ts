import {StyleSheet} from 'react-native';
import {borderRadius, colors, fonts, globalStyles, textSize} from '../../constants';
import {height, width, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  card: {
    width: width * 0.75,
    // height: height * 0.2,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.M,
    padding: Spacing/2
  },
  header: {
    ...globalStyles.flexer,
    width:'100%',
  },
  closeIcon: {
    padding: 15,
    color: colors.primary,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: textSize.M,
    color: colors.mutedText
  },
  red: {
    color: colors.primary,
    fontFamily: fonts.ExtraBold,
  },
});
