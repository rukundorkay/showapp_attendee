import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors, fonts, height, Spacing, textSize, width} from '../../constants';

export const styles = StyleSheet.create({
  button:{
    marginLeft:Spacing+20,
    bottom:20,
    position:'absolute',
    zIndex:10
    

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
  },
  aboutItemWrapper: {
    marginLeft: Spacing - 22,
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
    flex: 2,
  },
  concertTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: textSize.M,
    color: "#323F5A",
  },
  concertOraganizer: {
    color: colors.error,
  },

  headerTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C9D3E690',
    opacity:0.7,
    padding: Spacing - 20,
  },
  headerImage: {
    flex: 6,
    height: 150,
    width: width,
  },
  header: {
   
    position:'absolute',
    top:0,
    flex: 1,
    height: 200,
    width: width,
    zIndex:10
  },
  

});
