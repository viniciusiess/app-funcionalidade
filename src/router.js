import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Camera from './pages/Camera'
import AudioRecord from './pages/AudioRecord'
import Brightness from './pages/Brightness'
import Calendar from './pages/Calendar'
import CodeScanner from './pages/CodeScanner'
import Contacts from './pages/Contacts'
import FaceTouchDetector from './pages/FaceTouchDetector'
import ImagePickerExample from './pages/ImagePicker'
import Location from './pages/Location'
import MediaLibrary from './pages/MediaLibrary'
import Notifications from './pages/Notifications'
import Sensors from './pages/Sensors'
import CallPhone from './pages/CallPhone'

const Stack = createStackNavigator()

function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="camera" 
          component={Camera} 
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="audio-record" 
          component={AudioRecord} 
          options={{ headerShow: false }}
        />

        <Stack.Screen
          name="brightness"
          component={Brightness}
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="calendar" 
          component={Calendar} 
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="code-scanner" 
          component={CodeScanner} 
          options={{ headerShow: false }}
        />

        <Stack.Screen
          name="contacts"
          component={Contacts}
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="face-touch-detector" 
          component={FaceTouchDetector} 
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="location" 
          component={Location} 
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="image-picker" 
          component={ImagePickerExample} 
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="media-library" 
          component={MediaLibrary} 
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="notifications" 
          component={Notifications} 
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="sensors" 
          component={Sensors} 
          options={{ headerShow: false }}
        />

        <Stack.Screen 
          name="call-phone" 
          component={CallPhone} 
          options={{ headerShow: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes