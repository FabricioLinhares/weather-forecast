import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons'

const Header = ({ background, weather, icon }) => {
  return (
    <LinearGradient
      style={styles.header}
      colors={['#1ed6ff', '#97c1ff']}
    >
      <Text style={styles.date}>{weather.results.date}</Text>
      <Text style={styles.city}>{weather.results.city_name}</Text>

      <Ionicons
        {...icon}
        size={150}
      />

      <Text style={styles.temp}>{weather.results.temp}º</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '95%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  date: {
    color: '#fff',
    fontSize: 17,
  },
  city: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  temp: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
  }
})

export default Header;