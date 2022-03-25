import {Platform, StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fonts,
  globalStyles,
  Spacing,
  textSize,
} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  eventTitle: {
    marginHorizontal: Spacing,
    marginTop: Spacing - 10,
    marginBottom: Spacing - 22,
    color: colors.blue,
    fontFamily: fonts.SemiBold,
    fontSize: textSize.XL,
  },
  filterButton: {
    paddingVertical: Spacing - 25,
  },
  searchFilterWrapper: {
    ...globalStyles.flexer,
    paddingHorizontal: Spacing,
    marginTop: Platform.OS === 'android' ? Spacing / 2 : - Spacing/1.5,
  },
  searchField: {
    color: colors.blue,
    flex: 1,
    fontFamily: fonts.Medium,
    fontSize: textSize.M,
  },
  eventsearch: {
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.95,
    paddingVertical: Platform.OS === 'android' ? 0 : Spacing * 0.4,
    paddingHorizontal: Spacing * 0.7,
    borderRadius: borderRadius.SM,
  },
  eventheader: {
    backgroundColor: colors.background,
  },
});
