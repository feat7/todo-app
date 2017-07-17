/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const renderRow = ({item}) => (
  <View style={styles.rowContainer}>
    <Text>{item.title}</Text>
  </View>
)

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  text: {

  }
})

export default renderRow;
