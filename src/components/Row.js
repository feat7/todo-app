/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch
} from 'react-native';

const renderRow = ({item, change}) => (
  <View style={styles.rowContainer}>
    <Text style={styles.text}>{item.title}</Text>
    <Switch style={styles.switch} value={item.completed} onValueChange={change} />
  </View>
)

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  text: {
    flex: 1
  },
  switch: {
  }
})

export default renderRow;
