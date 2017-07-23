/* @flow */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch
} from 'react-native';

export default class Row extends Component {

  constructor() {
    super(props);

    
  }

  render() {
    <View style={styles.rowContainer}>
      <Text style={styles.text}>{item.title}</Text>
      <Switch style={styles.switch} value={item.completed} onValueChange={(value) => this.setState({
         }) } />
    </View>
  }
}

const renderRow = ({item, change}) => (
  <View style={styles.rowContainer}>
    <Text style={styles.text}>{item.title}</Text>
    <Switch style={styles.switch} value={item.completed} onValueChange={(value) => this.setState({
       }) } />
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
