import { StyleSheet } from 'react-native'
import { colors, fonts, Spacing, textSize, width } from '../../constants'

export const styles = StyleSheet.create({
  icon:{
    padding:5
  },
  bigCircle:{
    width:width*0.7,
    height:width*0.7,
    borderRadius: width*0.7,
    backgroundColor:colors.lightBlue
  },
  smallCircle:{
    width:width*0.25,
    height:width*0.25,
    borderRadius: width*0.7,
    backgroundColor:colors.lightBlue
  },
  circleWrapper:{
    position:'absolute',
    left: -width*0.2,
    top: -width*0.2,
    flexDirection:"row",
    alignItems:"flex-end",
    opacity:.5
  },
  signup:{
    fontFamily: fonts.SemiBold,
    color:colors.primary,
    textDecorationLine:"underline",
    marginLeft:3
  },
  footer:{
    textAlign:'center',
    fontFamily:fonts.Regular,
    color:colors.lightText
  },
  forgotPassword:{
    textAlign:"left",
    width:"100%",
    fontFamily: fonts.Medium,
    color:colors.primary,
    margin:Spacing/2,
    marginLeft:Spacing,
  },
    form:{
      // flex:.5,
      justifyContent:'space-between'
    },
    mainText:{
      fontFamily:fonts.Bold,
      fontSize: textSize.L,
      color:colors.blue,
      marginBottom: Spacing
    },
    secondaryText:{
      fontFamily: fonts.Regular,
      color:colors.mutedText
    },
    title:{
      fontFamily: fonts.Bold,
      fontSize: textSize.XL,
      color:colors.mainText,
      textAlign:'center'
    },
    screen:{
      flex:1,
      backgroundColor:colors.background,
      justifyContent:"space-evenly",
      paddingHorizontal:Spacing
    }
})