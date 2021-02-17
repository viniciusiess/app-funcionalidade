import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions'
import { Calendar } from 'react-native-calendario';

import AccessPermited from '../../components/AccessPermited'
import AccessDanied from '../../components/AccessDanied'

export default function CalendarPage() {
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
    return <AccessDanied />
  }

  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Calendar
          onChange={(range) => console.log(range)}
          minDate={new Date(2018, 3, 20)}
          startDate={new Date(2018, 3, 30)}
          endDate={new Date(2018, 4, 5)}
          theme={{
            activeDayColor: {},
            monthTitleTextStyle: {
              color: '#6d95da',
              fontWeight: '300',
              fontSize: 16,
            },
            emptyMonthContainerStyle: {},
            emptyMonthTextStyle: {
              fontWeight: '200',
            },
            weekColumnsContainerStyle: {},
            weekColumnStyle: {
              paddingVertical: 10,
            },
            weekColumnTextStyle: {
              color: '#b6c1cd',
              fontSize: 13,
            },
            nonTouchableDayContainerStyle: {},
            nonTouchableDayTextStyle: {},
            startDateContainerStyle: {},
            endDateContainerStyle: {},
            dayContainerStyle: {},
            dayTextStyle: {
              color: '#2d4150',
              fontWeight: '200',
              fontSize: 15,
            },
            dayOutOfRangeContainerStyle: {},
            dayOutOfRangeTextStyle: {},
            todayContainerStyle: {},
            todayTextStyle: {
              color: '#6d95da',
            },
            activeDayContainerStyle: {
              backgroundColor: '#6d95da',
            },
            activeDayTextStyle: {
              color: 'white',
            },
            nonTouchableLastMonthDayTextStyle: {},
          }}
        />
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