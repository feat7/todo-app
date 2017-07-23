/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const footer = () => {
 return  (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}><Text>All</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text>Active</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text>Completed</Text></TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: 4
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    justifyContent: 'space-between'
  }
});

export default footer;
