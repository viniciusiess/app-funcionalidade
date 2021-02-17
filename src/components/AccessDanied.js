import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AccessDanied() {
  return (
    <View>
      <Text style={styles.text}>Acesso Negado</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 50,
    color: 'red'
  }
})