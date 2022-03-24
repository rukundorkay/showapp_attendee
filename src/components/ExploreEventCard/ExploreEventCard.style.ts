import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import {width, colors, Spacing, borderRadius, fonts} from '../../constants';

export default StyleSheet.create({
  eventname:{
    fontFamily:fonts.Medium,
    color:colors.mainText

  },
  eventWrapper:{
    flexDirection:'row',
    marginHorizontal:30,
    marginVertical:10,
    backgroundColor:colors.background,
    borderRadius:5,
    elevation:3,
    paddingLeft:Spacing-20,
    paddingVertical:Spacing-20
    
      },
  eventImage:{
    width:60,
    height:60,
    borderRadius:8
  },
  eventprice:{
    width:65,
  },
  eventDescription:{
    marginVertical:Spacing-25,
    marginHorizontal:Spacing-20,
  
  },
  eventDate:{
    marginTop:15,
    fontFamily:fonts.Medium,
    color:'#8693AD'
  },
  eventpricetext:{
    color:colors.error,
    marginLeft:30,
    marginTop:35
  
  },
  
});
