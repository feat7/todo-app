/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch
} from 'react-native';

export default class Row extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let { item, index, change } = this.props;
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Switch style={styles.switch} value={item.completed} onValueChange={ (value, targetItem = index) => { change(value, targetItem); } } />
      </View>
    )
  }
}


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
