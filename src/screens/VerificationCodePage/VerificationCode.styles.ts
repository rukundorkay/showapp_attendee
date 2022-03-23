import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';

export const styles = StyleSheet.create({
  root: {flex: 1, padding: 50},
  title: {textAlign: 'center', fontSize: 30, fontFamily: fonts.ExtraBold},
  paragraph: {
    marginVertical: 30,
    color: colors.blue,
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  container: {
    flexDirection: 'row',
    color: 'black',
    marginVertical: 30,
    paddingLeft: 50,
  },
  text: {
    color: 'black',
  },
  code: {
    color: colors.primary,
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
