import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AccessPermited() {
  return (
    <View>
      <Text style={styles.text}>Acesso Permitido</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 50,
    color: 'green'
  }
})