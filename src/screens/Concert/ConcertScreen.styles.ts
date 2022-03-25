import {StyleSheet} from 'react-native';
import {colors, fonts, globalStyles, height, Spacing, textSize, width} from '../../constants';

export const styles = StyleSheet.create({
  backHandler:{ 
    position:'absolute',
    margin:Spacing,
    zIndex:1 
  },
  button:{
    position:'absolute',
    bottom: height*0.05,
    marginHorizontal: width*0.15,
  },
  map: {
    borderRadius: 3,
    marginBottom: Spacing,
  },
  mapWrapper: {
    marginTop: Spacing - 22,
    marginHorizontal: Spacing,
  },
  title: {
    marginBottom: Spacing - 20,
    fontFamily: fonts.Bold,
    fontSize: textSize.M,
    color: colors.mainText,
  },
  aboutDescription:{
   fontFamily:fonts.Regular,
   color:'#717D96'
  },
  descriptionWrapper: {
    marginTop: Spacing - 22,
    marginHorizontal: Spacing,
  },
  aboutDate:{
    color:'#717D96',
     fontFamily:fonts.Medium
  },
  aboutTime:{
    color:'#717D96',
    fontFamily:fonts.Medium

  },

  aboutIcon: {
    marginRight: Spacing - 12,
    backgroundColor: '#C9D3E690',
    width: 40,
    height:40,
    borderRadius: 3,
    paddingTop: Spacing - 25,
    paddingLeft: Spacing - 25,
  },
  aboutItem: {
    marginTop: Spacing - 22,
    flexDirection: 'row',
    alignItems:'center'
  },
  aboutItemWrapper: {
    marginLeft: Spacing / 2,
  },
  aboutTitle: {
    fontFamily: fonts.Bold,
    fontSize: textSize.M,
    color: colors.mainText,
  },
  aboutWrapper: {
    position: 'relative',
    marginTop: Spacing - 22,
    marginLeft: Spacing,
  },
  body: {
    flex: 1,
  },
  concertTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: textSize.M,
    color: colors.darkBlue,
    flex:.6
  },
  concertOraganizer: {
    color: colors.error,
    fontFamily: fonts.Medium,
    textTransform:'capitalize',
    fontSize: textSize.M,
    flex:.6
  },
  headerTextWrapper: {
    backgroundColor: colors.solidLightBlue,
    ...globalStyles.flexer,
    padding: Spacing - 20,
    position:'absolute',
    width:'100%',
    bottom:0,
  },
  headerImage: {
    position:'absolute',
    width:'100%',
    height:'100%',
    top:0,
  },
  header: {
    height: height*0.4,
    width,
  }
});
