import {StyleSheet} from 'react-native';
import {borderRadius, colors, fonts, Spacing, textSize} from '../../constants';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding:Spacing,
    justifyContent:'space-around',
  },
  title: {
    textAlign: 'center',
    color:colors.mainText,
    fontSize: textSize.XL,
    fontFamily: fonts.ExtraBold,
  },
  paragraph: {
    color: colors.mutedText,
    textAlign:'center',
    fontSize:textSize.M,
    fontFamily:fonts.Regular,
  },
  email:{
    color:colors.blue
  },
  codeFieldRoot: {
    marginTop: 20
  },
  cell: {
    paddingVertical:Spacing/2,
    paddingHorizontal:Spacing,
    fontSize:textSize.L,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: borderRadius.SM,
    backgroundColor: colors.inputAccent,
  },
  focusCell: {
    borderColor: '#000',
  },
  container: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  text: {
    color: colors.mainText,
    fontFamily:fonts.Regular,
    marginRight:5,
    fontSize: textSize.SM
  },
  code: {
    color: colors.primary,
    fontSize:textSize.M,
    fontFamily:fonts.Medium
  },
  textingContainer: {
    flexDirection: 'row',
    alignItems:'center',
    marginVertical: Spacing,
  },
  textfooter: {
    color: colors.mutedText,
  },
  textlinks: {
    color: colors.primary,
    fontFamily: fonts.Medium,
    textDecorationLine:"underline"
  },
});
