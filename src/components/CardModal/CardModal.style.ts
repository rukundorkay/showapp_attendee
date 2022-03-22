import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';
import {height, width, Spacing} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width * 0.7,
    height: height * 0.2,
    backgroundColor: colors.background,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    paddingTop: Spacing * 0.3,
  },
  closeIcon: {
    marginHorizontal: Spacing * 0.5,
    paddingHorizontal: 15,
    color: colors.primary,
  },
  options: {
    paddingTop: Spacing * 0.5,
  },
  title: {
    fontFamily: fonts.ExtraBold,
  },
  red: {
    color: colors.primary,
    fontFamily: fonts.ExtraBold,
  },
});
