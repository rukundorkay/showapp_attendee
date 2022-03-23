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
    fontFamily: fonts.SemiBold
  },
  text: {
    color: colors.blue,
    fontFamily: fonts.Bold,
    marginVertical: 30,
  },
  textingContainer: {
    flexDirection: 'row',
    marginVertical: Spacing/2,
  },
  textfooter: {
    color: colors.dimeText,
    fontFamily: fonts.Medium,
    fontSize: textSize.SM
  },
  textlinks: {
    color: colors.primary,
    textDecorationLine:"underline",
    fontFamily: fonts.Medium,
    fontSize: textSize.SM
  },
  icon:{
    padding:5
  }
});
