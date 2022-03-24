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
    alignItems:'center',
    justifyContent:"space-between",
    marginHorizontal:30,
    marginVertical:10,
    backgroundColor:colors.background,
    borderRadius:borderRadius.SM,
    elevation:3,
    paddingHorizontal:Spacing-20,
    paddingVertical:Spacing-20,
  },
  eventImage:{
    width: width*0.2,
    height: width*0.2,
    borderRadius:borderRadius.SM,
  },
  eventprice:{
    // width:65,
    color:colors.primary,
  },
  eventDescription:{
    flex:.9,
  },
  eventDate:{
    marginTop:15,
    fontFamily:fonts.Medium,
    color:colors.mutedBlue
  },
  eventpricetext:{
    color:colors.error,
  
  },
  
});
