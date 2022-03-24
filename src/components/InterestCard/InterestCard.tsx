import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import interestCardStyles from './interestCard.styles'
import { colors, width } from '../../constants'
import { Interest } from '../../../types'

interface Props {
    item: Interest,
    index: number,
    handleChange: () => void
}

const InterestCard:React.FC<Props> = ({ item,index,handleChange }) => {

  const marginLeft = (index: number) => {
      if (index === 0 || index === 3 || index === 6) return 0
      else return width * 0.02
  }
    
  return (
    <TouchableOpacity onPress={handleChange} style={[interestCardStyles.wrapper,{ marginLeft: marginLeft(index),borderWidth: item.status ? 3 : 0 }]}>
        <Image source={item.image} style={interestCardStyles.image} />
        <Text numberOfLines={1} style={interestCardStyles.title}>{item.title}</Text>
        <LinearGradient colors={[ 'transparent','rgba(0,0,0,.5)']} style={interestCardStyles.gradient} />
    </TouchableOpacity>
  )
}

export default InterestCard

const styles = StyleSheet.create({})