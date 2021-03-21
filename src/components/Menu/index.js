import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

// import { Container } from './styles';

const Menu = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={ () => navigation.openDrawer() }>
      <Feather
        name="menu"
        size={36}
        color="#373737"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9,
    width: 70,
    height: 70,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    left: 15,
    top: 40,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation:2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 1
    }
  }
})

export default Menu;