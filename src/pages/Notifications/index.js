import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'

import AccessPermited from '../../components/AccessPermited'
import AccessDanied from '../../components/AccessDanied'

export default function Notifications() {
  const [hasPermission, setHaspermission] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync()
      setHaspermission(status === 'granted')
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      setHaspermission(status === 'granted')
    })()
  }, [])

  if(hasPermission === null){
    return <View />
  }

  if(hasPermission === false){
    return <AccessDanied />
  }

  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <AccessPermited />
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