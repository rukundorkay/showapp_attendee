import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';
import dimesions from '../../constants/dimesions';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: dimesions.Spacing,
    backgroundColor: colors.background,
  },
  leftButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    marginRight: 24,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    color: colors.darkBlue,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});

export default styles;
