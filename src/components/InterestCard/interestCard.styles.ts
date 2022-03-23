import {StyleSheet} from 'react-native';
import {borderRadius, colors, fonts, textSize, width} from '../../constants';

export default StyleSheet.create({
  gradient:{
    position:'absolute',
    zIndex:1,
    height:'50%',
    width:'100%',
    bottom:0,
  },
  wrapper: {
    height: width * 0.4,
    width: width * 0.26,
    marginBottom: 5,
    backgroundColor: colors.lightText,
    borderRadius: borderRadius.SM,
    borderColor:colors.primary,
    overflow:'hidden',
  },
  image: {
    position: 'absolute',
    width: '105%',
    height: '110%',
    top:'-2%',
    borderRadius: borderRadius.SM,
  },
  title: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    bottom: '5%',
    fontFamily: fonts.SemiBold,
    color: colors.background,
    fontSize: textSize.M,
    zIndex:2,
    textTransform:'capitalize'
  },
});
