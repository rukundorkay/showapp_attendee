import {StyleSheet} from 'react-native';
import {colors, fonts, height, Spacing, textSize} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontFamily: fonts.Bold,
    fontSize: textSize.M,
    color: colors.mainText,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'center',
    margin: Spacing,
  },
  button: {
    marginTop: height / 8,
  },
});
