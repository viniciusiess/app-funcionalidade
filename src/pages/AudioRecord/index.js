import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'

import AccessPermited from '../../components/AccessPermited'
import AccessDanied from '../../components/AccessDanied'

export default function AudioRecord() {
  const [hasPermission, setHaspermission] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await AudioRecord.requestPermissionsAsync()
      setHaspermission(status === 'granted')
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
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
      <AccessPermited />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});