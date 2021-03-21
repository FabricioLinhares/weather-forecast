import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { condition } from '../../utils/condition'

const Forecast = ({ data }) => {
  const icon = condition(data.condition)
  
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{data.date}</Text>
      <Ionicons {...icon} size={25} />

      <View style={styles.temp}>
        <Text>{data.min}º</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }} >{data.max}º</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginLeft: 12,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  date: {
    fontSize: 14
  },
  temp: {
    alignItems: 'center',
  }
})

export default Forecast;