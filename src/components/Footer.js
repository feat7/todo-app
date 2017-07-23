/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const footer = () => {
 return  (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text>All</Text>
      </View>
      <View style={styles.button}>
      <Text>Active</Text>
      </View>
      <View style={styles.button}>
      <Text>Completed</Text>
      </View>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRightWidth: 1,
    borderRightColor: '#000'
  }
});

export default footer;
