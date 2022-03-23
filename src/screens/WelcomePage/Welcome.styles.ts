import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import { fonts, globalStyles, height, Spacing, textSize, width } from '../../constants';
import colors from '../../constants/colors';
// import {colors, fonts} from '../../constants';

export const styles = StyleSheet.create({
  IndicatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SlideIndicator: {
    height: 7,
    width: 10,
    backgroundColor: colors.lightPrimary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-evenly',
    backgroundColor:colors.background
  },
  footer:{
    justifyContent:"space-between",
    alignItems:'center',
    flex:.2
  },
  image: {
    position:'absolute',
    width:'85%',
    height:"100%",
    resizeMode:'contain',
    top:0,
  },
  imageWrapper:{
    flex:.9,
    width,
    ...globalStyles.centerd
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontFamily: fonts.SemiBold
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: fonts.Medium,
    fontSize: textSize.SM,
    color:colors.dimeText
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
  textalign: {
    color: colors.primary,
  },
});
