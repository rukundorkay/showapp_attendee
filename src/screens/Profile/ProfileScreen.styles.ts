import {StyleSheet} from 'react-native';
import {
  borderRadius,
  Spacing,
  width,
  colors,
  textSize,
  fonts,
} from '../../constants';

export const style = StyleSheet.create({
  qr: {
    padding: Spacing / 2,
    // backgroundColor: 'lightgrey',
    borderRadius: borderRadius.L,
    fontFamily: fonts.Bold,
    fontSize: textSize.L,
    color: colors.mutedText,
  },
  img: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  card: {
    flexDirection: 'row',
    width: width * 0.5,
    justifyContent: 'space-around',
  },
  header: {
    marginVertical: Spacing * 0.9,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing * 0.5,
  },
  flex: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: Spacing,
    backgroundColor: colors.background,
  },
  profImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: borderRadius.SM,
  },
  name: {
    marginBottom: Spacing * 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  section: {
    marginBottom: Spacing * 0.5,
  },
  add: {
    flexDirection: 'row',
    width: width * 0.6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nameText: {
    fontFamily: fonts.ExtraBold,
    color: colors.blue,
    fontSize: Spacing * 0.6,
  },
  title: {
    fontFamily: fonts.ExtraBold,
    color: colors.midBlue,
    fontSize: textSize.M,
    paddingVertical: Spacing * 0.4,
  },
  text: {
    color: colors.dimeText,
    marginVertical: Spacing * 0.2,
  },
  red: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontSize: Spacing * 0.5,
  },
  done: {
    color: colors.success,
    fontSize: Spacing * 0.5,
    textDecorationLine: 'underline',
  },
  textInput: {
    width: width * 0.6,
    backgroundColor: colors.inputBgBlue,
    color: colors.blue,
    fontFamily: fonts.SemiBold,
    fontSize: textSize.M,
    borderRadius: borderRadius.XS,
    padding: Spacing * 0.5,
    marginBottom: Spacing * 0.5,
  },
});
