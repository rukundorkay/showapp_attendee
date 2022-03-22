import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fonts,
  height,
  Spacing,
  width,
} from '../../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  card: {
    height: height * 0.6,
    width: width * 0.8,
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: 15,
    borderRadius: borderRadius.SM,
  },
  cardIcon: {
    height: 40,
    width: 40,
    backgroundColor: colors.lightBlue,
    borderRadius: borderRadius.XS,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 10,
  },
  title: {
    fontFamily: fonts.ExtraBold,
    marginLeft: 30,
    marginBottom: Spacing * 0.25,
  },
  icon: {
    fontFamily: fonts.ExtraBold,
    color: colors.primary,
    paddingHorizontal: 30,
  },
});
