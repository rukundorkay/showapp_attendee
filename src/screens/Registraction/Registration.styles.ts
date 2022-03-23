import {StyleSheet} from 'react-native';
import {colors, fonts, Spacing, textSize} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing,

    justifyContent: 'space-evenly',
  },

  header: {
    color: colors.mainText,
    fontSize: textSize.XL,
  },
  text: {
    color: colors.blue,
    fontFamily: fonts.ExtraBold,
    marginVertical: 30,
  },
  textingContainer: {
    flexDirection: 'row',
    color: 'black',
    marginVertical: 30,
  },
  textfooter: {
    color: 'black',
  },
  textlinks: {
    color: colors.primary,
  },
});
