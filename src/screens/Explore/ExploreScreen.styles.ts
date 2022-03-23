import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import { blue, red } from 'react-native-reanimated/src/reanimated2/Colors';
import {colors, fonts, height, Spacing, textSize, width} from '../../constants';

export const styles = StyleSheet.create({
    eventTitle:{
        marginHorizontal:Spacing,
        marginTop:Spacing-10,
        marginBottom:Spacing-22,
        color:colors.blue,
        fontFamily:fonts.SemiBold,
        fontSize:textSize.XL

    },
    filterButton:{
      paddingVertical:Spacing-25,
      paddingHorizontal:Spacing-20
    },
    searchFilterWrapper:{
     flexDirection:'row',
     marginHorizontal:Spacing,
     marginTop:Spacing-25
    //  backgroundColor:"red",
    },
    searchButton:{
        marginVertical:10

    },
    searchField:{
        marginHorizontal:Spacing-20,
        width:180,
        color:colors.blue,
        
        // textDecorationLine:0,
        
    },
    eventsearch:{
      backgroundColor:colors.lightBlue,
      marginHorizontal:0,
      width:250,
      flexDirection:'row',
      height:45,
      borderRadius:12

    },
    eventheader:{
        backgroundColor:colors.background

    }
    
  
  
});
