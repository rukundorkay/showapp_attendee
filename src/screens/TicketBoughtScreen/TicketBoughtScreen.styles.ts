import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';
import dimesions from '../../constants/dimesions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    backgroundColor: colors.background,
  },
  top: {
    alignItems: 'center',
    paddingHorizontal: dimesions.Spacing,
    paddingVertical: 30,
  },
  checkImg: {
    width: 35,
    height: 35,
  },
  topTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: 15,
    lineHeight: 21,
    color: colors.darkBlue,
    marginBottom: 10,
    marginTop: 16,
  },
  topDesc: {
    fontFamily: fonts.Medium,
    fontSize: 13,
    lineHeight: 22,
    color: colors.mutedGray,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: dimesions.Spacing + 10,
    paddingBottom: 20,
  },
  buttonView: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default styles;
