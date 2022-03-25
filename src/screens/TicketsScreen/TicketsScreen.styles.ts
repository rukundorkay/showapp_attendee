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
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
  headerTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: 25,
    color: colors.darkBlue,
  },
  search: {
    paddingHorizontal: dimesions.Spacing,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.lightBlue,
    borderRadius: 14,
    paddingLeft: 26,
    paddingRight: 18,
  },
  inputSearch: {
    flex: 1,
    color: colors.blue,
    fontFamily: fonts.Regular,
    fontSize: 13,
    lineHeight: 15,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
    paddingVertical: 0,
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: dimesions.Spacing,
    marginTop: 16,
  },
  tab: {
    alignItems: 'center',
    width: dimesions.width * 0.35,
    padding: 14,
    borderBottomColor: colors.mutedBlue,
    borderBottomWidth: 1,
  },
  tabText: {
    fontFamily: fonts.Medium,
    fontSize: 13,
    lineHeight: 21,
    color: colors.mutedBlue,
  },
  tabTextActive: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 21,
    color: colors.primary,
  },
  tabActive: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  loader: {
    marginVertical: dimesions.Spacing,
  },
});

export default styles;
