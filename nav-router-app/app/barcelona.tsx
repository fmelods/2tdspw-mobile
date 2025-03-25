import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Barcelona = () => {
  return (
    <View>
      <Text>Barcelona</Text>
      <Link href="/">Voltar</Link>
    </View>
  )
}

export default Barcelona