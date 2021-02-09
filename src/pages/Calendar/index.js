import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'

export default function Calendar() {
  const [hasPermission, setHaspermission] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestPermissionsAsync()
      setHaspermission(status === 'granted')
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CALENDAR)
      setHaspermission(status === 'granted')
    })()
  }, [])

  if(hasPermission === null){
    return <View />
  }

  if(hasPermission === false){
    return <Text>Acesso negado!</Text>
  }

  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="calendar-day" size={43} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});