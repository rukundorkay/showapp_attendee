import { StyleSheet } from 'react-native'
import { colors, fonts, textSize } from '../../constants'

export const styles = StyleSheet.create({
    title:{
      fontFamily: fonts.Bold,
      fontSize: textSize.XL,
      color:colors.mainText,
      textAlign:'center'
    }
  })