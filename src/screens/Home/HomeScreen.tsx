import { StatusBar, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { styles } from './HomeScreen.styles'
import { colors } from '../../constants'
import { StoreContext } from '../../context'
import { useContextMode } from '../../context/useContext'

const HomeScreen = () => {
  const { authInfo } = useContextMode()
  return (
    <View>
      <Text style={styles.title}>{ authInfo?.name }</Text>
      <StatusBar backgroundColor={colors.primary} />
    </View>
  )
}

export default HomeScreen

