import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('camera')}>
        <Feather style={styles.icon} name="camera" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('audio-record')}>
        <Feather style={styles.icon} name="mic" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('brightness')}>
        <Feather style={styles.icon} name="sun" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('calendar')}>
        <Feather style={styles.icon} name="calendar" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('code-scanner')}>
        <Feather style={styles.icon} name="aperture" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('contacts')}>
        <Feather style={styles.icon} name="phone" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('face-detector')}>
        <Feather style={styles.icon} name="user" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('image-picker')}>
        <Feather style={styles.icon} name="image" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('location')}>
        <Feather style={styles.icon} name="map-pin" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('media-library')}>
        <Feather style={styles.icon} name="book-open" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('notifications')}>
        <Feather style={styles.icon} name="bell" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('sensors')}>
        <Feather style={styles.icon} name="activity" size={100} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('call-phone')}>
        <Feather style={styles.icon} name="phone-call" size={100} />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  icon: {
    marginTop: 40,
    color: 'black',
  }
})