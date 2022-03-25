import { StyleSheet } from 'react-native'
import { colors, fonts, globalStyles, height, Spacing, textSize, width } from '../../constants'

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
    color:colors.lightText,
    marginBottom:Spacing*2,
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
      paddingTop:Spacing*3,
    },
    secondaryText:{
      fontFamily: fonts.Regular,
      color:colors.mutedText,
      marginBottom: Spacing/2
    },
    title:{
      fontFamily: fonts.Bold,
      fontSize: textSize.XL,
      color:colors.mainText,
      textAlign:'center'
    },
    screen:{
      flex:1,
      paddingHorizontal:Spacing,
      minHeight:height,
    },
    footerWrapper:{
      ...globalStyles.flexer,
      justifyContent:'center',
      alignItems:'flex-start',
      marginTop:Spacing/2
    },
})