import {StyleSheet} from 'react-native';
import {borderRadius, Spacing, width, colors, textSize} from '../../constants';

export const style = StyleSheet.create({
  profileImage: {
    width: width * 0.17,
    height: width * 0.17,
    margin: Spacing,
    borderRadius: borderRadius.SM,
  },
  textInput: {
    width: width * 0.6,
    backgroundColor: colors.inputBgBlue,
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: textSize.M,
    marginLeft: Spacing,
  },
  btn: {
    backgroundColor: 'red',
    width: width * 0.2,
  },
  flexStart: {
    flexDirection: 'row',
    margin: Spacing,
  },
  title: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: textSize.L - 5,
    marginVertical: 10,
  },
  smallTextInput: {
    width: width * 0.5,
    backgroundColor: colors.inputBgBlue,
    color: colors.blue,
    fontSize: textSize.M,
    marginVertical: 5,
  },
  flexEndRow: {
    justifyContent: 'center',
  },
});
